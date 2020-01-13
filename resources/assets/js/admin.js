$(".button-collapse").sideNav();

 $(document).ready(function() {
    $('select').material_select();
    $("input[name='time_event']").mask('00:00');
    $("input[name='time_start_enrollment']").mask('00:00');
    $("input[name='time_end_enrollment']").mask('00:00');
    $("input[name='price']").mask('000.000.000.000.000,00', {reverse: true});
    $("input[name='cpf']").mask('00000000000');
    $("input[name='date_of_birth']").mask('00/00/0000');

    var PhoneMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    phoneOptions = {
        onKeyPress: function(val, e, field, options) {
        field.mask(PhoneMaskBehavior.apply({}, arguments), options);
        }
    };

    $('input[name="phone"]').mask(PhoneMaskBehavior, phoneOptions);

    loadCities(true);

    $('form #state_id').change(function(){
        loadCities(false);
    });

    $('.datepicker').pickadate({
        labelMonthNext: 'Próximo mês',
        labelMonthPrev: 'Mês anterior',
        labelMonthSelect: 'Selecione um mês',
        labelYearSelect: 'Selecione um ano',
        monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
        monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
        weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
        weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
        weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
        today: 'Hoje',
        clear: 'Limpar',
        close: 'Fechar',
        format: 'dd/mm/yyyy',
        formatSubmit: 'yyyy/mm/dd',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $("input[name=time_event], input[name=time_start_enrollment], input[name=time_end_enrollment]").pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Limpar', // text for clear-button
        canceltext: 'Cancelar', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: false, // make AM PM clickable
        aftershow: function(){} //Function for after opening timepicker
    });


    checkInstallments();
    $('input[name="manage_installments"]').change(function(){
        checkInstallments();
    });

    tinymce.suffix = '.min';
    tinymce.init({
        selector:'textarea',
        menubar: false,
        language: 'pt_BR',
        extended_valid_elements : "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
        invalid_styles: 'color font-size font-family line-height letter-spacing',
        plugins: 'link autolink image media autoresize lists advlist',
        image_caption: true,
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink',
        style_formats: [
            {title: 'Headers', items: [
                {title: 'Subtítulo', block: 'h2'},
                {title: 'Título de seção', block: 'h3'},
                {title: 'Subtítulo de seção', block: 'h4'},
                {title: 'Título de subseção', block: 'h5'}
            ]},

            {title: 'Imagem', items: [
                {
                  title: 'Alinhar à esquerda', inline: 'span',  icon: 'alignleft',
                  selector: 'figure',
                  styles: {
                    'float': 'left',
                    'margin': '0 15px 15px 0px'
                  }
                },
                {
                  title: 'Alinhar à direita', inline: 'span',  icon: 'alignright',
                  selector: 'figure',
                  styles: {
                    'float': 'right',
                    'margin': '0 0 15px 15px'
                  }
                },
            ]},

            {title: 'Inline', items: [
                {title: 'Bold', inline: 'b', icon: 'bold'},
                {title: 'Italic', inline: 'i', icon: 'italic'},
                {title: 'Underline', inline: 'span', styles : {textDecoration : 'underline'}, icon: 'underline'},
                {title: 'Strikethrough', inline: 'span', styles : {textDecoration : 'line-through'}, icon: 'strikethrough'},
            ]},

            {title: 'Blocks', items: [
                {title: 'Paragraph', block: 'p'},
                {title: 'Blockquote', block: 'blockquote'},
            ]},

            {title: 'Alignment', items: [
                {title: 'Left', block: 'div', styles : {textAlign : 'left'}, icon: 'alignleft'},
                {title: 'Center', block: 'div', styles : {textAlign : 'center'}, icon: 'aligncenter'},
                {title: 'Right', block: 'div', styles : {textAlign : 'right'}, icon: 'alignright'},
                {title: 'Justify', block: 'div', styles : {textAlign : 'justify'}, icon: 'alignjustify'}
            ]}
        ]
    });

});

function checkInstallments(){
  var manage_installments = $('input[name="manage_installments"]:checked').val();
  if(manage_installments == "1"){
    $('.installments').slideDown();
  }else{
    $('.installments').slideUp();
  }
}

function loadCities(firstLoad){


    $.getJSON("/states/"+ $("#state_id").val() +"/cities", function(jsonData){

        select = $("#city_id");
        select.children().remove();
          $.each(jsonData, function(i,data)
          {
               select.append('<option value="'+data.id+'">'+data.name+'</option>');
           });
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
