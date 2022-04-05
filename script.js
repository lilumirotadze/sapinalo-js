// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

// slide

let data = [
    {
        id:1,
        imageUrl:'https://cdn.pixabay.com/photo/2019/04/02/04/32/masala-4096891_1280.jpg',
        title: 'ოჯახურის სუნელები',
        url: 'https://fb.watch/c5HYRWyUl9/'
    },
    {
        id:2,
        imageUrl:'https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg',
        title: 'მოამზადე ოჯახურით',
        url: 'https://fb.watch/c5I0D903kQ/'
    },
    {
        id:3,
        imageUrl:'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg',
        title: 'ოჯახურის ექსპორტი',
        url: 'https://www.youtube.com/watch?v=eEaZvEZye84'
    },
    {
        id:4,
        imageUrl: 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_1280.jpg',
        title: 'ოჯახურის საწარმო',
        url: 'https://www.youtube.com/watch?v=eEaZvEZye84'
    }
]

let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${item.imageUrl})`;
    tagImage.setAttribute('class', 'slide-bg');
    
    
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);


setSlide();


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