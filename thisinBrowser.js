// console.log(this);

// function fxn(){
//     console.log(this)
// }
// fxn();

let obj ={
    name:'Yaswanth',
    age:'24',
    sayHello:function(){
        console.log(this)
    }
}

// obj.sayHello();
let greeting = obj.sayHello
greeting();