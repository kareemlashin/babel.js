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
  const { name, ...restProps } = obj;
  console.log(name, restProps);
  
  // Line 58
  const mergedObj = { ...obj, country: 'USA' };
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