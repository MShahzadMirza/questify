// 🦊 QUESTIFY - Qi's First Magic ✨

// Player Data

let player = {
    level: 1,

    xp: 0,

    coins: 0,

    streak: 0,

    happiness: 80,

    qiFriendship: 0,

    qiLevel: 1,
};

let profile = {
    name: 'Student',
};

// Get elements

const levelText = document.getElementById('level');

const xpText = document.getElementById('xp');

const coinsText = document.getElementById('coins');

const streakText = document.getElementById('streak');

const xpBar = document.querySelector('.xp');
const happinessBar = document.querySelector('.happiness');
const todayTasks = document.getElementById('todayTasks');

const friendBar = document.querySelector('.friendBar');

const qiLevelText = document.getElementById('qiLevel');
const speech = document.querySelector('.speech');

// Qi Messages

const qiMessages = [
    "Hi! I'm Qi 🦊🌸 Ready for a cozy quest?",

    'Small steps create big adventures 🌱',

    'You are doing amazing! ⭐',

    "Let's grow our knowledge garden together 🌿",

    'Remember to take breaks and relax ☁️',

    'Every quest completed makes us stronger 💪',
];

// Update Screen

function updateScreen() {
    levelText.textContent = player.level;

    xpText.textContent = player.xp;

    coinsText.textContent = player.coins;

    streakText.textContent = player.streak;

    xpBar.style.width = player.xp + '%';

    happinessBar.style.width = player.happiness + '%';
    friendBar.style.width = player.qiFriendship + '%';

    qiLevelText.textContent = player.qiLevel;
}

// Add XP

function gainXP(amount) {
    player.xp += amount;

    player.coins += Math.floor(amount / 2);

    player.happiness += 2;
    increaseQiFriendship();

    if (player.xp >= 100) {
        levelUp();
    }

    changeQiMessage();

    updateScreen();
}

// Level Up

function levelUp() {
    player.level++;

    player.xp = 0;

    player.coins += 100;

    player.happiness = 100;

    speech.textContent = '🎉 WOW! We leveled up together! 🦊✨';
}

// Qi Random Talking

function changeQiMessage() {
    let random = Math.floor(Math.random() * qiMessages.length);

    speech.textContent = qiMessages[random];
}

// Make quests clickable

const quests = document.querySelectorAll('.quest');

quests.forEach(function (quest) {
    let originalText = quest.textContent;

    quest.addEventListener('click', function () {
        if (!quest.classList.contains('done')) {
            quest.classList.add('done');

            quest.textContent = '✅ ' + originalText;

            gainXP(20);
            growSubject();
        } else {
            quest.classList.remove('done');

            quest.textContent = originalText;

            player.xp -= 20;

            player.coins -= 10;

            if (player.xp < 0) {
                player.xp = 0;
            }

            if (player.coins < 0) {
                player.coins = 0;
            }

            speech.textContent = "Let's try again! 🌱🦊";

            updateScreen();
        }
    });
});

// Save Data

function saveGame() {
    localStorage.setItem(
        'questifySave',

        JSON.stringify(player),
    );
}

// Load Data

function loadGame() {
    let saved = localStorage.getItem('questifySave');

    if (saved) {
        player = JSON.parse(saved);
    }
}

// Save every few seconds

setInterval(saveGame, 3000);

// Start Game

loadGame();

updateScreen();
// 🌱 Study Garden System
let subjects = JSON.parse(localStorage.getItem('questifySubjects')) || [
    {
        name: 'Mathematics',
        emoji: '📐',
        progress: 20,
        tasks: [],
    },
];

console.log(subjects);

const subjectBox = document.getElementById('subjects');

const addSubjectButton = document.getElementById('addSubject');

function showSubjects() {
    subjectBox.innerHTML = '';

    subjects.forEach(function (subject, index) {
        subjectBox.innerHTML += `


        <div class="subject" onclick="openSubject(${index})">


            <h3>
            ${subject.emoji}
            ${subject.name}
            </h3>


            <div class="bar">

                <div 
                class="progress"
                style="width:${subject.progress}%">

                </div>

            </div>


            <p>
            ${getPlant(subject.progress)}
            </p>


        </div>


        `;
    });

    saveSubjects();
}

addSubjectButton.addEventListener('click', function () {
    let name = prompt('What subject do you want to grow? 📚');

    if (name) {
        let emoji = prompt('Choose an emoji 🌸');

        if (!emoji) {
            emoji = '📚';
        }

        subjects.push({
            name: name,

            emoji: emoji,

            progress: 0,
        });

        showSubjects();
    }
});
// 🌱 Grow Subject

function growSubject() {
    if (subjects.length === 0) {
        return;
    }

    let randomSubject = Math.floor(Math.random() * subjects.length);

    subjects[randomSubject].progress += 10;

    if (subjects[randomSubject].progress > 100) {
        subjects[randomSubject].progress = 100;
    }

    showSubjects();
}
function getPlant(progress) {
    if (progress < 25) {
        return '🌱 Seedling - ' + progress + '%';
    } else if (progress < 50) {
        return '🌿 Small Plant - ' + progress + '%';
    } else if (progress < 75) {
        return '🌸 Flower - ' + progress + '%';
    } else if (progress < 100) {
        return '🌳 Growing Tree - ' + progress + '%';
    } else {
        return '🌳✨ Knowledge Tree Complete!';
    }
}
function saveSubjects() {
    localStorage.setItem('questifySubjects', JSON.stringify(subjects));
}
showSubjects();
function increaseQiFriendship() {
    player.qiFriendship += 5;

    if (player.qiFriendship >= 100) {
        player.qiFriendship = 0;

        player.qiLevel++;

        speech.textContent =
            '🎉 Qi friendship level up! We are closer now! 🦊💖';
    }
}
let currentSubject = null;

const subjectRoom = document.getElementById('subjectRoom');

const roomTitle = document.getElementById('roomTitle');

const roomTasks = document.getElementById('roomTasks');
function openSubject(index) {
    currentSubject = index;

    let subject = subjects[index];

    subjectRoom.style.display = 'block';

    roomTitle.innerHTML = subject.emoji + ' ' + subject.name;

    showTasks();
    showTodayTasks();

    window.scrollTo({
        top: subjectRoom.offsetTop,

        behavior: 'smooth',
    });
}
document.getElementById('backGarden').addEventListener('click', function () {
    subjectRoom.style.display = 'none';
});
function showTasks() {
    roomTasks.innerHTML = '';

    let tasks = subjects[currentSubject].tasks || [];

    if (tasks.length === 0) {
        roomTasks.innerHTML = '🌱 No quests yet';
    }

    tasks.forEach(function (task) {
        roomTasks.innerHTML += `

        <div class="quest">

        ${task.completed ? '✅' : '☐'}

        ${task.text}

        </div>

        `;
    });
}
// ➕ Add Task System

const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click', function () {
    if (currentSubject === null) {
        return;
    }

    let taskName = prompt('What quest do you want to add? 🎯');

    if (taskName) {
        if (!subjects[currentSubject].tasks) {
            subjects[currentSubject].tasks = [];
        }

        subjects[currentSubject].tasks.push({
            text: taskName,

            completed: false,
        });

        saveSubjects();

        showTasks();

        speech.textContent = "New quest added! Let's do it! 🦊✨";
    }
});
function showTodayTasks() {
    todayTasks.innerHTML = '';

    subjects.forEach(function (subject, subjectIndex) {
        if (subject.tasks) {
            subject.tasks.forEach(function (task, taskIndex) {
                todayTasks.innerHTML += `


                <div class="quest"
                onclick="completeTask(${subjectIndex}, ${taskIndex})">


                ${task.completed ? '✅' : '☐'}

                ${subject.emoji}

                ${task.text}


                </div>


                `;
            });
        }
    });
}

function completeTask(subjectIndex, taskIndex) {
    alert('Task clicked!');
    let task = subjects[subjectIndex].tasks[taskIndex];

    if (task.completed === false) {
        task.completed = true;

        gainXP(20);

        subjects[subjectIndex].progress += 5;

        if (subjects[subjectIndex].progress > 100) {
            subjects[subjectIndex].progress = 100;
        }

        speech.textContent = 'Yay! Quest complete! Great job! 🦊✨';
    } else {
        task.completed = false;

        speech.textContent = 'We can try again! 🌸';
    }

    saveSubjects();

    showTasks();

    showTodayTasks();

    updateScreen();
}

const playerName = document.getElementById('playerName');

const changeNameButton = document.getElementById('changeName');

changeNameButton.addEventListener('click', function () {
    let newName = prompt('What is your name?');

    if (newName) {
        profile.name = newName;

        playerName.textContent = profile.name;
    }
});
