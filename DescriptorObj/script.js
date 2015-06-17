var createPerson = function(firstName, lastName) {
  var person = {};

  Object.defineProperties(person, {
    //Data descriptors
    firstName: {
      value: firstName,
      enumerable: true
    },
    lastName: {
      value: lastName,
      enumerable: true
    },
    //Accessor Descriptors
    fullName: {
      get: function() { return this.firstName + " " + this.lastName; },
      enumerable: true
      /*set: function(value) {
        this.firstName = value;
        this.lastName = value;
      } this sets the value if you change the property value for fullName*/
    // configurable: true if you want to make it configurable
    },


  });

/*
  Object.defineProperty(person, "firstName", {
    value: firstName

  });
  Object.defineProperty(person, "lastName", {
    value: lastName

  });*/
  return person;
};

var person = createPerson("John", "Doe");

//this would run an error if the configurable is not set to true.
/*Object.defineProperty(person, "fullName", {
  get: function() {
    return this.lastName + ", " + this.firstName;
  }
});*/




