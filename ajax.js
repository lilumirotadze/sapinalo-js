//fetch - promise : then catch

let currentPage = 1;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status !== 200) {
            throw 'error';
        }
        return response.json();
    })
    .then(function(responseData) {

        var fragment = document.createDocumentFragment();

        responseData.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.last_name;

            fragment.appendChild(li);
        });

        document.getElementById('user-list').appendChild(fragment);
    })
    .catch(function(error) {
       
        if (error == 404) {
            let p = document.createElement('p');
            p.textContent = 'Page not Found';

            document.getElementById('api').appendChild(p)
        } else {
            let p = document.createElement('p');
            p.textContent = 'Server Error';

            document.getElementById('api').appendChild(p)
        }

    })
}


document.getElementById('loadmore').addEventListener('click', function() {
    // currentPage = currentPage + 1;
    currentPage += 1;
    getUsers(currentPage);
})

getUsers(currentPage);


