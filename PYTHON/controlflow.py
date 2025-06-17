def delivery_days(days):
    for day in days:
        if day == "Mon":
            print("Clothes Delivery")
        elif day == "Tue":
            print("Groceries Delivery")
        elif day == "Wed":
            print("Accessories Delivery")

# // Create a program that loops through an array of book statuses and prints "Ready to lend" if 
# // the status is "available" or "Checked out" if the status is "borrowed".
def book_statuses(status):
    for stat in status:
        if stat == "available":
            print("Ready to lend")
        elif stat == "borrowed":
            print("Checked Out")


# Given an array of customer ages, write a program that checks each age and prints 
# "Adult" if the age is 18 or above, and "Minor" otherwise.



def count_down():
    count = 5
    while count >= 0:
        print(f"You have {count} lives remaining")
        count -= 1

# Using a do...while loop, write a program that loops through an array of user feedback 
# and prints each comment until the array is empty.
