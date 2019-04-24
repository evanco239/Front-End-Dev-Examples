
// puts out the same thing
// var a = 'Test 1';
// let b = 'Test 2';

//---------------------------------------------------------

// shows the difference between let and var
/* function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

function testLet() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);
 */

//---------------------------------------------------------

 //const creates a constant variable. 
/* 

const colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);
 */

//---------------------------------------------------------

 //classes and inheritance
/*
class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    register() {
        console.log(`${this.username} is now registered`);
    }

    static countUsers() {
        console.log(`There are 50 Users`);
    }
}
 

// evan = new User('Evan', 'evan@test', 'pw');
// evan.register();
// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.memberPackage}`);
    }
}

evan = new Member('Evan', 'evan@test', 'pw', 'gold');
evan.getPackage();
evan.register();
*/

//---------------------------------------------------------

/* // template literals using back ticks

let name = 'John'

function makeUppercase(word) {
    return word.toUpperCase();
}

let template =
    `<h1>${makeUppercase('Hello')}, ${name}</h1>
    <p>This is a simple template in Javascript</p >`;

document.getElementById('template').innerHTML = template; */


//---------------------------------------------------------
/* //string functions
let theString = 'Hello, my name is Evan and I love javascript'

//startsWith()
console.log(theString.startsWith('Hello')); //yields true because it starts with that

//endsWith()
console.log(theString.endsWith('javascript'));

//includes()
console.log(theString.includes('java')); */
/* 
//number functions

//hex value
console.log(0xFF); //hex
console.log(0b101011);//binary
console.log(0o543);//oct
console.log(Number.isFinite(NaN));
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(4.3));

 */

//---------------------------------------------------------

/* //default parameters
function greet($greeting = 'Hello World'){
    console.log($greeting);
}
greet();

//spread operator

let args = [1, 2, 3];
let args2 = [4, 5, 6];

function test(){
    console.log(args + "," + args2);
}
//test.apply(null, args);

test(...args); */

//---------------------------------------------------------
//sets
/* let myArray = [11, 22, 45, 23, 43];
let mySet = new Set(myArray);
mySet.add('100');
mySet.add(mySetter());
mySet.delete(22);
mySet.clear()

mySet.add(100);
mySet.add(200);
mySet.add(300);
mySet.add(400);

mySet.forEach((val) => console.log(val));


function mySetter() {
    return 2;
} */

//maps
/* 
let myMap = new Map([
    ['a1', 'Hello'],
    ['b1', 'Goodbye']
]);
myMap.set('c3', 'foo');
myMap.delete('a1');
console.log(myMap.size); */
/* 
//weakSet

let carWeakSet = new WeakSet();

let car1 = {
    make: 'BMW',
    model: '325i',
    color: 'Black'
}
let car2 = {
    make: 'BMW',
    model: '325xi',
    color: 'Blue'
}
carWeakSet.add(car1);

carWeakSet.add(car2);

console.log(carWeakSet);


//weakMap

 */


 //---------------------------------------------------------

 // arrow functions
/* 
add = (a, b) => console.log(a + b);
add(10, 2); */

//---------------------------------------------------------

//promises - represents an asynchronis function that is promised to finish but hasn't yet

//immediately resolved

// var myPromise = Promise.resolve('Foo');
// myPromise.then((res) => console.log(res));


// var myPromise = new Promise((res, reject) => setTimeout(() => res(4), 2000));
// myPromise.then((res) => console.log(res += 3));

//promie function to get JSON data
/* 
function getData(method, url) {
    return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function (data) {
    let todos = JSON.parse(data);
    let output = '';
    for (let todo of todos) {
        output += `
        <div>
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
            <hr>
        </div>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch(function (err) {
    console.log(err);
}); */

//---------------------------------------------------------


//generators

function* g1() {
    console.log('Hello');
    yield 'Yield 1 Ran..';
    console.log('World');
    yield 'Yield 2 Ran..';
    return '';
}
var g = g1();

/* console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value); */

for (let val of g) {
    console.log(val);
}