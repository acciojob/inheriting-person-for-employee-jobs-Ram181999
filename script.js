// complete this js code
function Person(name, age) {
	 this.name = name;
  this.age = age;
};

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age); // Call the Person constructor to set name and age
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

/ Call the greet and jobGreet methods
person.greet(); // Output: Hello, my name is Alice, I am 30 years old.
employee.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
