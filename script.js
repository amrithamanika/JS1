// console.log('Welcome')
// // alert('Hello and Welcome');

// //Variables
// var a=9;

// //var a=10;
// console.log(a);//Block 1

// {
//     var a=20;
//     console.log(a)         //Block 2
// }
// let b=23;
// console.log(b);
// {
//     let b=34;
//     console.log(b);
// }

// console.log(b);
// //const
// const t=30;
// console.log(t);
// {
//   const t=90;
//   console.log(t);  
// }
// console.log(t);
// //Data Types
// var nam='mridula';
// console.log(typeof(nam));
// var nam='JavaScript Programming ';
// console.log(typeof(nam));
// //Numbers
// var count=10;
// console.log(typeof(count));
// //Boolean
// var bb=true;
// console.log(typeof(bb));
// var gtype;
// console.log(typeof(gtype));
// //Arrays
// let arr=['Red','Blue','White',10]
// console.log(arr[3]);
// console.log(arr.length);
// arr.push('Violet');
// console.log(arr);
// arr.pop();
// console.log(arr);
// //JavaScript Objects
// let car={
//     mileage:100,
//     model:'i10',
//     color:'red'
// }
// console.log(car);
// console.log(car.model);
// console.log(car.mileage);
// let person=new Object();
// person.gender='male';
// person.height=180;
// console.log(person);
//Arithmetic Operators
//var c=8; 
//var d=4;
//console.log(c+d)
//console.log(c-d)
//console.log(c*d)
//console.log(c/d)
//console.log(c%d)
//var a=10;
//var b=++a;
//console.log(b);
//console.log(a)
//Comparison Operators
//if else
//if (a==b) {
  //  console.log('a is equal to b')
//} else {
  //  console.log('a is not equal to b')
//}

 //var c=10
 //var d=8
//if (c!=d) {
  //  console.log('a is not equal to b')
//} else {
 //   console.log('a is equal to or greater than or less than b')
//}
//var c=10
//var d=8
//if (c==d && c==10) {
  //  console.log('c is equal to d')
//} else {
   // console.log('c is not equal to b and not equal to 10')
//}
// y=10;
// z='10';
//if (y===z) {
  //  console.log('y is equal to z')
// } else {
//     console.log('y is not equal to z')
// }
// if (y==z) {
//     console.log('y is equal to z')
// } else {
//     console.log('y is not equal to z')
// }
// a=30;
// b=20;
// if (a>b || a==20) {
//     console.log('a is greater than b and a is equal to 20 ')
// } else {
//     console.log('a is not greater than b and a is not equal to 20 ')
// }
// if (a>b && a==20) {
//     console.log('a is greater than b and a is equal to 20 ')
// } else {
//     console.log('a is not greater than b and a is not equal to 20 ')
// }
//Assignment operators
//let add=6;
// add /=3 
// console.log(add);
//Bitwise Operators
// var add=exp;
// let a=10;
// let b=34;
// let c=70;
// let d=12;
// //console.log(add);
// var exp=a+b*(c-d)-7;
// console.log(exp);
const arr2=[
    {
        name:"Maya"
    },{
        name:"Krishna"
    }
]
//Functions
function display(Name){
    console.log('Hi '+Name+' Welcome to JS');
}
display('Amritha'); //function call
function add(t,s){
    var result=t+s;
    return result;
}
 var result=add(12,23);
 console.log('The sum is '+result);

 function sub(m,n){
    var result=m-n;
    return result;
}
 var result=sub(50,23);
 console.log('The difference is '+result);

 function mul(o,p){
    var result=o*p;
    return result;
}
 var result=mul(10,11);
 console.log('The Product is '+result);