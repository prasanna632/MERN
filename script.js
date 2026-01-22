console.log("Hello World");

var a=10;
var a=20;
console.log(a);
let b=20;
console.log(b)
const c=30
console.log(c);
var a=10;
var str="prasanna";
var bool=true;
var un;
var nu=null;
var big =1234567890121n;
var symbol=Symbol("li");
console.log(typeof a);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof symbol);
console.log(str);

var e= 10;
var d = 30;
console.log(e + d);   // Addition → 13
console.log(e - d);   // Subtraction → 7
console.log(e * d);   // Multiplication → 30
console.log(e / d);   // Division → 3.33
console.log(e % d);   // Modulus → 1
console.log(e ** d);  // Power → 1000

var x = 10;
var y = 20;

console.log(x == y);    // false (equal value)
console.log(x != y);    // true  (not equal)

console.log(x > y);     // false (greater than)
console.log(x < y);     // true  (less than)

console.log(x >= y);    // false (greater or equal)
console.log(x <= y);    // true  (less or equal)
var arr=[10,20,30,40];
console.log(arr);
console.log(typeof arr);

var obj={
    Name:
    "prasanna",
    age:20
}
console.log(obj);
console.log(typeof obj);
for(initialization;condoition;increment/decrement)
{

}
for(let i=0;i<=10;i++)
{
    console.log(i);
}
//while loop
while(condition)
{
    statement;
}


let i=1;
while(i<=10)
{
    console.log(i)
    i++;
}
// do while
do{

}while(condition);

i=1;
do{
    console.log('do..while');
}while(i==0)

    //conditional statements
    //if
//find even numbers:
for(let i=1;i<=10;i++)
{
    if(i%2==0)console.log(i);
}
i=9;
if(i%2==0)console.log("even");
else console.log("odd");

let mark=70;
if(mark>=90)console.log("0 Grade");
else if(mark>=80)console.log("A Grade");
else if(mark>=70)console.log("B Grade");
else console.log("fail");
//switch
let day=6;
switch (day){
    case 1:
        {
        console.log("sunday");
        break;
        }
case 2:{console.log("monday");
    break;
}
    case 3:{console.log("tueday");
        break;
    }
    case 4:{
        console.log("wednesday");
        break;
    }
    case 5:{console.log("thursday");
        break;
    }
    case 6:{
        console.log("friday");
        break;
    }
    case 7:{
        console.log("saturday");
        break;
    }
    default:
        {console.log("Inavalid input");
            break;
        }
    
}

//ternary operator:
i=8;
let result=(i%2==0)?"even":"odd";
console.log(result)
//grade using ternary
let marks = 82;

let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 60 ? "C" :
  marks >= 40 ? "D" :
  "Fail";

console.log("Grade:", grade);
//Function
function add()
{
    console.log(10+20);
}   
add();

var add=()=>{
    console.log(10+20);
}
add()

var add=(a,b)=>
{
    console.log(a+b)

}
add(10,90);
//spread operator
var arr1=[10,20,20];
var arr2=[...arr1,40,50,60];
console.log(arr2);
//Destructuring operator
var[m1,m2,m3,m4,m5]=[89,90,99,96,87]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

var student = {
  name:"prasanna",
  age: 20,
  Dept: "CSD",
  mark: {
    Mern: 90,
    java: 89,
    c: 99
  }
};

var { name, age, Dept, mark } = student;

console.log(name);
console.log(age);
console.log(Dept);
console.log(mark);