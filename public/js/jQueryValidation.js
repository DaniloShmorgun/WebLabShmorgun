import {formJSSend, formJQuerySend,closePopup,openPopup} from './request-send.js';

let person = {}

$(function(){
  $('#My_Form').validate({
    rules:{
      email:{
        required: true,
        email: true
      },
       first_name:
       {
         required:true,
         pattern: /^[а-яА-ЯA-Za-zіІЇїЄє]+/
            
       },
       last_name:
       {
         required:true,

         pattern: /^[а-яА-ЯA-Za-zіІЇїЄє]+/
       },
       number:
       {
        required:true,
         minlength: 12,
         maxlength: 12,
   
       },
       password:
       {
         required: true
       }

    },
    messages: {
      email:{
        required: 'Будь ласка, введіть емейл',
        email: "Будь ласка, введіть правильний формат емейла (example@example.com)"
      },

      first_name:{
        required: "Будь ласка, введіть ім'я",
      },
       last_name:{
        required: 'Будь ласка, введіть прізвище',
       },

       password:{
required: 'Будь ласка, введіть пароль',
       },
       number:{
         required: 'Будь ласка, введіть номер',
    
         minlength:"Будь ласка, введіть номер у </br> вигляді 12 цифр",
         maxlength:"Будь ласка, введіть номер у </br> вигляді 12 цифр"
         
           }
     },
    submitHandler: function (form) {
    const chooser = prompt('Enter "jq" if you want jQuery_send, enter "js" if you want JavaScript_send')

    if (chooser === 'jq') {
        person = formJQuerySend(form)
    }
    else{
        person = formJSSend(form)
    }
    openPopup('#response-popup')
    console.log(person)
}

})
})
