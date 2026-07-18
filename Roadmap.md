# 🌸 Questify Version 1 Roadmap

## Vision

Questify is not just a task manager.

It is a cozy desktop RPG study companion where the player goes on small daily adventures together with their animal companion.

Every completed task makes both the player and companion stronger.

Everything is saved automatically using LocalStorage so users never lose progress.



---

# Theme

Soft
Cozy
Warm
Desktop Application
Large Cards
Cute Animations
Rounded UI
Pastel Colors

Primary Colors

🌸 Pink
🌼 Cream
🤍 White
🍯 Soft Yellow
🌱 Light Green

No dark theme for Version 1.



---

# Data Storage

Everything should automatically save using LocalStorage.

Things that will be stored:

Player Profile

Current Companion

Coins

Level

XP

Friendship

Happiness

Garden

Subjects

Tasks

Completed Tasks

Quest History

Memories

Achievements

Current Room

Daily Streak

Settings (future)

No backend required.



---

# Main Navigation

Sidebar (Visible on every screen)

🏠 Home

👤 Profile

🐾 Companion

🌱 Garden

🎯 Quests

The sidebar stays visible while switching pages.



---

# HOME PAGE

Purpose

The dashboard should answer one question:

"What adventure should I do today?"

Modules

## Hero Banner

Questify Logo

Greeting

Daily Quote

Current Companion Mood

Time of Day Greeting



---

## Adventure Summary

Level

Coins

Streak

XP Until Next Level



---

## Today's Adventure

Most important section.

Shows

Today's Quests

Growing Subjects

XP Remaining

Adventure Progress

Start Adventure button



---

## Companion Area

Large companion

Talking animation

Speech Bubble

Mood

Friendship

Happiness



---

## Experience Card

XP Bar

Current Level

XP Required

Level Progress



---

## Memories

Unlocked badges

Achievements

Special memories



---

## Cottage Preview

Shows companion home.

Enter Cottage button.

Future feature.



==================================================

PROFILE PAGE

Purpose

Customize yourself.

Modules

Player Avatar

Editable Name

Editable Grade

Editable Goal

Editable Study Style

Favorite Subject

Save Button



==================================================

EDIT PROFILE POPUP

Uses the same Questify popup style.

Fields

Name

Grade

Goal

Study Style

Favorite Subject

Save

Cancel

Automatically updates LocalStorage.



==================================================

COMPANION PAGE

Grid of companion cards.

Each card shows

Large Character

Name

Personality

Favorite Food

Friendship Bonus

Select Button

Only one companion can be active.

Selection saves automatically.



==================================================

GARDEN PAGE

Purpose

View every study subject.

Each subject is a growing magical plant.

Shows

Plant

Growth %

Completed Tasks

Progress

Enter Room button

Add Subject button



==================================================

ADD SUBJECT POPUP

Popup fields

Subject Name

Plant Type

Save

Cancel



==================================================

SUBJECT ROOM

Opens after pressing Enter Room.

Contains

Large Subject Banner

Plant

Growth %

Room Decoration

Task List

Progress

Add Task

Back to Garden

This becomes the "home" for each subject.



==================================================

ADD TASK POPUP

Custom Questify popup.

No browser alert.

Fields

Task Name

Subject

Difficulty (Easy / Medium / Hard)

Reward Preview

Save

Cancel

Saving creates a task and stores it in LocalStorage.



==================================================

QUESTS PAGE

Purpose

Today's adventure list.

Contains

Today's Tasks

Completed Tasks

Uncompleted Tasks

Progress Circle

Daily Completion %

XP Earned

Coins Earned

Every task card contains

Checkbox

Task Name

Subject

Difficulty

Reward

Completing a task

✔ Gives XP

✔ Gives Coins

✔ Increases Friendship

✔ Increases Happiness

✔ Grows Subject

✔ Saves automatically



==================================================

POPUP SYSTEM

Reusable popup component.

Will be used for

Edit Profile

Add Subject

Add Task

Future dialogs

No browser prompts.

Everything matches Questify style.



==================================================

Version 1 Build Order

✅ Step 1

Create Desktop Layout

Sidebar

Hero Banner

Cards

Spacing

Theme

---------------------------------

Step 2

Adventure Summary

---------------------------------

Step 3

Today's Adventure

---------------------------------

Step 4

Companion Area

---------------------------------

Step 5

Experience Card

---------------------------------

Step 6

Memories

---------------------------------

Step 7

Cottage Preview

---------------------------------

Step 8

Profile Screen

---------------------------------

Step 9

Edit Profile Popup

(LocalStorage)

---------------------------------

Step 10

Companion Screen

(LocalStorage)

---------------------------------

Step 11

Garden Screen

---------------------------------

Step 12

Subject Room

---------------------------------

Step 13

Add Subject Popup

(LocalStorage)

---------------------------------

Step 14

Add Task Popup

(LocalStorage)

---------------------------------

Step 15

Quest Screen

---------------------------------

Step 16

Complete Task Logic

XP

Coins

Friendship

Garden Growth

Progress

---------------------------------

Step 17

Memory System

---------------------------------

Step 18

Animations

Hover

Companion Bounce

Card Glow

Progress Animation

Popup Animation

Floating Plants

Confetti

==================================================

Goal

By the end of Version 1 the player should be able to:

✔ Create a profile

✔ Select a companion

✔ Create subjects

✔ Enter subject rooms

✔ Add tasks

✔ Complete tasks

✔ Earn XP

✔ Earn coins

✔ Level up

✔ Grow plants

✔ Increase companion friendship

✔ Save everything automatically

✔ Close the app and continue later with all progress restored.