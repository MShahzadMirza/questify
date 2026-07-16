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

let profile = JSON.parse(localStorage.getItem('questifyProfile')) || {
    name: 'Student',

    grade: 'Not Set',

    goal: 'Not Set',

    style: 'Not Set',
};
let companion = JSON.parse(localStorage.getItem('questifyCompanion')) || {
    name: 'Qi',

    emoji: '🦊',

    personality: 'Calm',

    messages: [
        'Small steps create big adventures 🌱',

        "Great job! Let's continue together 🦊",

        "Don't forget to rest too ☁️",
    ],
};
const companions = [
    {
        name: 'Qi',
        emoji: '🦊',
        personality: 'Calm',
        messages: [
            'Small steps create big adventures 🌱',
            "Great job! Let's continue together 🦊",
            "Don't forget to rest too ☁️",
        ],
    },

    {
        name: 'Mochi',
        emoji: '🐱',
        personality: 'Sleepy',
        messages: [
            "Let's study a little, then have a cozy break 😺",
            'Slow progress is still progress 🌸',
            'Curl up with a good book today 📖',
        ],
    },

    {
        name: 'Biscuit',
        emoji: '🐶',
        personality: 'Energetic',
        messages: [
            "Let's do this together! ⭐",
            "You're doing pawsome! 🐶",
            'One more quest! I believe in you!',
        ],
    },

    {
        name: 'Clover',
        emoji: '🐰',
        personality: 'Gentle',
        messages: [
            "Let's hop through today's study gently 🌼",
            'Every page you read helps you grow 🌱',
            "Take your time. You're doing great 🐰",
        ],
    },
];
let currentCompanion =
    JSON.parse(localStorage.getItem('questifyCompanion')) || companions[0];
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
const companionEmoji = document.getElementById('companionEmoji');

const companionName = document.getElementById('companionName');
const companionList = document.getElementById('companionList');

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

    document.getElementById('xpLeft').textContent = 100 - player.xp;


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

    function changeQiMessage() {
        let random = Math.floor(
            Math.random() * currentCompanion.messages.length,
        );

        speech.textContent = currentCompanion.messages[random];
    }

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

const addSubjectButton = document.getElementById('addSubject');
const subjectBox = document.getElementById('subjects');

function showSubjects() {
    if (!subjectBox) return;

    subjectBox.innerHTML = '';

    subjects.forEach(function (subject, index) {
        subjectBox.innerHTML += `

<div class="subjectCard" onclick="openSubject(${index})">

    <div class="subjectTop">

        <div class="subjectEmoji">
            ${subject.emoji}
        </div>

        <div>

            <h3>${subject.name}</h3>

            <p>${getPlant(subject.progress)}</p>

        </div>

    </div>

    <div class="bar">

        <div
            class="progress"
            style="width:${subject.progress}%">
        </div>

    </div>

    <p class="progressText">
        ${subject.progress}% Complete
    </p>

</div>

`;
    });

    saveSubjects();
}
if (addSubjectButton) {
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
}
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

    console.log('Qi Friendship:', player.qiFriendship);

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

if (addTaskButton) {
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
}
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

// Complete Study Quest

function completeTask(subjectIndex, taskIndex) {
    let task = subjects[subjectIndex].tasks[taskIndex];

    if (!task.completed) {
        task.completed = true;

        // Rewards
        player.xp += 20;

        player.coins += 10;

        increaseQiFriendship();
        subjects[subjectIndex].progress += 5;

        if (subjects[subjectIndex].progress > 100) {
            subjects[subjectIndex].progress = 100;
        }

        // Level system
        if (player.xp >= 100) {
            player.level++;

            player.xp = 0;

            player.coins += 100;

            speech.textContent = '🎉 Level up! Qi is proud of you 🦊✨';
        } else {
            speech.textContent = 'Yay! Quest completed! Great job 🌸🦊';
        }
    } else {
        let undoQuest = confirm(
            "🌸 Do you want to mark this quest as incomplete?\n\nYour XP, Coins, Friendship, and Subject Growth will stay because you've already earned them. 🦊",
        );

        if (undoQuest) {
            task.completed = false;

            speech.textContent =
                "No worries! You can complete it again whenever you're ready. 🌱";
        }
    }

    saveGame();

    saveSubjects();

    showTasks();

    showTodayTasks();

    updateScreen();
}

// Profile starts here

const playerName = document.getElementById('playerName');

const playerGrade = document.getElementById('playerGrade');

const playerGoal = document.getElementById('playerGoal');

const playerStyle = document.getElementById('playerStyle');

const editProfile = document.getElementById('editProfile');
function updateProfile() {
    playerName.textContent = profile.name;

    playerGrade.textContent = profile.grade;

    playerGoal.textContent = profile.goal;

    playerStyle.textContent = profile.style;
}
function updateCompanion() {
    companionEmoji.textContent = currentCompanion.emoji;

    companionName.textContent = currentCompanion.name;
}

function showCompanions() {
    companionList.innerHTML = '';

    companions.forEach(function (companion, index) {
        companionList.innerHTML += `

        <div class="companionCard ${currentCompanion.name === companion.name ? 'selected' : ''}"

        onclick="chooseCompanion(${index})">

            <h3>${companion.emoji} ${companion.name}</h3>

            <p>${companion.personality}</p>

        </div>

        `;
    });
}
function chooseCompanion(index) {
    currentCompanion = companions[index];

    localStorage.setItem('questifyCompanion', JSON.stringify(currentCompanion));

    updateCompanion();

    showCompanions();

    speech.textContent =
        currentCompanion.messages[
        Math.floor(Math.random() * currentCompanion.messages.length)
        ];
}

editProfile.addEventListener('click', function () {
    let choice = prompt(
        `🦊 What would you like to edit?

1. 👤 Name
2. 🎓 Grade
3. 🎯 Goal
4. ☁️ Study Style

Type 1, 2, 3 or 4.
Press Cancel to close.`,
    );

    if (choice === null) {
        return;
    }

    switch (choice) {
        case '1':
            let newName = prompt('👤 Enter your name:', profile.name);

            if (newName !== null && newName !== '') {
                profile.name = newName;
            }

            break;

        case '2':
            let newGrade = prompt('🎓 Enter your grade:', profile.grade);

            if (newGrade !== null && newGrade !== '') {
                profile.grade = newGrade;
            }

            break;

        case '3':
            let newGoal = prompt('🎯 Enter your study goal:', profile.goal);

            if (newGoal !== null && newGoal !== '') {
                profile.goal = newGoal;
            }

            break;

        case '4':
            let newStyle = prompt('☁️ Enter your study style:', profile.style);

            if (newStyle !== null && newStyle !== '') {
                profile.style = newStyle;
            }

            break;

        default:
            alert('🌸 Please choose 1, 2, 3 or 4.');

            return;
    }

    localStorage.setItem('questifyProfile', JSON.stringify(profile));

    updateProfile();

    speech.textContent = '✨ Your profile has been updated!';
});
updateProfile();
updateCompanion();
if (companionList) {
    showCompanions();
}
// 🌸 Sidebar

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('open');
});
// 🌸 Close sidebar when clicking outside

document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// 🌸 Page Navigation

const navButtons = document.querySelectorAll('.navButton[data-page]');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    pages.forEach(function (page) {
        page.style.display = 'none';
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.style.display = 'block';
    }

    sidebar.classList.remove('open');
}

navButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        showPage(button.dataset.page);
    });
});

// Show Home when Questify starts
showPage('homePage');
// 🌸 Qi talks every 10 seconds

setInterval(function () {
    changeQiMessage();
}, 10000);

// Greeting system

function updateGreeting() {
    const hour = new Date().getHours();

    let greeting = "Welcome back!";

    if (hour < 12) {
        greeting = "🌅 Good Morning!";
    } else if (hour < 18) {
        greeting = "☀️ Good Afternoon!";
    } else {
        greeting = "🌙 Good Evening!";
    }

    const heading = document.querySelector(".welcomeCard h2");

    if (heading) {
        heading.textContent = greeting;
    }
}

updateGreeting();