# Questify Coding Style Guide

## Main Goal

Questify code should be:

- Easy to understand
- Beginner-friendly
- Simple to modify
- Organized clearly

The developer is learning programming, so readability is more important than advanced techniques.

---

# Project Structure

Current project structure:

```text
Questify/

index.html
style.css
script.js
```

Keep the project simple.

Do not split JavaScript into many files unless the developer specifically decides to do so.

---

# JavaScript Organization

Since Questify uses one main JavaScript file, organize it using sections.

Example:

```javascript
// ===============================
// PLAYER SYSTEM
// ===============================

// ===============================
// QUEST SYSTEM
// ===============================

// ===============================
// SUBJECT SYSTEM
// ===============================

// ===============================
// COMPANION SYSTEM
// ===============================

// ===============================
// SAVE SYSTEM
// ===============================
```

---

# Naming Rules

Use clear names that explain their purpose.

Good:

```javascript
playerLevel

qiFriendship

subjectProgress

completeTask()

saveGame()
```

Avoid:

```javascript
x

data1

thing
```

---

# Functions

Functions should have one clear responsibility.

Example:

```javascript
function gainXP(){

}
```

A function should do one job instead of controlling the whole application.

---

# Comments

Add comments when creating new systems.

Example:

```javascript
// Handles rewards after completing a study quest
function completeTask(){

}
```

Comments should explain the purpose of code.

---

# Development Rule

Before adding a feature:

1. Understand the goal
2. Plan the change
3. Add small code
4. Test it
5. Fix problems
6. Continue

The goal is not only to finish Questify.

The goal is to learn programming while building it.