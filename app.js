// let Rand = ()=>{
//     return Math.floor((Math.random() * 100) + 1);
// }
// let createArr = (a,b,c) =>{
//     return [a,b,c];
// };

// let pushArr = (arr,x)=>{
//    let getArr = arr;
//    arr.push(x);
//    return getArr;
// }
// console.log(pushArr(createArr(Rand(),Rand(),Rand()),Rand()));

// let o ={
//     firstName : 'Bobo',
//     lastName : 'bill',
//     testName : function(x){
//         return `Hello ${this.firstName} ${this.lastName}${x}`;
//     }
// }
// let newFirstName = {firstName:'jojo'};
// let newLastName = {lastName : 'sila'};
// console.log(o.testName.apply(newFirstName,['   fgf']));
// let newName = o.testName.bind(newFirstName, 'hgfhgfhg');
// console.log(o.testName());
// console.log(newName());

// let startCar = function(model){
//     this.car = model;
//     this.start = function(){
//         console.log(`You just start ${this.car}`);
//     };
// }

// let bmwCar = new startCar('bmw');
// bmwCar.start();


// let jsonFile = '{ "name":"John", "age":30, "city":"New York"}';

// console.log(jsonFile);
// console.log(JSON.parse(jsonFile));


// let convertJson = JSON.parse(jsonFile);

// let arrTest = ['hello','lol','3','4','5','6','7'];
// let result = arrTest.filter(number => number >= 5);
// console.log(result);4



// let arr = ['1','2','3','4','5','6'];

// function shuffle(array) {
    
// let tempArr = [];
// let counter = array.length;
// for(let i =0; i<counter ; i++){
//     let randNumFromArr = Math.floor((Math.random() * array.length));
//     tempArr.push(array[randNumFromArr]);
//     array.splice(randNumFromArr, 1)
// }
// return tempArr;

// }
// console.log(shuffle(arr));
// let display= (x) => {return console.log(x);}

// let Car = function(name,color){
//     this.name = name;
//     this.color = color;

// }
// Car.prototype.age = 5;
// let getCar = new Car('benz','black');
// let getSecondCar = new Car('bmw','white');
// display(getCar);
// getCar.__proto__.age = 10;
// display(getSecondCar.__proto__)

// Car.prototype.age = 7;

// display(getSecondCar.age);

// let thurCar = new Car('audi','red');
// display(thurCar.__proto__);

// let topPoint =[];
// let leftPoint = [];

// let createCover = (a,b)=>{
//     let cover = document.querySelector(`#cover`);
//     cover.style.backgroundColor = "black";
//     cover.style.height = `${a}px`;
//     cover.style.width = `${b}px`;
// }

// let randomNum = ()=>{
//     let num = Math.random();    
//     return num > 0.5  ?  2:-2;
// }

// let createCircle = () =>{ 
//     let cir = document.createElement('DIV');
//     document.body.appendChild(cir);
//     cir.style.position="absolute";
//     cir.style.height = '15px';
//     cir.style.width = '15px';
//     cir.style.borderStyle = "solid" 
//     cir.style.borderColor = 'red';
//     cir.style.borderRadius = '50%';
//     topPoint.push(-150);
//     leftPoint.push(100);
// }

// let numberOfCircuses = (n) =>{
//     for(let i = 0 ; i<=n;i++){
//         createCircle();
//     }
// }
// numberOfCircuses(100);



// createCover(250,300);

// let getAllCir = document.querySelectorAll('div');
// let move = (a,b,i) =>{
//     getAllCir[i].style.marginTop = `${a}px`;
//     getAllCir[i].style.marginLeft = `${b}px`;
// }

// setInterval(function(){
//     for(var x= 1;x<=topPoint.length ; x++){
//         if((topPoint[x-1]<-21 &&topPoint[x-1]>=-250 ) && (leftPoint[x-1]<279 && leftPoint[x-1]>=0) ){
            
//             topPoint[x-1] += randomNum();
//             leftPoint[x-1] += randomNum();            
//             move(topPoint[x-1],leftPoint[x-1],x);            
//             }
//             else{
//                 console.log(topPoint[x-1]);
//                 topPoint[x-1] = -150;
//                 leftPoint[x-1] = 100;
//             }            
//         }
// },10);
class BackgroundColor{
    constructor(){
        this.x = 250;
        this.y = 300;
    }
    show(){
        let cover = document.createElement('DIV');
        document.body.appendChild(cover);
        cover.style.backgroundColor = 'black';
        cover.style.height = `${this.x}px`;
        cover.style.width = `${this.y}px`;
    }
}

class Circle {
    constructor() {
      this.topPoint = -140;
      this.leftPoint = 130;
      this.cir = document.createElement('DIV');
    }
    create(){
        document.body.appendChild(this.cir);
        this.cir.style.position="absolute";
        this.cir.style.height = '15px';
        this.cir.style.width = '15px';
        this.cir.style.borderStyle = "solid" 
        this.cir.style.borderColor = 'red';
        this.cir.style.borderRadius = '50%';
        this.cir.style.marginTop = `${this.topPoint}px`;
        this.cir.style.marginLeft = `${this.leftPoint}px`;
    }

    move(){
        if((this.topPoint<-21 &&this.topPoint>=-250 ) && 
        (this.leftPoint<279 && this.leftPoint>=0) ){

            this.topPoint += (Math.random() > 0.5  ?  2:-2);
            this.leftPoint += (Math.random() > 0.5  ?  2:-2);
            this.cir.style.marginTop = `${this.topPoint}px`;
            this.cir.style.marginLeft = `${this.leftPoint}px`;
            console.log(this.leftPoint);
            console.log(this.topPoint);
        }
        else{
            this.topPoint = -140;
            this.leftPoint = 130;
            console.log('work');
        }
    }
  }

let cover = new BackgroundColor;
let circle = new Circle;
let circleTwo = new Circle;
cover.show();
circle.create();
circleTwo.create();

setInterval(function(){
    circle.move();
    circleTwo.move();
    },50);


















