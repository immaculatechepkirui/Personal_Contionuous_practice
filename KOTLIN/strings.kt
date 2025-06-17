
fun main() {
    reverseStringLoop(str = "car")

    var feedback = "This is a sample string, with some repeated words like string and is."
    var wordOccurrences =wordFed(feedback)

    wordOccurrences.forEach { (word, count) ->
        println("$word: $count")
    }


    reverseStringRecursive("chaos")

}



//Using An HashMap to count the occurrence of elements in an array
fun wordFed(feedback: String): HashMap<String, Int>{
    val wordCounts = mutableMapOf<String, Int>()
    val words = feedback.split("\\s+".toRegex())

    for (word in words) {
        val cleanedWord = word.lowercase().trim()
        if (cleanedWord.isNotEmpty()) {
            wordCounts[cleanedWord] = wordCounts.getOrDefault(cleanedWord, 0) + 1
        }
    }
    return mutableMapOf<String, Int>() as HashMap<String, Int>




}


//Using the for loop method to reverse a string
fun reverseStringLoop(str: String): String {
    var reversed = ""
    for (i in str.length - 1 downTo 0) {
        reversed += str[i]
    }
    return reversed
}


//Using Recursive method to reverse a string

fun reverseStringRecursive(str: String): String {
    return if (str.isEmpty()) {
        str
    } else {
        reverseStringRecursive(str.substring(1)) + str[0]
    }
}

