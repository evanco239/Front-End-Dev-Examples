import { isValidZip, alertMessage } from "./validate.js";

const petFrom = document.querySelector("#pet-form");
const results = document.querySelector("#results");
const pageElement = document.querySelector('#page');

let data = "";
let currentPage = 1;

//initial event listener for page 1 query
petFrom.addEventListener("submit", fetchAnimals);
//add event listener to update pages
pageElement.addEventListener('click', updatePage);

//get updated page number for new fetch request
function updatePage(e) {
  if (e.path[0].innerText === 'Next') currentPage++;
  if (e.path[0].innerText === 'Prev') {
    //make sure that we can't go back in index farther than page 1
    if (currentPage === 1) {
      return
    } else {
      currentPage--;
    }
  }
  //call fetch animal with new page number
  fetchAnimals(e);
}

//fetch animals from API
function fetchAnimals(e) {
  e.preventDefault();
  //get user input
  const animal = document.querySelector("#animal").value;
  const zipCode = document.querySelector("#zip").value;

  

  //validate zipcode
  if (!isValidZip(zipCode)) {
    // called with {message, classname}
    alertMessage('Please Enter a Valid Zip Code...', 'danger');
    return;
  }

  // using http request with custom header in command line to pull Oauth token for 60 minute use
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.petfinder.com/v2/animals?type=${animal}&location=${zipCode}&page=${currentPage}`,
    true
  );
  request.setRequestHeader(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzNTE1NGMyMTQ1NWQxNWExN2Y1MmE4NDFhMDlmM2EyMjFlZTYxODJmN2E4MWRiYzlkOWJiOTAwODI0YWI1YjE3NzQzNTQyNjg3ZTlkNjVjIn0.eyJhdWQiOiI5R2toZzNhVjdKU04wVkI1NFBmZkduVzhCdnBHUlIzUVpHajgybVFqNGFRV0JWQzFQSSIsImp0aSI6IjMzNTE1NGMyMTQ1NWQxNWExN2Y1MmE4NDFhMDlmM2EyMjFlZTYxODJmN2E4MWRiYzlkOWJiOTAwODI0YWI1YjE3NzQzNTQyNjg3ZTlkNjVjIiwiaWF0IjoxNTUzMDk0ODkyLCJuYmYiOjE1NTMwOTQ4OTIsImV4cCI6MTU1MzA5ODQ5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.l3FLwFD8EfYHFwNpRJwhMz_V6GZuTMcO1HOv07nJCIGPCHKGgVMseBnuOvphTp4A1t6Iyr9JgeaTqU1iAXybcKF9BFcg2Gk8v-NcT3FAohI3bo0IfFzU_4xTnRXVw3cho5outm4ogaTeDtBwqIWmpvuZLF0o6f4CkOyPqZOjSL7QbhcPJOtgOXJ_gKeVA_wM5oDgKzht0-OogRjn600sXkLGpioeQf4htUW0IT5gK5PuafsSzFS1jWgKjSqBpBo8YunHUZk55KeaqcHjBawPE5wEW6CTQQ6XzGm_Gn9PJZ50PgmgXrxH3dMbATckbQym0CHkqeT8iK0waK0ZiaFF2w"
  );
  //on successful load. call a display function that will give the cards that we want
  // by iterating through all the animals in the array
  request.onload = function() {
    if (this.status === 200) {
      data = JSON.parse(this.response);
      displayAnimals(data.animals);
      displayPages(data.pagination)
    } else {
      console.log(this.status);
    }
  };
  request.send();
}

function displayAnimals(animals) {
  console.log(animals);
  let output = "";
  animals.forEach(animal => {
    output += `
            <div class="card col-md-10 mx-auto mb-3 pt-3">
                <div class="row">
                    <div class="col-md-6" >
                        <h3 class="card-header" style="width: 25rem">${
                          animal.name
                        } (${animal.age})</h3>
                    
                    <ul class="list-group list-group-flush " >
                        <li class="list-group-item">Gender: ${
                          animal.gender
                        }</li>
                        <li class="list-group-item">Size: ${animal.size}</li>
                        <li class="list-group-item">${
                          animal.contact.email ? `Contact: ${animal.contact.email}` : ''
                        }</li>
                    </ul>
                    </div>
                    <div class="card-body col-md-6 text-center">
                        <p class="card-text small">Click me to find more out!</p>
                        <a href=${animal.url}><img class="img-fluid rounded-circle" style="width: 100px; height: 100px" src="${
                          animal.photos[0]
                            ? animal.photos[0].small
                            : "https://i.ebayimg.com/00/s/NDUzWDQ1Mw==/z/IvoAAOSwImRYI8kX/$_1.JPG?set_id=8800005007"
                        }" alt="animal"></a>
                        <p class="card-text mx-4">${
                          animal.description ? animal.description : `Come by to see ${animal.name} and find out what ${animal.gender === 'Female' ? 'she' : 'he'} likes!`
                        }</p>
                    </div>
                </div>
            </div>
        `;
  });
  results.innerHTML = output;
}


//display pages
function displayPages(pages) {
  console.log(pages);
  //get ul element from DOM and insert list items
  let output = `
    <li class="page-item"><a class="page-link" href="${pages.current_page === 1 ? '#' : `https://api.petfinder.com${pages._links.previous.href}`}">Prev</a></li>
    <li class="page-item"><a class="page-link" href="#">${pages.current_page}</a></li>
    <li class="page-item"><a class="page-link" href="https://api.petfinder.com${pages._links.next.href}">Next</a></li>
  `
  pageElement.innerHTML = output;
}
