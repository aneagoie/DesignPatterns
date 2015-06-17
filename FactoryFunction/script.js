//Factory Function Pattern
var createPerson = function (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    sayHi: function() {
      return "Hi there";
    }
  };
};

var andreiDoe = createPerson("Andrei", "Doe");
var janeDoe = createPerson("Jane", "Doe");


/*instead of doing the below code to create multiple objects
var person = {
  firstName: "Andrei",
  lastName: "Doe",
  sayHi: function() {
    alert("hi");
  }
};

var janeDoe = {
  firstName: "Jane",
  lastName: "Doe",
  sayHi: function() {
    alert("Hi Jane");
  }
}; */

