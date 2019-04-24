
// object literal
/* const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `Author is ${this.author} and it was written in ${this.year}`
    }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1)); */


// ----------------------------------------

/* // constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `Author is ${this.author} and it was written in ${this.year}`
    }
    //console.log('Book Initialized');
}
//intantiate an Object
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '2016');
console.log(book1.getSummary());
console.log(book2); */


// --------------------------------------------------------------------
/*
//prototypes
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function () {
    //     return `Author is ${this.author} and it was written in ${this.year}`
    // }
    //console.log('Book Initialized');
}

// can store a prototype function so that the function doesn't show up in the object constructor
Book.prototype.getSummary = function () {
    return `Author is ${this.author} and it was written in ${this.year}`;
}

// getAge prototype
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// revise book properties
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}


//intantiate an Object
const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '2016');
console.log(book1.getSummary());
console.log(book2);
console.log(book1);
console.log(book1.getAge());
book1.revise(2016);
console.log(book1.getAge());
console.log(book1);
 */

// --------------------------------------------------------------------

/*
// Inheritance

//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
//summary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;

}

//inherit prototypes
Magazine.prototype = Object.create(Book.prototype);
// instantiate magazine object
const mag1 = new Magazine('Mag One', 'John Doe', 2013, 'Jan');
console.log(mag1);
console.log(mag1.getSummary());

// use magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1); */

// --------------------------------------------------------------------
/* 
// object.create

//Object Of Protos 
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
} 

// const book1 = Object.create(bookProtos);
// book1.title = 'Book1';
// book1.author = 'John Doe';
// book1.year = '2015';

//another way to add things
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'John Doe' },
    year: {value: 2013}
});

console.log(book1); */





// --------------------------------------------------------------------

/* 

// ES6 classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes and Noble';
    }

}

//Instantiate an object
const book1 = new Book('Book One', 'John Doe', 2013);
console.log(book1);
console.log(book1.getAge());
book1.revise(2018);
console.log(book1);
console.log(book1.getAge());

// calls a static method on the class so an object doesn't have to be instantiated to run it
console.log(Book.topBookStore()); */



// --------------------------------------------------------------------


// subclasses 

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//magazine subclass 
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }


}

const mag1 = new Magazine('Mag One', 'John Doe', 2018, 'Jan');
console.log(mag1);
console.log(`${mag1.getSummary()} in the month of ${mag1.month}`);