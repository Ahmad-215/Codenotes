---
title: "5 Mistakes Beginners Make With Python OOP"
description: "The ones I made too, before they clicked."
date: "2026-07-01"
---

## 1. Using a class when a function would do

Not everything needs to be a class. If you're not storing state between calls, a plain function is simpler and clearer.

## 2. Forgetting `self`

```python
class Dog:
    def bark():   # missing self — this will break
        print("Woof")
```

Every instance method needs `self` as its first parameter, even if you never use it directly.

## 3. Mutable default arguments

```python
class Cart:
    def __init__(self, items=[]):   # bug waiting to happen
        self.items = items
```

All instances end up sharing the *same* list. Use `None` as the default and create the list inside `__init__` instead.

## 4. Overusing inheritance

Deep inheritance chains (`A → B → C → D`) get hard to follow fast. Often composition — giving a class an *instance* of another class — is simpler than inheriting from it.

## 5. Not understanding `__init__` vs a regular method

`__init__` runs automatically when you create an object. It's not "the first function" — it's the setup step, and it should focus on setting attributes, not doing heavy logic.
