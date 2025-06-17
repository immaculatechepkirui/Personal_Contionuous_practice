fun main() {
  val homegoing = Book("Homegoing","Yaa Gvasi",305,342.8)
    homegoing.auuthor
    println(homegoing.pages)
    println(homegoing.title)


    val numbers = intArrayOf(10, 20, 5, 25, 8)
    val (min, max, average) = calculateStats(numbers)

    println("Minimum: $min")
    println("Maximum: $max")
    println("Average: $average")


    val myBook = Book("Athousand Blended sounds", "Cora Atonm",650,765.6)
    myBook.price = 400.0



}

data class Book(
    var title: String,
    var auuthor:String,
    var pages: Int,
    var price:Double,

        )
fun calculateStats(arr: IntArray): Triple<Int, Int, Double> {
    if (arr.isEmpty()) {
        return Triple(Int.MIN_VALUE, Int.MAX_VALUE, 0.0)
    }
    val min = arr.minOrNull() ?: Int.MAX_VALUE
    val max = arr.maxOrNull() ?: Int.MIN_VALUE
    val sum = arr.sum().toDouble()
    val average = sum / arr.size

    return Triple(min, max, average)







}















class Doctor(
      val name: String,
     val registrationNumber: String,
    val specialization: String,
    val yearOfGraduation: Int,
    var numberOfPatientsTreated: Int
) {

    fun introduction() {
        println("Name: $name")
        println("Registration Number: $registrationNumber")
        println("Specialization: $specialization")
        println("Year of Graduation: $yearOfGraduation")
        println("Number of Patients Treated: $numberOfPatientsTreated")
    }

    fun treatPatient(patient: String, illness: String) {
        println("Treated patient $patient for $illness")
        numberOfPatientsTreated++
    }

    fun ranking() {
        val yearsOfExperience = 2025 - yearOfGraduation
        println("Years of Experience in Cardiology: $yearsOfExperience")
    }
}


class employee {

    // Constructor Declaration of Class

    var name: String = ""
    var age: Int = 0
    var gender: Char = 'M'
    var salary: Double = 0.toDouble()

    fun insertValues(n: String, a: Int, g: Char, s: Double) {
        name = n
        age = a
        gender = g
        salary = s
        println("Name of the employee: $name")
        println("Age of the employee: $age")
        println("Gender: $gender")
        println("Salary of the employee: $salary")
    }
}





