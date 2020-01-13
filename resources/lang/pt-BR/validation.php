<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | such as the size rules. Feel free to tweak each of these messages.
    |
    */

    "accepted"         => "O campo :attribute deve ser aceito.",
    "active_url"       => "O campo :attribute não contém um URL válido.",
    "after"            => "O campo :attribute deverá conter uma data posterior a :date.",
    "alpha"            => "O campo :attribute deverá conter apenas letras.",
    "alpha_dash"       => "O campo :attribute deverá conter apenas letras, números e traços.",
    "alpha_num"        => "O campo :attribute deverá conter apenas letras e números .",
    "array"            => "O campo :attribute precisa ser um conjunto.",
    "before"           => "O campo :attribute deverá conter uma data anterior a :date.",
    "between"          => [
        "numeric" => "O campo :attribute deverá ter um valor entre :min - :max.",
        "file"    => "O campo :attribute deverá ter um tamanho entre :min - :max kilobytes.",
        "string"  => "O campo :attribute deverá conter entre :min - :max caracteres.",
        "array"   => "O campo :attribute precisar ter entre :min - :max itens.",
    ],
    "boolean"          => "O campo :attribute deverá ter o valor verdadeiro ou falso.",
    "confirmed"        => "A confirmação para o campo :attribute não coincide.",
    "date"             => "O campo :attribute não contém uma data válida.",
    "date_format"      => "A data indicada para o campo :attribute não respeita o formato :format.",
    "different"        => "Os campos :attribute e :other deverão conter valores diferentes.",
    "digits"           => "O campo :attribute deverá conter :digits dígitos.",
    "digits_between"   => "O campo :attribute deverá conter entre :min a :max dígitos.",
    "email"            => "O campo :attribute não contém um endereço de email válido.",
    "exists"           => "O valor selecionado para o campo :attribute é inválido.",
    "filled"           => "O campo :attribute é obrigatório.",
    "image"            => "O campo :attribute deverá conter uma imagem.",
    "in"               => "O campo :attribute não contém um valor válido.",
    "integer"          => "O campo :attribute deverá conter um número inteiro.",
    "ip"               => "O campo :attribute deverá conter um IP válido.",
    'json'             => 'The :attribute must be a valid JSON string.',
    "max"              => [
        "numeric" => "O campo :attribute não deverá conter um valor superior a :max.",
        "file"    => "O campo :attribute não deverá ter um tamanho superior a :max kilobytes.",
        "string"  => "O campo :attribute não deverá conter mais de :max caracteres.",
        "array"   => "O campo :attribute deve ter no máximo :max itens.",
    ],
    "mimes"            => "O campo :attribute deverá conter um arquivo do tipo: :values.",
    "min"              => [
        "numeric" => "O campo :attribute deverá ter um valor superior ou igual a :min.",
        "file"    => "O campo :attribute deverá ter no mínimo :min kilobytes.",
        "string"  => "O campo :attribute deverá conter no mínimo :min caracteres.",
        "array"   => "O campo :attribute deve ter no mínimo :min itens.",
    ],
    "not_in"           => "O campo :attribute contém um valor inválido.",
    "numeric"          => "O campo :attribute deverá conter um valor numérico.",
    "regex"            => "O formato do valor para o campo :attribute é inválido.",
    "required"         => "O campo :attribute é obrigatório.",
    "required_if"      => "O campo :attribute é obrigatório quando o valor do campo :other é igual a :value.",
    "required_with"    => "O campo :attribute é obrigatório quando :values está presente.",
    "required_with_all" => "O campo :attribute é obrigatório quando um dos :values está presente.",
    "required_without" => "O campo :attribute é obrigatório quanto :values não está presente.",
    "required_without_all" => "O campo :attribute é obrigatório quando nenhum dos :values está presente.",
    "same"             => "Os campos :attribute e :other deverão conter valores iguais.",
    "size"             => [
        "numeric" => "O campo :attribute deverá conter o valor :size.",
        "file"    => "O campo :attribute deverá ter o tamanho de :size kilobytes.",
        "string"  => "O campo :attribute deverá conter :size caracteres.",
        "array"   => "O campo :attribute deve ter :size itens.",
    ],
    "string"           => "O campo :attribute deve ser uma string.",
    "timezone"         => "O campo :attribute deverá ter um fuso horário válido.",
    "unique"           => "O valor indicado para o campo :attribute já se encontra utilizado.",
    "url"              => "O formato do URL indicado para o campo :attribute é inválido.",
    // Recaptcha
    'recaptcha' => 'Não foi possível verificar se você não é um robô.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        'email' => 'E-mail',
        'username' => 'Usuário',
        'password' => 'Senha',
        'password_confirmation' => 'Confirmar Senha',
        'current_password' => 'Senha Atual',
        'login' => 'Login',
        'remember' => 'Lembrar Senha',
        'forgotpassword' => 'Esqueci a senha',
        'g-recaptcha-response' => 'Não sou um robô',

        'date_event' => 'Data do Evento',
        'time_event' => 'Hora do Evento',
        'date_start_enrollment' => 'Data de Início das Inscrições',
        'time_start_enrollment' => 'Hora de Início das Inscrições',
        'date_end_enrollment' => 'Data de Término das Inscrições',
        'time_end_enrollment' => 'Hora de Término das Inscrições',
        'price' => 'Preço',
        'spaces' => 'Vagas',

        // Participant
        'name' => 'Nome Completo',
        'cpf' => 'CPF',
        'date_of_birth' => 'Data de Nascimento',
        'marital_status' => 'Estado Civil',
        'gender' => 'Sexo',
        'member' => 'Membro',
        'phone' => 'Telefone',
        'street' => 'Rua',
        'number' => 'Número',
        'complement' => 'Complemento',
        'district' => 'Bairro',
        'postal_code' => 'CEP',
        'city' => 'Cidade',
        'state' => 'Estado',
        'city_id' => 'Cidade',
        'state_id' => 'Estado',

        // Checkout
        'payment_type' => 'Método de Pagamento',
        'sender_hash' => 'Código do Remetente',
        'credit_card_holder_name' => 'Nome do Titular do Cartão',
        'credit_card_holder_phone' => 'Telefone do Titular do Cartão',
        'credit_card_holder_cpf' => 'CPF do Titular do Cartão',
        'credit_card_holder_date_of_birth' => 'Data de Nascimento do Titular do Cartão',
        'installments' => 'Parcelas',
        'installment_value' => 'Valor da Parcela',
    ],

];
