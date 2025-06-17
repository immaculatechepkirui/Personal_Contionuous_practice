fun main() {
     var person1 = Person("Alma",30,"Ethiopia")
    println(person1.printPersonDetails())

    var rectangle1 = Rectangle(7, 13)
    println(rectangle1.rectangleArea())

    var bmw = Car("BMW", "i9", 2024)
    println(bmw.carDetails())

    var firstStudent = Student("Robustus", 16, 'A')
    println(firstStudent.checkPromotion())

    var blossomsOfTheSsavannah = Book("Blossoms Of The Savannah", "CHIE Chani", 2020)
    println(blossomsOfTheSsavannah.bookDetails())

    var bankAccountOne = BankAccount("ABC1234cd", 40000, "Molly Green")
    println(bankAccountOne.deposit(3000))
    println(bankAccountOne.withdrawal(500))

    var acc2 = BankAccount("Bcv2614DR", 64239, "Luois Vuitton")
    println(acc2.withdrawal(1327))
    println(acc2.deposit(3217))

    var circle1 = Circle(12, 'h', 'k')
    println(circle1.circumfrennce())

    var newEmployee = Employee("Meana Zista", 32, "Receptionist")
    println(newEmployee.employeeData())

    var equilateralTriangle = Triangle(3,4,5)
    println(equilateralTriangle.trianglePerimeter())

    var bags = Product("Denri", 2311.5, 6)
    println(bags.totalCost())

    var dog = Animal("Dog", "bark")
    println(dog.animalSound())

    var anna = Customer("Anna", "anna@gmail.com","Adelaide, 216B")
    println(anna.message())

    var seven = MathUtils()
    println(seven.factorial(7))
}
//1. Write a Kotlin program that creates a class 'Person' with properties for name, age, and country.
// Include a function to print the person's details.
class Person(var name: String, var age: Int, var country: String){
    fun printPersonDetails(){
        println("Name: $name")
        println("Age:$ age")
        println("Country : $country")
    }
}

//2. Write a Kotlin program that creates a class 'Rectangle' with properties for width and height.
// Include a function to calculate the rectangle area.

class Rectangle(var width:Int, var length:Int){
    fun rectangleArea(){
        println(length * width)
    }
}

//3. Write a Kotlin program that creates a class 'Car' with properties for make, model, and year.
// Include a function to display car information.

class Car(var make: String, var model:String, var year: Int){
    fun carDetails(){
        println("$make")
        println("$model")
        println("$year")
    }
}

//4. Write a Kotlin program that creates a class 'Student' with properties for name, age, and grade.
// Include a function to check if the student is eligible for promotion.

class Student(var name:String, var age:Int, var grade:Char){
    fun checkPromotion(){
        if(grade == 'A'){
            println("Congratulations $name, you have been promoted to the next class")
        } else if(grade == 'B'){
            println("$name, Meeting expectations")
        }
        else{
            println("Invalid grade")
        }
    }
}

//5. Write a Kotlin program that creates a class 'Book' with properties for title, author, and publication
// year. Include a function to display book details.
class Book(var tittle:String, var author: String, var publicationYear:Int){
    fun bookDetails(){
        println("Tittle: $tittle")
        println("Author: $author")
        println("Year of publication: $publicationYear")
    }
}

//6. Write a Kotlin program that creates a class 'BankAccount' with properties for account number, balance,
// and account holder name. Include deposit and withdrawal functions.

class BankAccount(var accountNumber: String, var balance:Int, var accuntHolder:String){
    fun deposit(amount: Int){
        if (amount == 0){
            println("$amount cannot be deposited")
        } else if(amount > 0){
            var totalAmount = amount + balance
            println("Confirmed. You have successfully deposited $amount , your new balance is $totalAmount")
        }
    }

    fun withdrawal(money: Int){
        var newBalance = balance - money
        if(money == 0){
            println("Insufficient amount")
        } else if(money > 0 && money < balance){
            println("You have successfully withdrawn $money, Your new balance is $newBalance")
        }
    }
}

//7. Write a Kotlin program that creates a class 'Circle' with properties for radius and center coordinates.
// Include a function to calculate the circle circumference.

class Circle(var radius:Int, var coord1: Char, varcoord2:Char){
    fun circumfrennce(){
        var pi = 3.142
        var d = radius * 2
        var circleCircumfrence = 2 * pi * d
        println(circleCircumfrence)
    }
}

//8. Write a Kotlin program that creates a class 'Employee' with properties for name, age, and designation.
// Include a function to display employee details.

class Employee(var name:String, var age:Int, var designation:String){
    fun employeeData(){
        println("Employee Name: $name")
        println("Employee Age: $age")
        println("Employee Designation: $designation")

    }
}

//9. Write a Kotlin program that creates a class 'Triangle' with side length properties.
// Include a function to calculate the triangle perimeter.
class Triangle(var side1:Int, var side2:Int, var side3:Int){
    fun trianglePerimeter(){
        var perimeter = side1 + side2 + side3
        println(perimeter)
    }
}

//10. Write a Kotlin program that creates a class 'Product' with properties for name, price, and quantity.
// Calculate the total cost of the product with a function.
class Product(var name:String, var price: Double, var quantity:Int){
    fun totalCost(){
        var totalAmount = price * quantity
        println(totalAmount)
    }
}

//11. Write a Kotlin program that creates a class 'Animal' with properties for name and sound.
// Include a function to make the animal's sound.
class Animal(var name: String, var sound:String){
    fun animalSound(){
        println("$name: $sound")
    }
}

//12. Write a Kotlin program that creates a class 'Customer' with properties for name, email, and
// address. Include a function to send a welcome email to the customer.
class Customer(var name:String, var email:String, var address:String){
    fun message(){
        println("Welcome, $name")
    }
}

//13. Write a Kotlin program that creates a class 'MathUtils' with static functions to calculate the
// factorial, square root, and cube root of a number.

class MathUtils() {
    fun factorial(num: Int): Long {
        if (num === 0) {
            return 1
        } else {
            return num * factorial(num - 1)
        }

    }

}