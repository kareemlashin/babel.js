"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ES10 code example

// Line 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Line 7
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Line 13
const john = new Person('John', 30);
john.sayHello();

// Line 17
const numbers = [1, 2, 3, 4, 5];

// Line 20
const squaredNumbers = numbers.map(n => n ** 2);
console.log(squaredNumbers);

// Line 24
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Line 28
const sum = (a, b) => a + b;
console.log(sum(3, 5));

// Line 32
const asyncFunction = async () => {
  const result = await fetch('https://api.example.com/data');
  const data = await result.json();
  console.log(data);
};

// Line 39
const fetchData = async () => {
  try {
    await asyncFunction();
  } catch (err) {
    console.error('Error:', err);
  }
};

// Line 46
fetchData();

// Line 49
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Line 54
const {
    name
  } = obj,
  restProps = _objectWithoutProperties(obj, ["name"]);
console.log(name, restProps);

// Line 58
const mergedObj = _objectSpread(_objectSpread({}, obj), {}, {
  country: 'USA'
});
console.log(mergedObj);

// Line 62
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise resolved!'), 2000);
});

// Line 67
promise.then(result => console.log(result));

// Line 70
const set = new Set([1, 2, 3, 4, 5]);
console.log(set);

// Line 74
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map);

// Line 79
const weakSet = new WeakSet();
weakSet.add(john);
console.log(weakSet);

// Line 83
const weakMap = new WeakMap();
weakMap.set(john, 'John\'s data');
console.log(weakMap);

// Line 87
const symbol = Symbol('mySymbol');
console.log(symbol);

// Line 91
const generatorFunction = function* () {
  yield 1;
  yield 2;
  yield 3;
};

// Line 97
const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());