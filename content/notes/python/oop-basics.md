---
title: "Python OOP: The Four Pillars, Explained With Real Code"
description: "Inheritance, polymorphism, encapsulation, and abstraction — explained the way you'd actually use them in a project."
order: 1
---

Object-Oriented Programming in Python comes down to four ideas. Here's each one, with code you can actually run.

## 1. Encapsulation — bundling data with the methods that use it

```python
class BankAccount:
    def __init__(self, balance=0):
        self.__balance = balance  # "__" makes it private-ish

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance
```

The double underscore triggers name-mangling, so outside code can't casually touch `__balance`. You control access through methods instead.

## 2. Inheritance — reusing behavior across related classes

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound."

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks."
```

`Dog` gets everything `Animal` has, and overrides `speak()` with its own version.

## 3. Polymorphism — same method name, different behavior

```python
animals = [Animal("Generic"), Dog("Rex")]
for a in animals:
    print(a.speak())
```

You don't need to check what type each object is — calling `.speak()` just works, and each object responds in its own way.

## 4. Abstraction — hiding the how, exposing the what

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2
```

`Shape` defines a contract: any subclass *must* implement `area()`. You can't even create a plain `Shape()` object — Python stops you.

## Quick mental model

- **Encapsulation** = protect the data
- **Inheritance** = reuse the code
- **Polymorphism** = one interface, many behaviors
- **Abstraction** = hide the complexity

If you can explain these four with your own example in an interview, you're in good shape on OOP fundamentals.
