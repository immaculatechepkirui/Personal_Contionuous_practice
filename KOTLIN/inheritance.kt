fun main() {
  val banker= Banker("Pauline", 47)
    banker.talk("Welcome to KBC bank. How may I assist you?")
    banker.eat()
    banker.sleep()
    println(banker.countMoney(arrayOf(1000,100,450,367)))


    val doctor= Doctor("Queen",43)
    doctor.talk("How are you feeling?")
    doctor.eat()
    doctor.sleep()
    doctor.treatPatient("Mary","Headache")

    val farmer = Farmer("Marion", 23)
    farmer.talk("It's planting season")
    farmer.sleep()
    farmer.eat()
    farmer.cultivateLand()






    val myCar = Car("Toyota", "Camry", "Silver", 5)
    myCar.carry(4)
    myCar.identity()
    println("Parking fee for 3 hours: ${myCar.calculateParkingFees(3)}")


    val schoolBus = Bus("Ford", "Transit", "Yellow", 25)
    schoolBus.carry(20)
    schoolBus.carry(30)
    schoolBus.identity()
    println("Maximum trip fare: ${schoolBus.maxTripFare(50.0)}")
    println("Parking fee for 3 hours: ${schoolBus.calculateParkingFees(3)}")



}




class Banker(firstName: String, age: Int): Person(firstName, age) {

    fun countMoney(notes: Array<Int>): Int {
        var sum = 0
        notes.forEach { note ->
            sum += note
        }

        return sum
    }
}




class Doctor(firstName:String, age:Int): Person(firstName, age) {

    fun treatPatient (patient:String, illness:String){
        println("Treating $patient for $illness")
    }
}




class Farmer(firstName: String, age: Int ): Person(firstName, age) {

    fun cultivateLand(){
    println("dig dig dig")
    }

    override fun eat() {
        super.eat()
        println("I am eating the harvested fruits.")
    }
}





open class Person(var firstName: String, var age:Int){
    fun talk(words:String){

        println(words)
    }

   open fun eat() {
        println("yum")
    }

    fun sleep() {
        println("zz")
    }

}




















open class Car(
    val make: String,
    val model: String,
    val color: String,
    val capacity: Int
) {
    fun carry(people: Int) {
        if (people <= capacity) {
            println("Carrying $people passengers")
        } else {
            val x = people - capacity
            println("Over capacity by $x people")
        }
    }


    fun identity() {
        println("I am a $color $make $model")
    }
    open fun calculateParkingFees(hours: Int): Int {
        return hours * 20
    }
   }



class Bus(
    make: String,
    model: String,
    color: String,
    capacity: Int
  ) : Car(make, model, color, capacity) {
      fun maxTripFare(fare: Double): Double {
          return fare * capacity
      }
    override fun calculateParkingFees(hours: Int): Int {
        return hours * capacity } }