/* const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type method
TypeWriter.prototype.type = function() {
  // current index of word
  const current = this.wordIndex % this.words.length;
  //get full text of the current word
  const fullTxt = this.words[current];
  // check if deleting
  if (this.isDeleting == true) {
    //remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //set initial Type Speed
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //check to see if the word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // pause at end
    typeSpeed = this.wait;
    // set delete == true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    //move to next word
    this.wordIndex++;
    //pause before typing
    typeSpeed = 500;
  }

  console.log(this.txt);

  setTimeout(() => this.type(), typeSpeed);
}; */

// ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of the current word
    const fullTxt = this.words[current];
    // check if deleting
    if (this.isDeleting == true) {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //set initial Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //check to see if the word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // pause at end
      typeSpeed = this.wait;
      // set delete == true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //move to next word
      this.wordIndex++;
      //pause before typing
      typeSpeed = 500;
    }

    console.log(this.txt);

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", init);

// initiallize app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}
