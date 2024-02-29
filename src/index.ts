export {};

// EXAMPLE 1 - Declaring getters in Interfaces in TypeScript

interface Person {
  readonly name: string;
  readonly age: number;
}

const dev1: Person = {
  name: 'Bobby Hadz',
  age: 29,
};

console.log(dev1.name); // 👉️ "Bobby Hadz"

// ⛔️ Error: Cannot assign to 'name' because it is a read-only property. ts(2540)
// dev1.name = 'Anne';

class Developer implements Person {
  get name() {
    return 'Bobby Hadz';
  }

  get age() {
    return 30;
  }
}

const dev2 = new Developer();
console.log(dev2.name); // 👉️ "Bobby Hadz"

// ⛔️ Error: Cannot assign to 'name' because it is a read-only property.
// dev2.name = 'Carl';

// ---------------------------------------------------

// // EXAMPLE 2 - Declaring setters in Interfaces in TypeScript

// interface Person {
//   country: string;
// }

// class Developer implements Person {
//   private _country = '';

//   get country() {
//     return this._country;
//   }

//   set country(c: string) {
//     this._country = c;
//   }
// }

// const dev = new Developer();

// console.log(dev.country); // 👉️ ""
// dev.country = 'Germany';
// console.log(dev.country); // 👉️ "Germany"

// ---------------------------------------------------

// // EXAMPLE 3 - Using getters and setters in TypeScript classes

// class Developer {
//   private _language = '';
//   private _tasks: string[] = [];

//   get language() {
//     return this._language;
//   }

//   set language(value: string) {
//     this._language = value;
//   }

//   get tasks() {
//     return this._tasks;
//   }

//   set tasks(value: string[]) {
//     this._tasks = value;
//   }
// }

// const dev = new Developer();

// dev.language = 'TypeScript';
// console.log(dev.language); // 👉️ "TypeScript"

// dev.tasks = ['develop', 'test'];
// dev.tasks.push('ship');

// console.log(dev.tasks); // ['develop', 'test', 'ship']

// ---------------------------------------------------

// // EXAMPLE 4 - Using the `private` keyword when declaring properties

// class Developer {
//   private _language = '';
//   private _tasks: string[] = [];

//   get language() {
//     return this._language;
//   }

//   set language(value: string) {
//     this._language = value;
//   }

//   get tasks() {
//     return this._tasks;
//   }

//   set tasks(value: string[]) {
//     this._tasks = value;
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 5 - TypeScript infers the type of the setter parameter

// class Developer {
//   private _language = '';

//   get language() {
//     return this._language;
//   }

//   // 👇️ (parameter) value: string (inferred)
//   // from getter return type
//   set language(value) {
//     this._language = value;
//   }
// }

// const dev = new Developer();

// dev.language = 'TypeScript';

// console.log(dev.language); // 👉️ "TypeScript"
