document.querySelector("#number").addEventListener("input", getFact);
let url;
displayFact = document.querySelector("#displayFact");

function getFact(e) {
  const num = e.target.value;
  if (num === "" || num === "e") {
    displayFact.textContent = "";
    return;
  }
    
  const check = document.querySelector('input[name="radio"]:checked').value;
  //set the URL for fetch
  setUrl(check, num);

  fetch(url)
    .then(res => res.text())
    .then(data => {
      displayFact.textContent = data;
    })
    .catch(err => console.log(err));
}

function setUrl(check, num) {
    
  if (check === "trivia") {
    return (url = `http://numbersapi.com/${num}`);
  } else {
    return (url = `http://numbersapi.com/${num}/year`);
  }
}
