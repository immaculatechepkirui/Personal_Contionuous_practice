# Employee management
# Create an Employee class with private attributes for name,
#  salary, and department. Provide public methods to set_salary, 
# get_salary, and get_department. Ensure that salary cannot be set
#  to a negative value.

class Employee:
    def __init__(self, name, salary, department):
        self._name = name
        self._salary = salary
        self._department = department
    

    def set_salary(self, amount):
        if amount < 0:
            return f"{amount} cannot be set as salary"
        self._salary += amount
        return f"Salary successfully set to {self._salary}"
    

    def get_salary(self, amount):
        self._salary += amount
        return f"Your salary is {self._salary}"
    

