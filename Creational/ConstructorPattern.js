//There're 3 common ways to create new objects in JS
var newObject = {};//literal notation

var newObject = Object.create(Object.prototype);

var newObject = new Object();//creates an object wrapper for a specific value
//If no value is passed, it will create an empty object and return it.


//There're 4 ways for assigning keys to an object
//ECMAScript 3 compatible approaches
//1. Dot syntax
//set properties
newObject.someKey = "Some value";

//Get properties
var value = newObject.someKey;

//2. Square bracket syntax
//Set properties
newObject["someKey"] = "Some value";

//get properties
var value = newObject["someKey"];

// ECMAScript 5 only compatible approaches
//3. Object.defineProperty
//Set properties
Object.defineProperty( newObject, "someKey", {
   //options that gives us a little more control over what type of property we want to define
   value: "some value",
   writable: true,
   enumerable: true,
   configurable: true
   //for more complete description check out:
   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
});

var employee = Object.create(Object.prototype);
//Now populate the object with properties
Object.defineProperty(employee, "car", {
   value: "Toyota",
   writable: true,
   enumerable: true,
   configurable: true
});
Object.defineProperty(employee, "phoneNumber", {
   value: "0123456789",
   writable: true,
   enumerable: true,
   configurable: true
});
console.log(employee);
//Object {car: "Toyota", phoneNumber: "0123456789"}

//4. Object.defineProperties
//Set properties
Object.defineProperties( newObject, {
   "someKey": {
      value: "some value",
      writable: true
   },
   "anotherKey": {
      value: "another value",
      writable: true
   }
});

//Basic constructors
function Building(name, year, floors) {
   var privateVar; //private variable only available within the constructor function

   this.name = name; //this.name is a public variable accessible from outside
   this.year = year; //the this keyword references the new object that's being created
   this.floors = floors;

   this.toString = function() {
      return this.name + "is builded in " + this.year + " year and has " + this.floors + " floors";
   }//this public method has to be created every time the constructor function runs
   //which results in poorer performance. You have access to "private variables"
}
//We can tell JS we would like a function to behave like
//a constructor by calling it with 'new'
var empireState = new Building("Empire State Building", 1931, 103);
var burjKhalifa = new Building("Burj Khalifa", 2010, 163);

//Constructors with methods on the prototype chain
function Building(name, year, floors) {
   var privateVar;

   this.name = name;
   this.year = year;
   this.floors = floors;
}

Building.prototype.toString = function() {
   return this.name + "is builded in " + this.year + " year and has " + this.floors + " floors";
}//this method is created once and "inherited" by each instance.
//You don't have access to private variables
