class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
}
const person1 = new Person("David", 12);
console.log(person1.greet());

// A class is a blueprint for creating objects
// The constructor sets up the object's properties like name and age
// A method like greet defines actions the object can perform
