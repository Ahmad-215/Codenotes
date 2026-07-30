---
title: "Python Fundamentals Cheat Sheet"
description: "Variables, data types, loops, and functions — the essentials you'll use in every single Python program."
order: 0
---

## Variables and types

```python
name = "Ahmad"        # str
age = 20               # int
gpa = 3.7               # float
is_student = True       # bool
```

Python figures out the type for you — no need to declare it up front.

## Core data structures

```python
my_list = [1, 2, 3]          # ordered, changeable
my_tuple = (1, 2, 3)         # ordered, unchangeable
my_dict = {"name": "Ahmad"}  # key-value pairs
my_set = {1, 2, 3}           # unordered, unique values
```

## Loops

```python
for i in range(5):
    print(i)

count = 0
while count < 5:
    print(count)
    count += 1
```

## Functions

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Ahmad"))
print(greet("Ahmad", "Salam"))
```

Default arguments (`greeting="Hello"`) let you call a function with fewer arguments when the default makes sense.

## Common beginner mistakes

- Forgetting that `range(5)` goes from `0` to `4`, not `1` to `5`.
- Mixing up `=` (assignment) with `==` (comparison).
- Mutating a list while looping over it — copy it first if you need to change it during iteration.
