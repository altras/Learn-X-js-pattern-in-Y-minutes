//The Module pattern encapsulates "privacy", state and organization using closures
//In-depth: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
var testModel = (function() {
   var counter = 0; //this is private for our model
   return { //returning the public interface as a object literal
      incrementCounter: function(arguments) {
         return counter++;
      },
      resetCounter: function () {
         console.log("counter value prior to reset: " + counter);
         counter = 0;
      }
   };
})();//Immediately-Invoked Function Expression (IIFE)

//Usage
//Increment out counter
testModule.incrementCounter();

//Check the counter value and reset
//Ouputs: counter value prior to rest: 1
testModule.resetCounter();


//When working with the Module pattern, we may find it useful to define a simple
//template that we use for getting started with it.
//Here's one that covers namespacing, public and private variables:
var myNamespace = (function () {
   var myPrivateVar, myPrivateMethod;

   //A private counter variable
   myPrivateVar = 0;
   myPrivateMethod = function(foo) {
      console.log(foo);
   };
   return {
      myPublicVar: "foo",
      myPublicFunction: function(bar) {
         //use our private counter
         myPRivateVar++;
      }
   }
})();

//Another example this one using a public alias to a private function and importing globals
var crateModule = (function(jQ, _) {//expecting arguments to be passed and aliases them
   //private variables and methods
   var crates = [];

   function doSomethingPrivate() {
      console.log( _.min([10, 5, 100, 2, 1000]) );//use underscore in our private functions
   }
   function doSomethingElsePrivate(arguments) {
      // function body...
   }
   return {
      addItem: function(values) {
         crates.push(values)
      },
      getItemCount: function() {
         return crates.length;
      },
      doSomething: doSomethingPrivate
   }//we are returning an object so we can later interact with it's methods.

})(jQuery, _) //this enables the usage of imported globals

//Exporting
//Global Module - allows us to declare globals without consuming them
var myModule = (function() {
   //Module object
   var module = {},
      privateVariable = "Maraba World!";
   function privateMethod() {
   }

   module.publicProperty = "Foobar";
   module.publicMethod = function() {
      console.log(privateVariable);
   };

   return module;
})();
