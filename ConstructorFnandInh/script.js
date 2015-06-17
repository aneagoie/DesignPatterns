var Person = function(firstName, lastName) {
    //anytime you have a closure, it takes up memory.
    //this._firstName - shows it's private
    this.firstName = firstName;
    this.lastName = lastName;





   // return person; << no need for this. Constructor functions automatically return a value whenever we use the new keyword.
};

Person.prototype.sayHi = function () {
        return "Hi there";
    };
Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
    });
var johnDoe = new Person("John", "Doe");

