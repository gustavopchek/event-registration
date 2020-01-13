function floatSummary(){
  if($(this).width() > 992){
    if($(this).scrollTop() > 137){
      if(!$('.summary').hasClass('fixed')){
        $('.summary').addClass('fixed');
      }
    }else{
      if($('.summary').hasClass('fixed')){
        $('.summary').removeClass('fixed');
      }
    }
  }else{
    if($('.summary').hasClass('fixed')){
      $('.summary').removeClass('fixed');
    }
  }
}


$(window).scroll(function(){

  floatSummary();
});


$(document).ready(function() {

  loadCities(true);

  $('form #state_id').change(function()
    {
      loadCities(false);
    }
  );

  if($('#checkout').length > 0){
    PagSeguroDirectPayment.getPaymentMethods({
      amount: $('input#event_price').val(),
      success: function(response) {
          $('#online-debit-data .loader').slideUp();
          paymentMethods = response.paymentMethods;
          bankList = $("#online-debit-data .collection");
          $.each(paymentMethods.ONLINE_DEBIT.options, function(i,option){
              bankListItem = $('<li class="collection-item"></li>');
              bankListItem.append('<input name="bank_name" type="radio" id="bank_name-'+ option.name +'" value="'+ option.name +'" /><label for="bank_name-'+ option.name +'"><img src="https://stc.pagseguro.uol.com.br/'+ option.images.MEDIUM.path +'"/>'+ option.displayName +'</label>');
              bankList.append(bankListItem);
          });
      },
      error: function(response) {
          //tratamento do erro
      },
      complete: function(response) {
          //tratamento comum para todas chamadas
      }
    });
  }

  $('#checkout form').submit(function(event) {

    $("input[name=sender_hash]").val('');
    $("input[name=card_token]").val('');

    $('.error-block').slideUp();
    $('input').removeClass('validate invalid');
    $("#checkout-result").text('');
    $("#checkout-result").slideUp();
    $("#checkout-result").removeClass('alert alert-danger');


    $("#checkout-loader").css('opacity', '1');
    $("#checkout form input[type=submit]").val('Finalizando...');
    $("#checkout form input[type=submit]").attr('disabled', 'disabled');

    event.preventDefault();

    var payment_method = $('input[name="payment_type"]:checked').val();

    if(payment_method == "credit_card"){
      console.log('credit card');
      var param = {
          cardNumber: $("input#card_number").val(),
          cvv: $("input#card_cvc").val(),
          expirationMonth: $('input[name="card_expiration_month"]').val(),
          expirationYear: $('input[name="card_expiration_year"]').val(),
          success: function(response) {
              $('input#card_token').val(response.card.token);
              console.log('card_token');
              getSenderHash();
          },
          error: function(response) {

              $("#card_number").addClass('invalid');
              // $("#card_number").parent().append('<small class="error-block red-text text-darken-1">É obrigatório</small>');

              $("#card_expiration_month").addClass('invalid');
              // $("#card_expiration_month").parent().append('<small class="error-block red-text text-darken-1">É obrigatório</small>');

              $("#card_expiration_year").addClass('invalid');
              // $("#card_expiration_year").parent().append('<small class="error-block red-text text-darken-1">É obrigatório</small>');

              $("#card_cvc").addClass('invalid');
              // $("#card_cvc").parent().append('<small class="error-block red-text text-darken-1">É obrigatório</small>');
              showErrors();
          },
          complete: function(response) {
              //tratamento comum para todas chamadas
          }
      }

      //parâmetro opcional para qualquer chamada
      if($("input#card_brand").val() != '') {
          param.brand = $("input#card_brand").val();
      }

      PagSeguroDirectPayment.createCardToken(param);

    }else if(payment_method == "online_debit"){
      getSenderHash();
    }else{
      $('.select_type .error-div').append('<small class="error-block red-text text-darken-1">Selecione o método de pagamento.</small>');
      showErrors();
    }



  });

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );

  $(".button-collapse").sideNav();
  $('select').material_select();

  $("input[name='cpf']").mask('00000000000');
  $("input[name='credit_card_holder_cpf']").mask('00000000000');

  $("input[name='date_of_birth']").mask('00/00/0000');
  $("input[name='credit_card_holder_date_of_birth']").mask('00/00/0000');

  var PhoneMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  phoneOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(PhoneMaskBehavior.apply({}, arguments), options);
      }
  };

  $('input[name="phone"]').mask(PhoneMaskBehavior, phoneOptions);
  $('input[name="credit_card_holder_phone"]').mask(PhoneMaskBehavior, phoneOptions);

  $('#checkout form').card({
      // a selector or DOM element for the container
      // where you want the card to appear
      container: '.card-wrapper', // *required*

      formSelectors: {
          numberInput: 'input#card_number', // optional — default input[name="number"]
          expiryInput: ['input[name="card_expiration_month"]', 'input[name="card_expiration_year"]'], // optional — default input[name="expiry"]
          cvcInput: 'input#card_cvc', // optional — default input[name="cvc"]
          nameInput: 'input#credit_card_holder_name' // optional - defaults input[name="name"]
      },

      // width: 200, // optional — default 350px
      formatting: true, // optional - default true

      // Strings for translation - optional
      messages: {
          validDate: 'valid\ndate', // optional - default 'valid\nthru'
          monthYear: 'mm/aaaa', // optional - default 'month/year'
      },

      // Default placeholders for rendered fields - optional
      placeholders: {
          number: '•••• •••• •••• ••••',
          name: 'Nome Completo',
          expiry: '••/••',
          cvc: '•••'
      },

      masks: {
          cardNumber: '•' // optional - mask card number
      },

      // if true, will log helpful messages for setting up Card
      debug: false // optional - default false
  });

  $('input[name="payment_type"]').change(function(){
    checkPaymentType();
  });

  $('#card_number').change(function(){
    checkInstallments();
  });

  $('input[name="same_address"]').change(function(){
    checkAddress();
  });

  $("#installments").change(function() {
    var option = $(this).find("option:selected");
    if (option.length && option.val() != "") {
      $("#installment_value").val( option.attr("data-price") );
      $('.summary .installment_option').text(option.val() + 'x de ' + parseFloat(option.attr("data-price")).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+ ' (total: '+ parseFloat(option.attr("data-total")).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) +')');
    }else{
      $("#installment_value").val("");
      $('.summary .installment_option').text('Não selecionado');
    }
  });

  checkPaymentType();
  checkInstallments();
  checkAddress();


});

function loadCities(firstLoad){


    $.getJSON("/states/"+ $("#state_id").val() +"/cities", function(jsonData){

        select = $("#city_id");
        select.children().remove();
          $.each(jsonData, function(i,data)
          {
               select.append('<option value="'+data.id+'">'+data.name+'</option>');
           });
        // $("#city_id").material_select();
        select.promise().done(function() {
            if(!firstLoad){
                $("#city_id").val($("#city_id option:first").val()).change();
                $("#city_id").material_select();
            }else if(typeof(city_id) != "undefined"){
                $( "#city_id" ).val(city_id).change();
                $("#city_id").material_select();
            }
        });
    });
}

function showErrors(){
  $("#checkout-result").text('Verifique se os dados foram informados corretamente.');
  $("#checkout-result").addClass('alert alert-danger');
  $("#checkout-result").slideDown();

  $("#checkout-loader").css('opacity', '0');
  $("#checkout form input[type=submit]").val('Finalizar');
  $("#checkout form input[type=submit]").attr('disabled', false);
}

function submitCheckout(){

  payment_type = $("input[name=payment_type]:checked").val();
  sender_hash = $("input[name=sender_hash]").val();
  card_token = $("input[name=card_token]").val();
  credit_card_holder_name = $("input[name=credit_card_holder_name]").val();
  credit_card_holder_phone = $("input[name=credit_card_holder_phone]").val();
  credit_card_holder_cpf = $("input[name=credit_card_holder_cpf]").val();
  credit_card_holder_date_of_birth = $("input[name=credit_card_holder_date_of_birth]").val();
  same_holder = $("input[name=same_holder]:checked").val();
  installments = $("#installments").find('option:selected').val();
  installment_value = $("input[name=installment_value]").val();
  token = $("input[name=_token]").val();

  same_address = $("input[name=same_address]:checked").val();
  street = $("input[name=street]").val();
  number = $("input[name=number]").val();
  complement = $("input[name=complement]").val();
  district = $("input[name=district]").val();
  postal_code = $("input[name=postal_code]").val();
  city_id = $("#city_id").find('option:selected').val();
  state_id = $("#state_id").find('option:selected').val();

  bank_name = $("input[name=bank_name]:checked").val();


  // process the form
  $.ajax({
      headers: {'X-CSRF-TOKEN': token},
      type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url         : $("#checkout form").attr('action'), // the url where we want to POST
      data        : { payment_type: payment_type,
        sender_hash: sender_hash,
        card_token: card_token,
        credit_card_holder_name:
        credit_card_holder_name,
        credit_card_holder_phone: credit_card_holder_phone,
        credit_card_holder_cpf: credit_card_holder_cpf,
        credit_card_holder_date_of_birth: credit_card_holder_date_of_birth,
        same_holder: same_holder,
        installments: installments,
        installment_value: installment_value,
        same_address: same_address,
        street: street,
        number: number,
        complement: complement,
        district: district,
        postal_code: postal_code,
        city_id: city_id,
        state_id: state_id,
        bank_name: bank_name,
      },
      dataType    : 'json', // what type of data do we expect back from the server
      encode          : true,
      success : function(data){
        console.log(data);
        $("#checkout-loader").css('visibility', 'hidden');
        window.location.assign(data.redirectUrl);
        // $("#checkout-result").text(data.contact.message)
        // if(data.contact.result == "1"){
        //   $("#checkout-result").removeClass("alert-danger");
        //   $("#checkout-result").addClass("alert-success");
        // }else{
        //   $("#checkout-result").removeClass("alert-success");
        //   $("#checkout-result").addClass("alert-danger");
        // }
        // $('form').trigger("reset");
        // $("#checkout-result").css('visibility', 'visible');
        // $("form button[type=submit]").attr('disabled', false);
        // $("form button[type=submit]").text('Enviar');
        // grecaptcha.reset();
      },
      error : function(data){
        console.log(data);
        if (typeof data.responseJSON.errors != "undefined" && 'general' in data.responseJSON.errors){
          $("#checkout-result").text(data.responseJSON.errors['general']);
        }else{
          $("#checkout-result").text('Verifique se os dados foram informados corretamente.');
        }

        $("#checkout-result").addClass('alert alert-danger');
        $("#checkout-result").slideDown();

        $("#checkout-loader").css('opacity', '0');
        $("#checkout form input[type=submit]").val('Finalizar');
        $("#checkout form input[type=submit]").attr('disabled', false);

        if(typeof data.responseJSON.errors != "undefined"){
          if ('payment_type' in data.responseJSON.errors){
            $('.select_type .error-div').append('<small class="error-block red-text text-darken-1">Selecione o método de pagamento.</small>');
          }else{
            $.each(data.responseJSON.errors, function(i,error){
              console.log(i);
              $("#"+i).addClass('invalid');
              $("#"+i+'+ label').parent().append('<small class="error-block red-text text-darken-1">'+ error +'</small>');
              $("select#"+i).parent().find('input').addClass('invalid');
              $("select#"+i).parent().append('<small class="error-block red-text text-darken-1">'+ error +'</small>');
            });
          }
        }
        
        
        // $("#checkout-loader").css('visibility', 'hidden');
        // $("#checkout-result").text("Erro ao enviar mensagem. Verifique o preenchimento do formulário.");
        // $("#checkout-result").removeClass("alert-success");
        // $("#checkout-result").addClass("alert-danger");
        // $("#checkout-result").css('visibility', 'visible');
        // $("form button[type=submit]").attr('disabled', false);
        // $("form button[type=submit]").text('Enviar');
        // grecaptcha.reset();
      }
  })
}

function getSenderHash(){
  $('#sender_hash').val(PagSeguroDirectPayment.getSenderHash());
  var sender_hash = '';
  var senderHashInterval = window.setInterval(function(){
    sender_hash = $("input#sender_hash").val();
    if(sender_hash.length > 0){
      clearInterval(senderHashInterval);
      console.log('sender_hash');
      submitCheckout();
    }
  }, 2000);
}

// function checkInstallments(){

//   getInstallments()
// }

function checkPaymentType(){
  $('.error-block').remove();
  $('input').removeClass('validate invalid');
  var pm = "";
  switch($('input[name="payment_type"]:checked').val()){
    case 'credit_card':
      pm = "Cartão de Crédito";
      $('#online-debit-data').slideUp();
      $('#credit-card-data').slideDown();
      break;
    case 'online_debit':
      pm = "Débito Online";
      $('#credit-card-data').slideUp();
      $('#online-debit-data').slideDown();
      break;
    default:
      $('#online-debit-data').slideUp();
      $('#credit-card-data').slideUp();
      break;
  }
  if(pm.length > 0){
    $('.summary .payment_method').text(pm);
  }else{
    $('.summary .payment_method').text('Não selecionado');
  }
}

function checkAddress(){
  var same_address = $('input[name="same_address"]:checked').val();
  if(same_address == "1"){
    $('.billing_address_alt').slideUp();
  }else{
    $('.billing_address_alt').slideDown();
  }
}

function getBrand(){
  PagSeguroDirectPayment.getBrand({
    cardBin: $('input#card_number').val().replace(/ /g,'').substring(0,6),
    success: function(response) {
      return response.brand;
    },
    error: function(response) {
      return false;
    },
    complete: function(response) {

    }
  });
}


function checkInstallments(){

  length = $('input#card_number').val().replace(/ /g,'').length;

  if(length >= 6){

    current_brand = $('input#card_brand').val();

    PagSeguroDirectPayment.getBrand({
      cardBin: $('input#card_number').val().replace(/ /g,'').substring(0,6),
      success: function(response) {

        brand = response.brand.name;

        if(brand != current_brand){

          $('input#card_brand').val(brand);

          PagSeguroDirectPayment.getInstallments({
              amount: $('input#event_price').val(),
              // maxInstallmentNoInterest: 1,
              brand: brand,
            success: function(response) {
              setInstallments(brand, response.installments);

              // if(alertUser && $('#installments').find('option:selected').val() != ""){
              //   if($('.installments .error-block').length == 0){
              //     $('.installments').append('<small class="error-block red-text text-darken-1">A bandeira do cartão foi alterada. Selecione o número de parcelas.</small>');
              //   }else{
              //     $('.installments .error-block').text('A bandeira do cartão foi alterada. Selecione o número de parcelas.');
              //   }
              // }

              alertUser = true;
              
            },
            error: function(response) {
              return false;
            },
            complete: function(response) {

            }
          });
        }
      },
      error: function(response) {
        alertUser = false;
        $('input#card_brand').val("");
        select = $("#installments");
        select.children().remove();
        $('.installments').slideUp();
      },
      complete: function(response) {

      }
    });

  }else{
    alertUser = false;
    $('input#card_brand').val("");
    select = $("#installments");
    select.children().remove();
    $('.installments').slideUp();
  }
}

function setInstallments(brand, installments){
  select = $("#installments");
  select.children().remove();
  select.append('<option value disabled selected>Selecione</option>');
  $.each(installments[brand], function(i,data){
    if(i >= maxInstallments){
      return false;
    }
    select.append('<option value="'+data.quantity+'" data-price="'+data.installmentAmount+'" data-total="'+data.totalAmount+'">'+data.quantity+'x de '+data.installmentAmount.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+' (total: '+data.totalAmount.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})+')</option>');
  });
  select.promise().done(function() {
    $("#installments").val($("#installments option:first").val()).change();
    $("#installments").material_select();
    $('.installments').slideDown();
  });
}