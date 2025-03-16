// ==== 1. Scope & Closure Example ====
function createCounter() {
  let count = 0; // Block-scoped variable (closure preserved)
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

// ==== 2. Hoisting Example ====
function hoistingExample() {
  console.log("1. Pre-hoist value:", value); // undefined (var is hoisted)
  var value = 42;
  console.log("2. Post-assignment:", value); // 42

  // console.log(letValue); // Uncomment to see ReferenceError (let not hoisted)
  let letValue = "Modern JS";
}

// ==== 3. Block Scope & Loop Example ====
function loopExample() {
  console.log("\nClassic var loop:");
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 10); // Always 3
  }

  console.log("Block-scoped let loop:");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 10); // 0,1,2
  }
}

// ==== 4. Module Pattern Example ====
const userModule = (() => {
  let username = ""; // Private variable

  return {
    login: (name) => {
      username = name;
      console.log(`Welcome ${username}!`);
    },
    logout: () => {
      console.log(`Goodbye ${username}!`);
      username = "";
    }
  };
})();

// ==== To run all demos ====
console.log("===== Scope/Closure Demo =====");
const counter = createCounter();
counter.increment();
console.log("Counter:", counter.getCount()); // 1

console.log("\n===== Hoisting Demo =====");
hoistingExample();

console.log("\n===== Loop Scoping Demo =====");
loopExample();

console.log("\n===== Module Pattern Demo =====");
userModule.login("Sarah"); // "Welcome Sarah!"
userModule.logout();       // "Goodbye Sarah!"