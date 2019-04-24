const posts = [
  {
    title: "Post One",
    body: "This is Post one"
  },
  {
    title: "Post Two",
    body: "This is Post Two"
  }
];

function getPosts() {
  //calls a function after a certain number of milliseconds
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
      posts.push(post);
      callback();
  }, 2000);
}


createPost({
  title: "Post Three",
  body: "This is Post Three"
}, getPosts);

