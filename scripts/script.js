const regexIsEmpty = /^\s*$/;
const regexValidEmail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
const regexValidPhone = /\+?\(?(\d{1,3})?\)?\s?\d{4}[\s\-]?\d{4}$/;

document.addEventListener('DOMContentLoaded', function() {
    let contactForm = document.querySelector('#contact form');
    let inputTxtNombre = contactForm.querySelector('#txtNombre');
    let inputTxtEmail = contactForm.querySelector('#txtEmail');
    let inputTxtPhone = contactForm.querySelector('#txtPhone');
    let inputTxtMessage = contactForm.querySelector('#txtMessage');
    let btnContact = contactForm.querySelector('button[name=btnContact]');

    btnContact.addEventListener("click", (e)=>{
        let formValues = {
            nombre: inputTxtNombre.value,
            email: inputTxtEmail.value,
            phone: inputTxtPhone.value,
            message: inputTxtMessage.value
        }
        let errors = {}
        if (regexIsEmpty.test(formValues.nombre)) {
            errors["txtNombre"] = {
                control: inputTxtNombre,
                error: "Nombre no puede ir vacío"
            };
        }

        if (Object.entries(errors).length !== 0) {
            alert("Hay errores en los valores requeridos.");
        }

        e.preventDefault();
        e.stopPropagation();
        console.log("Values en Formulario: " , JSON.stringify(formValues, null , 2));
    });
});