// console.log('hello world');

// let name = 'shubham';
// let age =24;
// let isApproved = true;
// let firstName = undefined;
// let selectedColor = null;

// function greet(fname,lname){
//     console.log('hello ' + name +' '+ lname);
// }

// greet('shubham','wadhavane');

// let Person ={
//      name: 'shubham',
//      age:30
// }

// console.log(Person);


// let points = 90;
// let type = points?'gold':'silver';
// console.log(type);

// let Person ={
//      name: 'shubham',
//      age:30
// }

// for(let key in Person){
//     console.log(key,Person[key]);
// }

// let color =['red','blue','green'];

// for (let colors of color){
//     console.log(colors);
// }

// let number  = max(5,6);

// console.log(number);
// function max(a , b){
//     // return (a>b)? a : b;
//     if(a>b) return a;
//     return b;
// }

// console.log(isLandscape(800,900))

// function isLandscape(width , height){
//      return (width>height);
// }

// const output = fizzBuzz(7);
// console.log(output);


// function fizzBuzz(input){
//     if(typeof input !== 'number')
//     return 'Not a Number';

//     if((input % 3 == 0) && (input % 5 == 0))
//     return 'FizzBuzz';

//     if(input % 3 == 0)
//     return 'Fizz';

//     if(input % 5 ==0)
//     return 'Buzz';

//     return input;
// }

// showNumber(10);


// function showNumber(limit){
//   for(let i=0;i<=limit;i++){
//   const message = (i%2==0)?'Even':'Odd';
//   console.log(i,message);
//   }
// }

// const movies={
//     title:'a',
//     rating:0.3,
//     director:'b',
//     realseYear:2020
// }

// showProperties(movies)

// function showProperties(obj){
//     for(let key in obj)
//     if(typeof obj[key]=='string')
//     console.log(key,obj[key])
// }

// console.log(sum(10))

// function sum(limit){
//   let sum = 0;
//     for(let i =0; i<= limit; i++)
//     if(i % 3 ===0 || i % 5 ==0)
//     sum += i;

//     return sum;
// }

// const circle ={
//   radius:1,
//   location:{
//     x:1,
//     y:2
//   },
//   draw: function(){
//     console.log('draw');
//   },
//   isVisible:true,

// };

// circle.draw()

// function createCircle(radius){
//   return{
//     radius,
//     draw(){
//       console.log('Draw')
//     }
//   }
// }

// const circle1= createCircle(1);
// console.log(circle1)


// const circle={
//   radius:1
// }

// circle.color="red";
// console.log(circle)


// const circle={
//     radius:1,
//     draw(){
//       console.log('Draw')
//     }
// };

// const another ={};
// for (let key in circle)
// another[key]=circle[key];

// const another= Object.assign({color:'red'},circle);

// const another ={...circle}

// console.log(another);

// const person =['Java','.net','c++','php','js'];

// console.log(person)

// const numbers = [1,2,3,4];

// console.log(includes(numbers,5));

// function includes(array ,searchElement){
//     for(let element of array)
//       if(element === searchElement)
//         return true;
//   return false
// }

// const numbers = [1,2,3,4];

// const output = except(numbers,5);
// console.log(output);

// function except(array ,excluded){
//    const output =[];
//     for(let element of array)
//      if(!ex) 
// }

// let post ={
//     title:'a',
//     body:'b',
//     author:'c',
//     views:10,
//     comments:[
//         {
//             author:'a',body:'b'
//         },
//         {
//             author:'c',body:'d'
//         }
//     ],
//     isLive:true
// }

// console.log(post.comments[0].author)

// function Post(title,body,author){
//     this.title=title,
//     this.body=body,
//     this.author=author,
//     this.views=0,
//     this.comments=[],
//     this.isLive=false
// }

// let post = new Post('a','b','c')
// console.log(post)

// const number = [1,2,3,1,4];

// number.push(5,6)

// number.unshift(1,2)

// number.splice(2,0,'a','b')

// console.log(number.indexOf(1))
// console.log(number.lastIndexOf(1))
// console.log(number.includes(2))
// console.log(number)

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];

// const course = courses.find(course=>course.name === 'a')
// console.log(course)

// const first = [{id:1}];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id =10;
// const slice = combined.slice()
// console.log(slice)
// console.log(combined)

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// //const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b']
// // const copy = combined.slice()
// const copy = [...combined];
// console.log(combined)


// const numbers = [1, 2, 3];

//  for(let number of numbers)
//    console.log(number)

//  numbers.forEach((number,index) => console.log(index,number));  

// const numbers = [1,-1, 2, 3, -4, 5];
//  const filtered = numbers.filter(value => value>=0);
// console.log(filtered);

// const numbers = [1,-1, 2, 3];
//  const allPositive = numbers.some(value => value>=0);
// console.log(allPositive);

// const numbers = [1,-1, 2, 3];

// const filtered = numbers.filter(n => n>=0);
 
// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// const numbers = [1,-1, 2, 3];

// const items = numbers
//                 .filter(n => n>=0)
//                  .map(n => ({value:n}));
// // const filtered = numbers.filter(n => n>=0);
 
// // const items = filtered.map(n => ({value:n}));

// console.log(items);


// const Number = arrayRange(1,4);

// console.log(Number);

// function arrayRange(min,max){
//     output =[];
//     for (let i=min ; i <= max; i++) 
//        output.push(i)
//        return output; 
    

// }

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers,1));

// function includes(array,searchElement) {
//   for(let element of array)  
//     if(element === searchElement)
//     return true;
//  return false;
// }

// const numbers = [1, 2, 3, 4, 1, 2];

// const output = except(numbers,[1,2]);

// console.log(output);

// function except(array,excluded){
//     const output = [];
//     for(let element of array){
//         if(!excluded.includes(element)){
//             output.push(element);
//         }
//     }
//   return output;  
// }


// const number = [1, 2, 3, 4];

// const output = move(numbers, 0, -1);

// console.log(output);

// function move(array, index, offset){
//     const output = [...array];
// }

// walk();
// function walk(){
//     console.log('walk');
// }

// // run();

// const run = function(){
//     console.log('run');
// }

// run();

// function sum(){
//   let total = 0;
//    for(let value of arguments)
//      total += value;

//      return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10))

// function sum(discount, ...prices){
//     let total = prices.reduce((a,b)=> a + b);
//     return total = total *(1 - discount);
// }

// console.log(sum(0.1, 20 ,30))

// function interest(principal, rate, year){
//     return principal*rate/100*year;
// }

// console.log(interest(10000,3.5,5))

// const person ={
//     firstName : 'Shubham',
//     lastName : 'Wadhavane',

// };

// function fullName(val){
//     console.log(val)
//    // return `${person.firstname} ${person.lastname}`;
// }

// try{
//    person.fullName ='shubham wadhavane';
// }
// catch(e){
//     console.log(e)
// }
// console.log(person.fullName())

console.log(sum([1,2,3,4]));

function sum(...items){
    if(items.length==1 && Array.isArray(items[0]))
      items =[...items[0]];
    return items.reduce((a,b)=> a+ b);

}