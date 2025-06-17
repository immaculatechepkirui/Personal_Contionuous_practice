//  Create a list of car objects with details like brand,
//  model, year, and color. Then, use a loop to go through 
// the list and print out each car's model and year.


const cars = [
    { brand: "BMW", model:"M3", year:2019, color:"red"},
    { brand: "Mazda", model:"cx5", year:2023, color:"maroon"},
    { brand: "BMW", model:"x5", year:2020, color:"blue"},
    { brand: "Mercedes Benz", model:"GLE", year:2024, color:"White"},
    { brand: "Toyota", model:"Premio", year:2021, color:"black"},
    { brand: "Mazda", model:"Demio", year:2019, color:"red"},
    { brand: "Mercedes Benz", model:"G Wagon", year:2024, color:"red"}

];

cars.forEach(car =>{
 console.log(car);
 
});

// Using the list of cars you made in Exercise 1, use .filter() to make a
//  new list that only includes the red cars. Then, use .map() to make a 
// list of strings that show the brand and model of each car.
cars.filter(car =>{
      if(car.color === "red"){
        console.log(car);
        
      };
});

cars.map(car =>{
    console.log(`${car.brand}:${car.model}`);
    
});

// Make a list for to-do items where each item has a title, how important it
//  is (priority), whether it's done (completed), and when it was made
//  (createdDate). Write functions to add new items, remove items, and show
//  all the important things that aren't done yet.
const toDo = [
    {tittle: "Feedback", priority:"High", status:"In Progress", createdDate:"1-1-2025"},
    {tittle: "Novel Reading", priority:"High", status:"Completed", createdDate:"23-2-2025"},
    {tittle: "Skate Boarding", priority:"Low", status:"Pending", createdDate:"1-3-2025"},
    {tittle: "Software Engineering", priority:"Medium", status:"In Progress", createdDate:"13-3-2025"},
    {tittle: "Project Completion", priority:"High", status:"Pending", createdDate:"4-3-2025"}
];

toDo.push({tittle: "CV Writing", priority:"High", status:"Pending", createdDate:"24-2-2025"});
console.log(toDo);

toDo.shift();
console.log(toDo);

toDo.forEach(action =>{
    if(action.priority === "High" && action.status === "In Progress"){
        console.log(action);
    }else {
         return "Action Missing"
    }
    
});



