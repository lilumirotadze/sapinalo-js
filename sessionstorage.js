// sessionstorage

// let counter = sessionStorage.getItem('counter');

// let newValue;

// if (!counter) {
    // newValue = 1;
// } else {
    // newValue = parseInt(counter) + 1;
// }

// sessionStorage.setItem('counter', newValue);

// document.getElementById('counter').textContent = sessionStorage.getItem('counter');




// localStorage

// let counter = localStorage.getItem('counter');

// let newValue;

// if (!counter) {
    // newValue = 1;
// } else {
    // newValue = parseInt(counter) + 1;
// }

// localStorage.setItem('counter', newValue);

// document.getElementById('counter').textContent = localStorage.getItem('counter');




// Cookies

let counter = Cookies.get('counter');

let newValue;

if (!counter) {
    newValue = 1;
} else {
    newValue = parseInt(counter) + 1;
}

Cookies.set('counter', newValue);

document.getElementById('counter').textContent = Cookies.get('counter');




