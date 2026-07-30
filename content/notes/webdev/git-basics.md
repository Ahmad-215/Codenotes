---
title: "Git & GitHub: The Commands You'll Actually Use"
description: "Not every Git command — just the daily workflow, explained simply."
order: 0
---

Most students overload on Git commands. In practice, you'll use about ten of them 95% of the time.

## Starting a project

```bash
git init                     # start tracking a new folder
git clone <url>               # copy an existing repo
```

## The daily loop

```bash
git status                   # what changed?
git add .                     # stage everything changed
git commit -m "message"       # save a snapshot
git push                      # send it to GitHub
```

## Working with branches

```bash
git branch feature-login      # create a branch
git checkout feature-login    # switch to it
git checkout -b feature-login # create + switch in one step
git merge feature-login        # bring it into your current branch
```

## Getting other people's changes

```bash
git pull                      # fetch + merge in one step
```

## A commit message that's actually useful

Bad: `"fixed stuff"`
Good: `"fix: login form no longer submits empty password"`

Future-you (and anyone reviewing your code) will thank you.
