// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})
// form validation 

document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;
    
    let username = document.querySelector('[name = "username"]');

    if (username.length < 4 || username == " " ){
        errors.username = 'სახელი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს';
    }

    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if (password != password2) {
        errors.password = 'პაროლი არ ემთხვევა';
    }

    let checkbox = document.getElementById('agreecheckbox').checked;

    if (!checkbox) {
        errors.agree = 'ვეთანხმები წესებს და პირობებს';
    }

    let age = false;

    form.querySelectorAll('[name = "age"]').forEach( item => {
        if (item.checked) {
            age = true;
        }
    });

    if (!age) {
        errors.age = 'გთხოვთ მიუთითოთ ასაკი';
    }


    console.log(errors);

    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    })

    for (let item in errors) {
        let errorPlaceholder = document.getElementById('error_' + item);

        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[item];
        }
    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }

});