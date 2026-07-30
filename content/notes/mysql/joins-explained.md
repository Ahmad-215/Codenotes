---
title: "MySQL JOINs Explained With One Example You'll Actually Remember"
description: "INNER, LEFT, RIGHT, and FULL joins — all explained using the same two tables."
order: 0
---

Every JOIN type makes more sense once you use the *same* two tables throughout. Here's the setup:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    course_id INT
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    course_name VARCHAR(50)
);
```

Assume some students have a `course_id` that doesn't match any row in `courses`, and some courses have no students enrolled yet. That mismatch is exactly what makes JOINs meaningful.

## INNER JOIN — only the matches

```sql
SELECT students.name, courses.course_name
FROM students
INNER JOIN courses ON students.course_id = courses.id;
```

Returns only students who have a valid, matching course. Anyone with a missing or invalid `course_id` disappears from the results.

## LEFT JOIN — all students, matched course or not

```sql
SELECT students.name, courses.course_name
FROM students
LEFT JOIN courses ON students.course_id = courses.id;
```

Every student shows up. If there's no matching course, `course_name` comes back as `NULL`.

## RIGHT JOIN — all courses, matched student or not

```sql
SELECT students.name, courses.course_name
FROM students
RIGHT JOIN courses ON students.course_id = courses.id;
```

Flip side of LEFT JOIN — every course shows up, even ones with zero enrolled students.

## FULL JOIN — everything, matched or not

MySQL doesn't have `FULL JOIN` directly, so you simulate it:

```sql
SELECT students.name, courses.course_name
FROM students
LEFT JOIN courses ON students.course_id = courses.id
UNION
SELECT students.name, courses.course_name
FROM students
RIGHT JOIN courses ON students.course_id = courses.id;
```

## The one-line summary

- **INNER** = only what matches on both sides
- **LEFT** = everything on the left, matched or not
- **RIGHT** = everything on the right, matched or not
- **FULL** = everything from both sides, matched or not
