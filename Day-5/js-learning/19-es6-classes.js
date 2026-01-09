/*
ES6 CLASSES
-----------
Classes are a blueprint for creating objects.

In modern React:
- Functional components are preferred
- BUT classes help understand OOP
- And older React codebases
*/

// -------------------------------------
// 1️⃣ CLASS DEFINITION
// -------------------------------------

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

/*
constructor:
- Runs when object is created
- Initializes properties
*/

// -------------------------------------
// 2️⃣ CREATING OBJECTS (INSTANCES)
// -------------------------------------

const user1 = new User("Sanket");
const user2 = new User("Ananya");

console.log("User 1 greeting:");
console.log(user1.greet()); // Hello Sanket

console.log("\nUser 2 greeting:");
console.log(user2.greet()); // Hello Ananya

/*
Each object has:
- Its own data
- Same methods from the class
*/

// -------------------------------------
// 3️⃣ WHY THIS MATTERS FOR REACT
// -------------------------------------

/*
Older React used class components like:

class MyComponent extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

Even today:
- You may see classes in legacy projects
- Understanding classes helps read that code
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Class = blueprint");
console.log("Object = instance of class");
console.log("Used mostly for understanding & legacy React");
