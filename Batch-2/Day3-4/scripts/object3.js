//{name (string), age (number), country (string), hobbies array (string [ ] ) } 
let avengers = [
   {
     name: "Thor",
     age: 1500,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Ironman",
     age: 1600,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Hulk",
     age: 7500,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Ant Man",
     age: 300,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
 ];

function display(){ 
	avengers.forEach(function (avenger) {
   console.log(avenger.name,avenger.age,avenger.country,avenger.hobbies);
 });
}
//display();

function display2(){
  for (let i = 0; i < avengers.length; i++) {
    console.log(avengers[i].name,avengers[i].age,avengers[i].country,avengers[i].hobbies);
 }
}
display2();