import reddit from "./redditapi";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#searchTerm");
// form event listener
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  //get search term
  const searchTerm = searchInput.value;
  // get sort method
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // get limit
  const limit = document.querySelector("#limit").value;

  //check for empty input
  if (searchTerm === "") {
    //show alert
    showMessage("Please add a search term", "alert-danger");
  }

  searchInput.value = "";

  // search reddit
    reddit.search(searchTerm, limit, sortBy).then(results => {
      console.log(results);
    let output = '<div class="card-columns">';
    //loop through posts
        results.forEach(post => {
        const imgUrl = post.preview ? post.preview.images[0].source.url : 'https://assets.entrepreneur.com/content/3x2/2000/20180301190808-reddit-logo.jpeg'
      output += `
            <div class="card">
                <img src="${imgUrl}" class="card-img-top" alt="Reddit Guy">
                <div class="card-body">
                  <h5 class="card-title">${truncateText(post.title, 50)}</h5>
                  <p class="card-text">${truncateText(post.selftext, 100)}</p>
                  <a class="btn btn-primary" href="${post.url}" target="_blank">Read More</a>
                  <hr>
                  <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                  <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
            </div>
                `;
    });
      output += "</div>";
      document.querySelector('#results').innerHTML = output;
  });
});

// show alerts
function showMessage(message, className) {
  const div = document.createElement("div");
  // add a class to the div
  div.className = `alert ${className}`;
  // add the text
  div.appendChild(document.createTextNode(message));
  //get the parent
  const searchContainer = document.querySelector("#search-container");
  //get search
  searchContainer.insertBefore(div, searchForm);
  //removes element after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}

// trancate long text
function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    if (shortened === -1) return text;
    return text.substring(0, shortened) + '...';
}