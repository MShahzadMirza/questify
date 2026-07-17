// 🦊 QUESTIFY - Qi's First Magic ✨
// Organized Version - Single File Architecture

// =====================================================
// 🌸 PLAYER DATA
// =====================================================

let player = {
  level: 1,

  xp: 0,

  coins: 0,

  streak: 0,

  happiness: 50,

  qiFriendship: 0,

  qiLevel: 1,
};

// =====================================================
// 🌸 PROFILE DATA
// =====================================================

let profile = JSON.parse(localStorage.getItem("questifyProfile")) || {
  name: "Student",

  grade: "Not Set",

  goal: "Not Set",

  style: "Not Set",
};

// =====================================================
// 🌸 COMPANION SYSTEM
// =====================================================

const companions = [
  {
    name: "Qi",

    emoji: "🦊",

    personality: "Calm",

    messages: [
      "Small steps create big adventures 🌱",

      "Great job! Let's continue together 🦊",

      "Don't forget to rest too ☁️",

      "Hi! Ready for a cozy quest? 🦊🌸",

      "Small steps create big adventures 🌱",

      "You are doing amazing! ⭐",

      "Let's grow our knowledge garden together 🌿",

      "Remember to take breaks ☁️",

      "Every quest completed makes us stronger 💪",
    ],
  },

  {
    name: "Mochi",

    emoji: "🐱",

    personality: "Curious",

    messages: [
      "Let's study a little, then explore together 😺",

      "Every page you read is a new discovery 🌸",

      "I wonder what we will learn today? 📖",
    ],
  },

  {
    name: "Biscuit",

    emoji: "🐶",

    personality: "Energetic",

    messages: [
      "Let's do this together! ⭐",

      "You're doing pawsome! 🐶",

      "One more quest! I believe in you!",
    ],
  },

  {
    name: "Clover",

    emoji: "🐰",

    personality: "Gentle",

    messages: [
      "Let's hop through today's study gently 🌼",

      "Every page helps you grow 🌱",

      "Take your time. You're doing great 🐰",
    ],
  },
];

let currentCompanion =
  JSON.parse(localStorage.getItem("questifyCompanion")) || companions[0];

// =====================================================
// 🌱 STUDY GARDEN DATA
// =====================================================

let subjects = JSON.parse(localStorage.getItem("questifySubjects")) || [];

// =====================================================
// 🌸 TEMP VARIABLES
// =====================================================

let currentSubject = null;

// =====================================================
// 🌸 DOM ELEMENTS
// =====================================================

// Player Stats

const levelText = document.getElementById("level");

const xpText = document.getElementById("xp");

const coinsText = document.getElementById("coins");

const streakText = document.getElementById("streak");

// Bars

const xpBar = document.querySelector(".xp");

const happinessBar = document.querySelector(".happiness");

const friendBar = document.querySelector(".friendBar");

// Qi

const qiLevelText = document.getElementById("qiLevel");

const speech = document.querySelector(".speech");

const companionEmoji = document.getElementById("companionEmoji");

const companionName = document.getElementById("companionName");

const companionList = document.getElementById("companionList");

// Home Stats

const xpLeft = document.getElementById("xpLeft");

const subjectCount = document.getElementById("subjectCount");

const todayQuestCount = document.getElementById("todayQuestCount");

// Garden

const subjectBox = document.getElementById("subjects");

const addSubjectButton = document.getElementById("addSubject");

// Subject Room

const subjectRoom = document.getElementById("subjectRoom");

const roomTitle = document.getElementById("roomTitle");

const roomTasks = document.getElementById("roomTasks");

const addTaskButton = document.getElementById("addTask");

const backGarden = document.getElementById("backGarden");

// Profile

const playerName = document.getElementById("playerName");

const playerGrade = document.getElementById("playerGrade");

const playerGoal = document.getElementById("playerGoal");

const playerStyle = document.getElementById("playerStyle");

const editProfile = document.getElementById("editProfile");

// Navigation

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");

const navButtons = document.querySelectorAll(".navButton[data-page]");

const pages = document.querySelectorAll(".page");

// =====================================================
// 🌸 SAVE / LOAD SYSTEM
// =====================================================

function saveGame() {
  localStorage.setItem(
    "questifySave",

    JSON.stringify(player),
  );
}

function loadGame() {
  const saved = localStorage.getItem("questifySave");

  if (saved) {
    player = JSON.parse(saved);
  }
}

function saveSubjects() {
  localStorage.setItem(
    "questifySubjects",

    JSON.stringify(subjects),
  );
}

function loadSubjects() {
  const saved = localStorage.getItem("questifySubjects");

  if (saved) {
    subjects = JSON.parse(saved);
  }
}

// =====================================================
// 🌸 UPDATE FUNCTIONS
// =====================================================

// Update Player Stats

function updateScreen() {
  if (levelText) {
    levelText.textContent = player.level;
  }

  if (xpText) {
    xpText.textContent = player.xp;
  }

  if (coinsText) {
    coinsText.textContent = player.coins;
  }

  if (streakText) {
    streakText.textContent = player.streak;
  }

  if (xpBar) {
    xpBar.style.width = player.xp + "%";
  }

  if (happinessBar) {
    happinessBar.style.width = player.happiness + "%";
  }

  if (friendBar) {
    friendBar.style.width = player.qiFriendship + "%";
  }

  if (qiLevelText) {
    qiLevelText.textContent = player.qiLevel;
  }

  if (xpLeft) {
    xpLeft.textContent = 100 - player.xp;
  }

  if (subjectCount) {
    subjectCount.textContent = subjects.length;
  }

  if (todayQuestCount) {
    let count = 0;

    subjects.forEach(function (subject) {
      if (subject.tasks) {
        subject.tasks.forEach(function (task) {
          if (!task.completed) {
            count++;
          }
        });
      }
    });

    todayQuestCount.textContent = count;
  }
}

// =====================================================
// 🌸 PLAYER FUNCTIONS
// =====================================================

// Gain XP

function gainXP(amount) {
  player.xp += amount;

  player.coins += Math.floor(amount / 2);

  player.happiness += 2;

  if (player.happiness > 100) {
    player.happiness = 100;
  }

  increaseQiFriendship();

  if (player.xp >= 100) {
    levelUp();
  }
  refreshGame();
}

// =====================================================
// ⭐ LEVEL UP
// =====================================================

function levelUp() {
  player.level++;

  player.xp = 0;

  player.coins += 100;

  player.happiness = 100;

  if (speech) {
    speech.textContent = "🎉 WOW! We leveled up together! ✨";
  }
}

// =====================================================
// 💖 QI FRIENDSHIP SYSTEM
// =====================================================

function increaseQiFriendship() {
  player.qiFriendship += 5;

  if (player.qiFriendship >= 100) {
    player.qiFriendship = 0;

    player.qiLevel++;

    if (speech) {
      speech.textContent = "🎉 Friendship level up! We are closer now! 🦊💖";
    }
  }
}

// =====================================================
// 🦊 COMPANION RANDOM TALK
// =====================================================

function changeCompanionMessage() {
  if (!speech) {
    return;
  }

  let messages = currentCompanion.messages;

  let random = Math.floor(Math.random() * messages.length);

  speech.textContent = messages[random];
}

// =====================================================
// 🌱 GARDEN SYSTEM
// =====================================================

// Show All Subjects

function showSubjects() {
  if (!subjectBox) {
    return;
  }

  subjectBox.innerHTML = "";

  subjects.forEach(function (subject, index) {
    subjectBox.innerHTML += `

        <div class="subjectCard" onclick="openSubject(${index})">


            <div class="subjectTop">


                <h3>
                ${subject.emoji}
                ${subject.name}
                </h3>


                <span>
                ${subject.progress}%
                </span>


            </div>



            <div class="bar">

                <div 
                class="progress"
                style="width:${subject.progress}%">

                </div>

            </div>



            <div class="plantStage">

                ${getPlant(subject.progress)}

            </div>


        </div>

        `;
  });

  saveSubjects();
}

// =====================================================
// 🌱 PLANT EVOLUTION
// =====================================================

function getPlant(progress) {
  if (progress < 25) {
    return "🌱 Seedling - " + progress + "%";
  } else if (progress < 50) {
    return "🌿 Small Plant - " + progress + "%";
  } else if (progress < 75) {
    return "🌸 Flower - " + progress + "%";
  } else if (progress < 100) {
    return "🌳 Growing Tree - " + progress + "%";
  } else {
    return "🌳✨ Knowledge Tree Complete!";
  }
}

// =====================================================
// 🌸 GROW SUBJECT
// =====================================================

function growSubject() {
  if (subjects.length === 0) {
    return;
  }

  let randomSubject = Math.floor(Math.random() * subjects.length);

  subjects[randomSubject].progress += 10;

  if (subjects[randomSubject].progress > 100) {
    subjects[randomSubject].progress = 100;
  }

  refreshGame();
}

// =====================================================
// ➕ ADD SUBJECT
// =====================================================

if (addSubjectButton) {
  addSubjectButton.addEventListener("click", function () {
    let name = prompt("What subject do you want to grow? 📚");

    if (name) {
      let emoji = prompt("Choose an emoji 🌸");

      if (!emoji) {
        emoji = "📚";
      }

      subjects.push({
        name: name,

        emoji: emoji,

        progress: 0,

        tasks: [],
      });

      refreshGame();
    }
  });
}

// =====================================================
// 🏡 SUBJECT ROOM SYSTEM
// =====================================================

function openSubject(index) {
  currentSubject = index;

  let subject = subjects[index];

  if (subjectRoom) {
    subjectRoom.style.display = "block";
  }

  if (roomTitle) {
    roomTitle.textContent = subject.emoji + " " + subject.name;
  }

  showTasks();

  showTodayTasks();

  window.scrollTo({
    top: subjectRoom.offsetTop,

    behavior: "smooth",
  });
}

// =====================================================
// 🌱 BACK TO GARDEN
// =====================================================

if (backGarden) {
  backGarden.addEventListener("click", function () {
    if (subjectRoom) {
      subjectRoom.style.display = "none";
    }
  });
}

// =====================================================
// 📚 SHOW SUBJECT TASKS
// =====================================================

function showTasks() {
  if (!roomTasks) {
    return;
  }

  roomTasks.innerHTML = "";

  if (currentSubject === null) {
    return;
  }

  let tasks = subjects[currentSubject].tasks || [];

  if (tasks.length === 0) {
    roomTasks.innerHTML = "🌱 No quests yet";

    return;
  }

  tasks.forEach(function (task) {
    roomTasks.innerHTML += `


        <div class="quest">


            ${task.completed ? "✅" : "☐"}

            ${task.text}


        </div>


        `;
  });
}

// =====================================================
// ➕ ADD TASK
// =====================================================

if (addTaskButton) {
  addTaskButton.addEventListener("click", function () {
    if (currentSubject === null) {
      return;
    }

    let taskName = prompt("What quest do you want to add? 🎯");

    if (taskName) {
      if (!subjects[currentSubject].tasks) {
        subjects[currentSubject].tasks = [];
      }

      subjects[currentSubject].tasks.push({
        text: taskName,

        completed: false,
      });

      refreshGame();

      if (speech) {
        speech.textContent = "New quest added! Let's do it! 🦊✨";
      }
    }
  });
}

// =====================================================
// 🎯 TODAY'S QUEST LIST
// =====================================================

function showTodayTasks() {
  if (!todayTasks) {
    return;
  }

  todayTasks.innerHTML = "";

  subjects.forEach(function (subject, subjectIndex) {
    if (subject.tasks) {
      subject.tasks.forEach(function (task, taskIndex) {
        todayTasks.innerHTML += `


                <div class="quest"
                onclick="completeTask(${subjectIndex},${taskIndex})">


                    ${task.completed ? "✅" : "☐"}

                    ${subject.emoji}

                    ${task.text}


                </div>


                `;
      });
    }
  });
}

// =====================================================
// 🎯 COMPLETE QUEST SYSTEM
// =====================================================

function completeTask(subjectIndex, taskIndex) {
  let task = subjects[subjectIndex].tasks[taskIndex];

  if (!task.completed) {
    // Mark complete

    task.completed = true;

    // ⭐ Rewards
    gainXP(20);

    // 🌱 Subject Growth

    subjects[subjectIndex].progress += 5;

    if (subjects[subjectIndex].progress > 100) {
      subjects[subjectIndex].progress = 100;
    } else {
      if (speech) {
        speech.textContent = "Yay! Quest completed! Great job 🌸🦊";
      }
    }
  } else {
    let undo = confirm(
      "🌸 Mark this quest incomplete?\n\n" + "Your rewards will stay saved.",
    );

    if (undo) {
      task.completed = false;

      if (speech) {
        speech.textContent = "No worries! Try again whenever you're ready 🌱";
      }
    }
  }

  refreshGame();
}

// =====================================================
// 👤 PROFILE SYSTEM
// =====================================================

function updateProfile() {
  if (playerName) {
    playerName.textContent = profile.name;
  }

  if (playerGrade) {
    playerGrade.textContent = profile.grade;
  }

  if (playerGoal) {
    playerGoal.textContent = profile.goal;
  }

  if (playerStyle) {
    playerStyle.textContent = profile.style;
  }
}

function saveProfile() {
  localStorage.setItem(
    "questifyProfile",

    JSON.stringify(profile),
  );
}

// =====================================================
// ✏️ EDIT PROFILE
// =====================================================

if (editProfile) {
  editProfile.addEventListener("click", function () {
    let choice = prompt(
      `🌸 What would you like to edit?

1. 👤 Name
2. 🎓 Grade
3. 🎯 Goal
4. ☁️ Study Style

Enter 1,2,3 or 4`,
    );

    if (choice === null) {
      return;
    }

    switch (choice) {
      case "1":
        let name = prompt("Enter your name:", profile.name);

        if (name) {
          profile.name = name;
        }

        break;

      case "2":
        let grade = prompt("Enter your grade:", profile.grade);

        if (grade) {
          profile.grade = grade;
        }

        break;

      case "3":
        let goal = prompt("Enter your goal:", profile.goal);

        if (goal) {
          profile.goal = goal;
        }

        break;

      case "4":
        let style = prompt("Enter your study style:", profile.style);

        if (style) {
          profile.style = style;
        }

        break;

      default:
        alert("Please choose 1-4");

        return;
    }

    saveProfile();

    refreshGame();

    if (speech) {
      speech.textContent = "✨ Profile updated!";
    }
  });
}

// =====================================================
// 🐾 COMPANION SYSTEM
// =====================================================

function updateCompanion() {
  if (companionEmoji) {
    companionEmoji.textContent = currentCompanion.emoji;
  }

  if (companionName) {
    companionName.textContent = currentCompanion.name;
  }
}

function showCompanions() {
  if (!companionList) {
    return;
  }

  companionList.innerHTML = "";

  companions.forEach(function (companion, index) {
    companionList.innerHTML += `


<div class="companionCard 
${currentCompanion.name === companion.name ? "selected" : ""}"

onclick="chooseCompanion(${index})">


<h3>

${companion.emoji}

${companion.name}

</h3>


<p>

${companion.personality}

</p>


</div>


`;
  });
}

function chooseCompanion(index) {
  currentCompanion = companions[index];

  localStorage.setItem(
    "questifyCompanion",

    JSON.stringify(currentCompanion),
  );

  updateCompanion();

  showCompanions();

  if (speech) {
    speech.textContent =
      currentCompanion.messages[
        Math.floor(Math.random() * currentCompanion.messages.length)
      ];
  }

  refreshGame();
}

// =====================================================
// 🌸 SIDEBAR SYSTEM
// =====================================================

if (menuButton && sidebar) {
  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
}

// Close sidebar outside click

document.addEventListener("click", function (event) {
  if (
    sidebar &&
    menuButton &&
    !sidebar.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    sidebar.classList.remove("open");
  }
});

// =====================================================
// 🌸 PAGE NAVIGATION
// =====================================================

function showPage(pageId) {
  pages.forEach(function (page) {
    page.style.display = "none";
  });

  let page = document.getElementById(pageId);

  if (page) {
    page.style.display = "block";
  }

  if (sidebar) {
    sidebar.classList.remove("open");
  }
}

navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let page = button.dataset.page;

    if (page) {
      showPage(page);
    }
  });
});

// =====================================================
// 🌸 AUTO SAVE
// =====================================================

setInterval(function () {
  saveGame();

  saveSubjects();
}, 3000);

// =====================================================
// Greeting System
// =====================================================

function updateGreeting() {
  let hour = new Date().getHours();

  let greeting = "Welcome back!";

  if (hour < 12) {
    greeting = "🌅 Good Morning!";
  } else if (hour < 18) {
    greeting = "☀️ Good Afternoon!";
  } else {
    greeting = "🌙 Good Evening!";
  }

  let heading = document.querySelector(".welcomeCard h2");

  if (heading) {
    heading.textContent = greeting;
  }
}

// =====================================================
// 🦊 QUESTIFY START
// =====================================================

loadGame();

loadSubjects();

refreshGame();

updateGreeting();

showPage("homePage");

// Qi talks every 10 seconds
setInterval(function () {
  changeCompanionMessage();
}, 10000);

// =====================================================
// 🌸 MASTER REFRESH FUNCTION
// =====================================================

function refreshGame() {
  // Save everything

  saveGame();

  saveSubjects();

  saveProfile();

  // Update player UI

  updateScreen();

  // Update profile

  updateProfile();

  // Update companion

  updateCompanion();

  // Update garden

  showSubjects();

  // Update quests

  showTodayTasks();

  // Update companion choices

  if (companionList) {
    showCompanions();
  }

  // Update Home Adventure Stats

  let xpLeft = document.getElementById("xpLeft");

  if (xpLeft) {
    xpLeft.textContent = 100 - player.xp;
  }

  let subjectCount = document.getElementById("subjectCount");

  if (subjectCount) {
    subjectCount.textContent = subjects.length;
  }

  let todayQuestCount = document.getElementById("todayQuestCount");

  if (todayQuestCount) {
    let count = 0;

    subjects.forEach(function (subject) {
      if (subject.tasks) {
        count += subject.tasks.filter((task) => !task.completed).length;
      }
    });

    todayQuestCount.textContent = count;
  }
}
