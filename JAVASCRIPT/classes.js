// // Create a Person constructor function:
// // It should take name and age as arguments.
// // It should initialize the object's name and age properties with the given arguments.
// // Add a greet method to the Person prototype that logs a greeting message including the person's name.
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//       return "Greetings," + this.name
//     }
// };

// const firstPerson = new Person("Asha", 23);
// console.log(firstPerson.greet());

// // Create a Rectangle class:
// // It should have a constructor that takes width and height as arguments.
// // It should initialize the object's width and height properties.
// // Add methods to calculate the area and perimeter of the rectangle.
//  class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     perimeter(){
//         return 2 * this.width + 2 * this.height 
//     }

//     area(){
//         return this.width * this.height
//     }
//  }

//  const rectangle = new Rectangle(23,17)
//  console.log(rectangle.perimeter());
//  console.log(rectangle.area());


// // Create a BankAccount class:
// // It should have a constructor that takes accountNumber and balance as arguments.
// // It should initialize the object's accountNumber and balance properties.
// // Add methods to deposit and withdraw money, ensuring the balance doesn't go below zero.
// class Account{
//     constructor(accNumber, balance){
//         this.accNumber = accNumber;
//         this.balance = balance;
//     }

//     deposit(amount){
//         const totalAmount = this.balance + amount
//         if (amount < 0){
//             return amount + "cannot ne deposited"
//         } else {
//             return "Confirmed. You have successfully deposited" + " " + amount + " " + "Your new balance is" + " " + totalAmount
//         }

//     }

//     withdrawal(amount){
//         const remainingBalance = this.balance - amount
//         if(amount < 0){
//             "Cannot withdraw " + amount
//         } else if(amount > 0 && amount < this.balance){
//             return "Confirmed. You have successfully withdrawn" + " " + amount +  " " +"You new balance is" +" " + remainingBalance
//         }
//     }
// }

// const myAcc = new Account("Leley Kaku", 45362)
// console.log(myAcc.deposit(4321));
// console.log(myAcc.withdrawal(23160));


// // Create a Student class that inherits from the Person class:
// // It should have a constructor that takes name, age, and studentId as arguments.
// // It should call the Person constructor to initialize the name and age properties.
// // It should initialize the object's studentId property.
// // Add a method to display the student's information, including their name, age, and student ID.

// class Student{
//     constructor (name, age, studentId){
//         this.name = name;
//         this.age = age;
//         this.studentId = studentId;
//     }

  
// }

// // Create a Car class:
// // It should have properties like make, model, year, and speed.
// // Add methods to accelerate and brake, which modify the speed property.
// // Add a method to display the car's current speed.

// class Car{
//     constructor(make, model, year, speed){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.speed = speed;
//     };

//     accelerate(){
//        this.speed += 100;
//        return this.speed;
//     };

//     brake(){
//         this.speed -= this.speed;
//         return this.speed;
//     };
// };

// const newCar = new Car("Mazda", "CX-5", 2023, 187);
// console.log(newCar.accelerate());
// console.log(newCar.brake());

// // Factory function:
// // Create a factory function that creates objects representing different shapes (e.g., circle, 
// // square, triangle) based on the input parameters. Each shape object should have a method to
// //  calculate its area.
// class Factory{
//     constructor(shape, height, width, length, radius){
//         this.shape = shape;
//         this.height = height;
//         this.width = width;
//         this.length = length;
//         this.radius = radius;
    
//     };

//     rectangleArea(){
//         return this.length * this.width;
//     };

//     rectanglePerimeter(){
//         return this.length + this.width;
//     };

//     triangleArea(){
//         return this.length * this.height;
//     };

//     trianglePerimeter(){
//         return this.length + this.width + this.height;
//     };

//     circleArea(){
//         const pi = 3.142
//         return pi * this.radius ** 2
//     };

//     circlePerimeter(){
//         const pi = 3.142
//         return 2 * pi * this.radius * 2
//     };

// };

// const retangle = new Factory("rectangle",23, 12, 21, 28);
// console.log(retangle.rectangleArea());
// console.log(retangle.rectanglePerimeter());

// const triangular = new Factory("triangle", 23, 12, 21, 28);
// console.log(triangular.triangleArea());
// console.log(triangular.trianglePerimeter());

// const circular = new Factory("circle", 23, 12, 21, 28);
// console.log(circular. circleArea());
// console.log(circular.circlePerimeter());


// // 12. University Class with Department Management
// // Write a JavaScript program that creates a class called University with properties for 
// // university name and departments. Include methods to add a department, remove a department,
// // and display all departments. Create an instance of the University class and add and remove
// // departments.
// class University{
//     constructor(name){
//         this.name = name;
//         this.departments = [];
//     };

//     addDepartment(departmentList){
//         return this.departments.push(departmentList);

//     };

//     removeDepartment(){
//         return this.departments.shift();
//     };

//     displayDepartments(){
//         this.departments.forEach(department => {
//             console.log(`The ${this.name} has the departments of ${department}.`);
//         });
//     };

// };

// const uni1 = new University("University Of Nairobi");
// console.log(uni1.addDepartment(["Law", "Education", "Sciences", "Medicine", "Economy", "Design", "Model" ]));
// console.log(uni1.removeDepartment());
// console.log(uni1.displayDepartments());


// // Create a CustomerOrder class with properties: orderId (string), items (array of objects with 
// // name, quantity, price), and status (string). Add a method calculateTotal() that returns the
// //  total order amount. Write an async method processPayment() that simulates payment with a 
// // Promise that resolves after 2 seconds. After calling the method, change the status to "paid" 
// // and print a success message.

// class CustomerOrder{
//     constructor(orderId, status){
//         this.orderId = orderId;
//         this.status = status;
//         this.items = [{}];
//     };

//     calculateTotal() {
//         let total = 0;
//         items.map( item => {
//           total += item.quantity * item.price;  
//         });
//         return `The total cost is ${total}`;
//     };

//     async processPayment() {
//     console.log(`Processing payment for order ${this.orderId}`);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     this.status = "unpaid";
//     if(this.status === "paid"){
//         console.log(`Payment successful for order ${this.orderId}. Order status: ${this.status}`);
//     } else {
//         console.log(`Payment not successful for order ${this.orderId}. Order status: ${this.status}`);
//     };
    
//   };
// };


// const order = new CustomerOrder("1234HTD5")
// let items = [
//   { name: "watermelon", quantity: 2, price: 250 },
//   { name: "Banana", quantity: 3, price: 140 },
//   { name: "Orange", quantity: 5, price: 70 }
// ];

// console.log(`Order Total: ${order.calculateTotal()}`);

// order.processPayment();



// // Create a TeamMember class that takes name, role, and an array of tasks (each task is an object 
// // with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks 
// // a task as completed. Write another method checkProgress() that returns a Promise resolving to "
// // All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tas
// // ks array.
// class TeamMember{
//     constructor(name, role, tasks){
//         this.name= name;
//         this.role= role;
//         this.tasks = tasks
//     };

//     async checkProgress() {

        
//     };

// };

// TeamMember.prototype.completeTask = function(taskTitle){
//       tasks.forEach(task => {
//         if(task === taskTitle){
//            tasks.completed = true;
//         };
//       });

// };



// // Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). 
// // Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async 
// // function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview 
// // confirmed with [name]", and log the message.
// class Candidate{
//     constructor(name, position,interviews){
//         this.name = name;
//         this.position = position;
//         this.interviews = interviews;
//     };
//     scheduleInterview(date){
//         this.interviews.push(date);
//         return(this.interviews);
        
          
//     };

//     async sendConfirmation() {
//         console.log(`Processing interview for ${this.name}`);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(`Interview for ${this.name} has been confirmed for ${date.date}`);
        
//     };
// };
// let date = {date: "21/1/2025", status:"pending"}

// const firstCandidate = new Candidate("Liam","6",[{date: "21/1/2025", status:"pending"},{date: "21/1/2025", status:"pending"}]);
// firstCandidate.scheduleInterview(date)
// firstCandidate.sendConfirmation();


// Create a class named Rectangle.
// It should have a constructor that takes width and height and sets them as properties.
// Add a method calculateArea that returns the area of the rectangle.
// Add a method calculatePerimeter that returns the perimeter of the rectangle.

class Rectangles{
    constructor(width, height){
        this.width = width;
        this.height = height;
    };

    calculateArea(){
        const area = this.width * this.height
        return area;
        
    };

    calculatePerimeter = () =>{
        const perimeter = 2 * this.width + this.height
        return perimeter
    };


    isSquare = () => {
    if(this.width === this.height){
        return "true"
    } else {
        return "false"
    };
};
};

const rec1 = new Rectangles(12,12);
console.log(rec1.calculateArea());
console.log(rec1.calculatePerimeter());
console.log(rec1.isSquare());

// Create an instance of the Rectangle class.
// Set width to 5 and height to 10.
// Call the calculateArea, calculatePerimeter, and isSquare methods on the instance.
// Create another instance of the Rectangle class that is a square. Verify the isSquare method returns true.



const rectangleOne = new Rectangles(5, 10);
console.log(rectangleOne.calculateArea());
console.log(rectangleOne.calculatePerimeter());
console.log(rectangleOne.isSquare());
