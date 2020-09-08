let avengers = [
   {
     name: "Thor",
     age: 20,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Ironman",
     age: 30,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Hulk",
     age: 35,
     country: "India",
     hobbies:["drawing", "playing", "sleeping"]
   },
   {
     name: "Ant Man",
     age: 21,
     country: "USA",
     hobbies:["drawing", "playing", "sleeping"]
   },
 ];

function displayage(){
  avengers.forEach(function(avenger){
  if(avenger.age<30){
    console.log("Object having age less than 30: "+avenger.name,avenger.age,avenger.country,avenger.hobbies[0]);  }  
  });
}

function displaycountry(){
  avengers.forEach(function(avenger){
  if(avenger.country == "India"){
    console.log("Object having country India: "+avenger.name, avenger.age, avenger.country, avenger.hobbies[0]);  }  
  });
  
}
displayage();
displaycountry();
