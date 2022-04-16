// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

// filter

let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItems = [];

function getUsers() {
    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(item => {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = `${item.first_name} ${item.last_name}`;

            let img = document.createElement('img');
            img.src = item.avatar;
            li.appendChild(img);
            li.appendChild(span);
            listItems.push(li);


            result.appendChild(li);
        });
    })
    .catch(function(e) {
        console.log(e);
    })
}
getUsers();


function filterData(searchItem) {
    listItems.forEach( (item) => {
        console.log(item);
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() ) ) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

filter.addEventListener('input', (event) => filterData(event.target.value));