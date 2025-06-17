# Create a class Shape with methods area() and perimeter(). Create subclasses
#  Rectangle and Circle that inherit from Shape. Implement the area() and perimeter()
#  methods for both subclasses, using the appropriate formulas.
class Shape:
    def __init__(self, length, height, radius, width):
        self.length = length
        self.height = height
        self.radius = radius
        self.width = width


    def area(self):
        return self.length * self.width
    

    def perimeter(self):
        return self.length * 2 + self.width * 2
    

class Rectangle(Shape):
    def __init__(self, length, height, radius, width):
        super().__init__(length, height, radius, width)

    def rectangle_area(self):
        rectangle_area = self.length * self.width
        return rectangle_area
    
    
    def rectangle_perimeter(self):
        rectangle_perimeter = self.length * 2 + self.width * 2
        return rectangle_perimeter

