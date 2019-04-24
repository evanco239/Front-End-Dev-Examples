var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
	e.preventDefault();

	var newItem = document.getElementById('item').value;

	// create new li element
	var li = document.createElement('li');
	li.className = "list-group-item";

	//add text node with input value
	li.appendChild(document.createTextNode(newItem));

	//creates delete button element
	var deleteButton = document.createElement('button');
	deleteButton.className = "btn btn-danger btn-sm float-right delete"
	deleteButton.appendChild(document.createTextNode('X'));

	li.appendChild(deleteButton);

	//append li to list
	itemList.appendChild(li);

}

function removeItem(e){
		if(e.target.classList.contains('delete')){
			//if(confirm('Are you sure?')){
				var li = e.target.parentElement;
				itemList.removeChild(li);
			//}
		}
	}


function filterItems(e){
	//convert text to lower case
	var text = e.target.value.toLowerCase();
	// console.log(text);
	var items = itemList.getElementsByTagName('li');
	//console.log(items);
	//convert to array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}
		else {
			item.style.display = 'none';
		}
	});
}