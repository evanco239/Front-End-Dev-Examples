const filterInput = document.getElementById("filterInput");
document.getElementById("myForm").addEventListener("submit", onSubmit);
const newName = document.getElementById("newName");
const nameList = document.getElementById("names");
const del = document.getElementsByClassName("btn-floating");

filterInput.addEventListener("keyup", filterList);

function filterList() {
  let filterValue = filterInput.value.toUpperCase();
  let li = document.querySelectorAll(".collection-item");
  li.forEach(x =>
    x.textContent.toUpperCase().includes(filterValue)
      ? (x.style.display = "")
      : (x.style.display = "none")
  );
}

function onSubmit(e) {
  e.preventDefault();
  if (newName.value === "") {
    return;
  } else {
    nameList.innerHTML += `
                <li class="collection-item">
                    <a href="#">${newName.value}</a>  
                </li>
            `;
    newName.value = "";
    filterList();
  }
}
