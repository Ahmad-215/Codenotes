---
title: "C++ Fundamentals: From First Program to File Handling"
description: "Every core C++ concept explained in order, with runnable code — variables through file I/O and exceptions."
order: 0
---

C++ fundamentals build on each other. This note goes in the order you should actually learn them, each with code you can compile and run.

## 1. Your first program

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

- `#include <iostream>` brings in input/output tools (`cin`, `cout`).
- `using namespace std;` lets you write `cout` instead of `std::cout`.
- `int main()` is where every C++ program starts running.
- `return 0;` tells the operating system the program finished successfully.

## 2. Variables and data types

```cpp
int age = 20;              // whole numbers
float gpa = 3.7;            // decimal numbers (less precise)
double pi = 3.14159265;     // decimal numbers (more precise)
char grade = 'A';           // a single character
bool isStudent = true;      // true or false
string name = "Ahmad";      // text (needs #include <string>)
```

Unlike Python, C++ requires you to declare the type up front — the compiler needs to know exactly how much memory to reserve.

## 3. Input and output

```cpp
#include <iostream>
using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    cout << "Hello " << name << ", you are " << age << " years old." << endl;
    return 0;
}
```

- `cout <<` sends output to the screen.
- `cin >>` reads input from the keyboard into a variable.
- Note: `cin >> name` stops at the first space — use `getline(cin, name)` if you need to read a full sentence.

## 4. Operators

```cpp
int a = 10, b = 3;

cout << a + b << endl;   // 13  — addition
cout << a - b << endl;   // 7   — subtraction
cout << a * b << endl;   // 30  — multiplication
cout << a / b << endl;   // 3   — integer division (decimal part dropped)
cout << a % b << endl;   // 1   — remainder (modulus)

cout << (a > b) << endl;   // 1 (true)
cout << (a == b) << endl;  // 0 (false)

bool x = true, y = false;
cout << (x && y) << endl;  // 0 — AND: both must be true
cout << (x || y) << endl;  // 1 — OR: at least one true
```

Watch out for **integer division** — `10 / 3` gives `3`, not `3.33`, because both operands are `int`. Use `10.0 / 3` if you need the decimal.

## 5. Control flow — if/else and switch

```cpp
int marks = 85;

if (marks >= 90) {
    cout << "Grade A" << endl;
} else if (marks >= 75) {
    cout << "Grade B" << endl;
} else {
    cout << "Grade C" << endl;
}
```

```cpp
int day = 3;

switch (day) {
    case 1:
        cout << "Monday";
        break;
    case 2:
        cout << "Tuesday";
        break;
    case 3:
        cout << "Wednesday";
        break;
    default:
        cout << "Unknown day";
}
```

Don't forget `break;` in a `switch` — without it, execution "falls through" into the next case.

## 6. Loops

```cpp
// for loop — when you know how many times to repeat
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

// while loop — repeats while a condition is true
int count = 0;
while (count < 5) {
    cout << count << " ";
    count++;
}

// do-while — runs at least once, checks condition after
int n = 0;
do {
    cout << n << " ";
    n++;
} while (n < 5);
```

## 7. Functions

```cpp
int add(int a, int b) {
    return a + b;
}

// Default arguments
int multiply(int a, int b = 2) {
    return a * b;
}

// Function overloading — same name, different parameters
int square(int x) { return x * x; }
double square(double x) { return x * x; }

int main() {
    cout << add(3, 4) << endl;         // 7
    cout << multiply(5) << endl;        // 10 (uses default b=2)
    cout << multiply(5, 3) << endl;     // 15
    cout << square(4) << endl;          // 16 (int version)
    cout << square(4.5) << endl;        // 20.25 (double version)
    return 0;
}
```

## 8. Arrays

```cpp
int numbers[5] = {10, 20, 30, 40, 50};

for (int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
}

// 2D array
int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
cout << grid[1][2] << endl;  // 6
```

Arrays in C++ have a **fixed size** decided at creation — unlike Python lists, you can't grow or shrink them directly (that's what `vector` is for, covered separately).

## 9. Strings

```cpp
#include <string>

string first = "Ahmad";
string last = "Khan";
string full = first + " " + last;   // string concatenation

cout << full.length() << endl;       // length of the string
cout << full[0] << endl;              // 'A' — access by index
cout << full.substr(0, 5) << endl;    // "Ahmad" — substring
```

## 10. Pointers and references

```cpp
int x = 10;

int* ptr = &x;      // pointer: stores the ADDRESS of x
cout << *ptr << endl;  // dereference: gives you the VALUE at that address (10)

int& ref = x;        // reference: another NAME for the same variable
ref = 20;             // this actually changes x too
cout << x << endl;    // 20
```

This is the concept that trips up most beginners. Think of it this way:
- A **pointer** is like a piece of paper with someone's house address written on it.
- A **reference** is like a nickname for the same person — there's no separate address, it's just another name for the same thing.

## 11. Structures

```cpp
struct Student {
    string name;
    int age;
    float gpa;
};

int main() {
    Student s1;
    s1.name = "Ahmad";
    s1.age = 20;
    s1.gpa = 3.7;

    cout << s1.name << " is " << s1.age << " years old." << endl;
    return 0;
}
```

A `struct` groups related data together — an early stepping stone toward classes and OOP.

## 12. Dynamic memory (new / delete)

```cpp
int* p = new int;      // allocate memory for one int on the heap
*p = 42;
cout << *p << endl;
delete p;                // free the memory when done

int* arr = new int[5];  // allocate an array on the heap
delete[] arr;             // free array memory — note the [] here
```

Every `new` must be matched with a `delete` (or `delete[]` for arrays). Forgetting this causes a **memory leak** — memory that's reserved but never given back, which can slow down or crash long-running programs.

## 13. File handling

```cpp
#include <fstream>

// Writing to a file
ofstream outFile("data.txt");
outFile << "Hello, file!" << endl;
outFile.close();

// Reading from a file
ifstream inFile("data.txt");
string line;
while (getline(inFile, line)) {
    cout << line << endl;
}
inFile.close();
```

## 14. Exception handling

```cpp
#include <stdexcept>

int divide(int a, int b) {
    if (b == 0) {
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        cout << divide(10, 0) << endl;
    } catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}
```

- `throw` raises an exception when something goes wrong.
- `try` wraps the risky code.
- `catch` handles the exception instead of letting the program crash.

## What's next

This covers C++ fundamentals end to end — everything up through file handling and basic exceptions. Object-Oriented Programming in C++ (classes, inheritance, polymorphism) is a big enough topic that it deserves its own separate note.