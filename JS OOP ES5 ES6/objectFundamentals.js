//object literal


/*
var person = {
    firstName: 'Evan',
    lastName: 'ONeill',
    age: 26,
    children: ['sadie', 'another doggie'],
    address: {
        street: '555 something st',
        city: 'christiansburg',
        state: 'VA'
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.age);
console.log(person.children);
console.log(person.address.street);
console.log(person.fullName());
*/

// ----------------------------------------------------------------

//object constructor
/*
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function () {
    return `An apple is the color ${this.shape} and is the shape ${this.shape}`;
}

console.log(apple.describe());

*/

// ----------------------------------------------------------------

/*

//constructor pattern
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function () {
        return `A ${this.name} is ${this.color} and is a ${this.shape} shape`
    }

}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'round');
console.log(apple);
console.log(apple.describe());
*/

// ----------------------------------------------------------------

/*

// array of objects
var users = [
    {
        name: 'John Doe',
        age: 26
    },
    {
        name: 'Mark Smith',
        age: 30
    },
    {
        name: 'Shelly Williams',
        age: 20
    },


];

console.log(users[0].name);

*/

// ----------------------------------------------------------------


    var heading = document.getElementById('heading');

    console.log(heading);

    function doClick() {
        clicked.innerHtml = 'You Clicked';
    }
