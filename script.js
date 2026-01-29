// Print Hello World
console.log("Hello World");

// ================== var, let, const ==================
var a = 10;
var a = 20; // var allows redeclaration
console.log(a); // 20

let b = 20;
console.log(b); // 20

const c = 30;
console.log(c); // 30

// ================== Data Types ==================
var num = 10;
var str = "prasanna";
var bool = true;
var un;
var nu = null;
var big = 1234567890121n;
var symbol = Symbol("li");

console.log(typeof num);     // number
console.log(typeof str);     // string
console.log(typeof bool);    // boolean
console.log(typeof un);      // undefined
console.log(typeof nu);      // object (JS bug)
console.log(typeof big);     // bigint
console.log(typeof symbol);  // symbol
console.log(str);

// ================== Arithmetic Operators ==================
var e = 10;
var d = 30;

console.log(e + d);   // 40
console.log(e - d);   // -20
console.log(e * d);   // 300
console.log(e / d);   // 0.3333
console.log(e % d);   // 10
console.log(e ** 3);  // 1000

// ================== Comparison Operators ==================
var x = 10;
var y = 20;

console.log(x == y);   // false
console.log(x != y);   // true
console.log(x > y);    // false
console.log(x < y);    // true
console.log(x >= y);   // false
console.log(x <= y);   // true

// ================== Array ==================
var arr = [10, 20, 30, 40];
console.log(arr);
console.log(typeof arr);          // object
console.log(Array.isArray(arr));  // true

// ================== Object ==================
var obj = {
  name: "prasanna",
  age: 20
};
console.log(obj);
console.log(typeof obj); // object

// ================== For Loop ==================
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ================== While Loop ==================
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// ================== Do-While Loop ==================
i = 1;
do {
  console.log("do..while");
} while (i == 0);

// ================== If Condition ==================
// Print even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Even or Odd
i = 9;
if (i % 2 == 0) console.log("even");
else console.log("odd");

// ================== Grade using if-else ==================
let mark = 70;
if (mark >= 90) console.log("O Grade");
else if (mark >= 80) console.log("A Grade");
else if (mark >= 70) console.log("B Grade");
else console.log("Fail");

// ================== Switch Case ==================
let day = 6;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid input");
}

// ================== Ternary Operator ==================
i = 8;
let result = (i % 2 == 0) ? "even" : "odd";
console.log(result);

// Grade using ternary
let marks = 82;
let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 60 ? "C" :
  marks >= 40 ? "D" :
  "Fail";

console.log("Grade:", grade);

// ================== Functions ==================
function add1() {
  console.log(10 + 20);
}
add1();

const add2 = () => {
  console.log(10 + 20);
};
add2();

const add3 = (a, b) => {
  console.log(a + b);
};
add3(10, 90);

// ================== Spread Operator ==================
var arr1 = [10, 20, 30];
var arr2 = [...arr1, 40, 50, 60];
console.log(arr2);

// ================== Array Destructuring ==================
var [m1, m2, m3, m4, m5] = [89, 90, 99, 96, 87];
console.log(m1, m2, m3, m4, m5);

// ================== Object Destructuring ==================
var student = {
  name: "prasanna",
  age: 20,
  Dept: "CSD",
  mark: {
    Mern: 90,
    java: 89,
    c: 99
  }
};

// FIXED HERE 👇
var { name, age, Dept, mark: studentMark } = student;

console.log(name);
console.log(age);
console.log(Dept);
console.log(studentMark);
// let arr=[10,20,30,40,50];
// for(variaable variable_name of arrayname)
// for(let i in arr){
//     console.log(arr[i]);
// }
// var obj={
//     name:"prasanna",
//     age:20,
// }
// for(let i in obj){
//     console.log(i+" : "+obj[i]);
// }
//for..of
//for(variaable variable_name of arrayname){
//statement
//}
// for(let value of arr){
//     console.log(value);
// }   
let ar=[10,20,30,40,50];
//map
var double_arr=ar.map((i)=>(i*2));
console.log(double_arr);
//filter
var even = ar.filter((i)=>(i%2==0));
console.log(even);
//reduser
var total=arr1.reduce((sum,i)=>(sum+i),0);
console.log(total);


total_sum=ar.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0);
console.log(total_sum);

let numb = 7;
let isPrime = true;

if (numb <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= numb - 1; i++) {
        if (numb % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(numb + " is a Prime number");
} else {
    console.log(numb + " is NOT a Prime number");
}


var add=(a,b,callback)=>{
  var result=a+b;
  callback(result);
}
  add(10,20,(res)=>(console.log(res)))

  var add = (a,b,callback)=>{
    var result=a+b;
    callback(result);
}
add(10,20,(res)=>{console.log(res);
})

//function calling

var demo=()=>{
    console.log("I am callback")
}
demo()
var main=(myFunction)=>{
    myFunction()
}
//
var main=(callback)=>{
    console.log("I am main");
    callback()
}
var demo=()=>{
    console.log("I am callback")
}
main(demo)
