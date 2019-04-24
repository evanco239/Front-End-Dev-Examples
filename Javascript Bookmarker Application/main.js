var div = $('#listItems');


// fav.innerHTML = "Hello World";

// $.get('https://cors-anywhere.herokuapp.com/https://google.com', function (res) {
//     //var icon = res.find('favicon');
//     console.log(res);
// });

display();

function addItem(e) {
    e.preventDefault();
    var nickName = $('#name').val();
    var siteName = $('#site').val();

    var bookmark = {
        name: nickName,
        url: siteName
    }

    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //loop through JSON to output into a card system inside the div
    display();

}

function display() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (bookmarks === null) {
        return;
    }

    div.empty();

    bookmarks.forEach(val => {

        div.prepend(
            `
            <div class="card-body">
                ${val.name}
                <a href="${val.url}" target="_blank"><span class="badge badge-info">Visit</span></a>
                <a onClick="deleteBookmark(\'` + val.url + `\')"><span class="badge badge-danger">Delete</span></a>
            </div>
            
            `
        );
    });
}



function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //console.log(bookmarks);
    bookmarks.forEach(val => {
        if (url === val.url) {
            console.log(val.name);
            bookmarks.pop(val.name);

        }
    });

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    display();
}

document.getElementById('myForm').addEventListener('submit', addItem);


