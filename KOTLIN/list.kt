fun main() {
//    creating immutable list
    val colors = listOf("red","yellow","brown","pink","pink")
    print(colors)

    val  cars = mutableListOf("BMW", "Mitsubishi", "Toyota", "Subaru", "Lamborghini")
    println(cars)
    cars.add("Tesla")
    cars.add("Mercedes")
    cars.add("Porsche")
    cars.remove("Toyota")
    println(cars)
    cars.addAll(arrayOf("pouget", "maserati", "mazda"))
    println(cars)


    val numerals = listOf(2,456,7,2,5,890,234,621)
    println(numerals.max())
    println(numerals.min())
    println(numerals.get(2))


   val firstStudent = Students("Bobby", 21, 45,"Rwanda")
    val secondStudent = Students("Wayne", 19, 32,"Kenyan")
    val thirdStudent = Students("Ariana", 20, 21,"Ethiopia")
    val fourthStudent = Students("Jude", 22, 78,"Malawi")

    val newStudents = listOf(firstStudent,secondStudent, thirdStudent, fourthStudent)
    println(newStudents)

    val above20 = newStudents.filter { student -> student.age >= 20 && student.age % 2 = 0 }
    println(above20)

    val fruits = listOf("mango", "pawpaw","guava", "apple")
    val sortedFruits = fruits.sorted()
    println(sortedFruits)


val students = listOf(
    Student("Ali", 19),
    Student("Mary", 20),
    Student("Maina", 23),
    Student("Rubby", 13),
    Student("Rebby", 18),


)
    val oddAgeStudents = studentsWithOddAge(students)

    println("Odd age students:")
    println(oddAgeStudents)

    val sortedStudent = students.sortedBy{it.age}
    println(sortedStudent)

    val sortedToDescend = students.sortedByDescending { student -> student.age }
    println(sortedToDescend)


val num = listOf(34,23,15,43,12,2,67)
    val adults = num.filter{num -> num %2 != 0}
    println(adults)


}






data class Students(
    var name : String,
    var age: Int,
    var codeHiveNo: Int,
    var nationality: String
)


data class Student(
    val name: String,
    val age: Int
)
fun studentsWithOddAge(students: List<Student>): List<Student>{
    return students.filter{student -> student.age % 2 != 0}
}