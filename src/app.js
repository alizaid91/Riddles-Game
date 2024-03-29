bgMusic.play();
let riddleLevel = document.querySelector("#level-riddle");
let riddleText = document.querySelector("#riddle");
let hintText = document.querySelector("#hint-text");
let score = document.querySelector("#score");
let homePage = document.querySelector(".home-page")

var hintWrapper = document.querySelector(".hint-wrapper");
var hintContainer = document.querySelector(".hint-container");

var correctAnsWrapper = document.querySelector(".correct-answer-wrapper");
var correctAnsContainer = document.querySelector(".correct-answer-container");

var sound = document.getElementById("tata-sound");

let level = 0;
let riddleNumber = 0;
let riddleNumberActual = 0;
let hintNumber = 0;
let currentScore = 0;

const combinedList = [
  {
    riddle: "What begins with an 'e' and only contains one letter?",
    answer: "envelope",
    hint: "It's a type of stationery.",
  },
  {
    riddle: "What has a thumb and four fingers, but is not a hand?",
    answer: "glove",
    hint: "It's something you wear.",
  },
  {
    riddle: "What has a head and a tail but no body?",
    answer: "coin",
    hint: "It's a common object used for transactions.",
  },
  {
    riddle: "What goes up and down but doesn’t move?",
    answer: "staircase",
    hint: "Think about your home's architecture.",
  },
  {
    riddle: "What is so fragile that saying its name breaks it?",
    answer: "silence",
    hint: "It's related to sound.",
  },
  {
    riddle: "I'm always in front of you but can't be seen. What am I?",
    answer: "future",
    hint: "It's ahead of you, yet unseen.",
  },
  {
    riddle: "The more you take, the more you leave behind. What are they?",
    answer: "footsteps",
    hint: "Think about your movements.",
  },
  {
    riddle: "What tastes better than it smells?",
    answer: "tongue",
    hint: "Think about one of your senses.",
  },
  {
    riddle: "What has keys but can't open locks?",
    answer: "piano",
    hint: "It's a musical instrument.",
  },
  {
    riddle: "What has teeth but can't bite?",
    answer: "comb",
    hint: "It's a grooming tool.",
  },
  {
    riddle: "What can fill a room but takes up no space?",
    answer: "light",
    hint: "Think of something intangible that sets the mood in a room.",
  },
  {
    riddle: "What has a neck but no head?",
    answer: "bottle",
    hint: "It holds liquids.",
  },
  {
    riddle: "What has many eyes but can't see?",
    answer: "potato",
    hint: "It's a vegetable.",
  },
  {
    riddle: "What can you keep after giving it to someone?",
    answer: "word",
    hint: "It's a form of communication.",
  },
  {
    riddle: "What travels around the world but stays in one spot?",
    answer: "stamp",
    hint: "It's used for mailing letters.",
  },
];

function startGame() {
  homePage.classList.toggle("remove");

  setTimeout(function() {
    bgMusic.play();
  }, 700)
}

function checkAnswer() {
  let userAnswer = document.querySelector("#type-answer").value;
  if (userAnswer.toLowerCase() === combinedList[riddleNumberActual].answer) {
    correctAnsContainer.style.display = "block";
    correctAnsWrapper.style.display = "block";
    setTimeout(function() {
      correctAnsContainer.classList.add("active");
      correctAnsWrapper.classList.add("active");
    }, 10);

    currentScore += 10;
    score.innerHTML = `${currentScore}`;
    playSound();
  }
  else {
    var checkAnswerBtn = document.querySelector("#check-answer-btn");
    checkAnswerBtn.classList.add("shake");

    setTimeout(function() {
      checkAnswerBtn.classList.remove("shake");
    }, 500);
  }
}

function playSound() {
  sound.play();
  sound.volume = 0.6;
}

function showHint() {
  hintWrapper.style.display = "block";
  hintContainer.style.display = "block";
  setTimeout(function() {
    hintWrapper.classList.add("active");
    hintContainer.classList.add("active");
  }, 10);
}

function closeHint() {
  hintWrapper.classList.remove("active");
  hintContainer.classList.remove("active");
  setTimeout(function() {
    hintWrapper.style.display = "none";
    hintContainer.style.display = "none";
  }, 300);
}

function nextRiddle() {
  riddleNumberActual += 1;
  riddleNumber += 1;
  hintNumber += 1;

  if (riddleNumber % 3 === 0) {
    level += 1;
  }

  if (riddleNumber === 3) {
    riddleNumber = 0;
  }

  riddleLevel.innerHTML = `Lv.${level + 1} Riddle.${riddleNumber + 1}`;

  riddleText.innerHTML = `${combinedList[riddleNumberActual].riddle}`;

  hintText.innerHTML = `${combinedList[riddleNumberActual].hint}`;

  correctAnsContainer.classList.remove("active");
  correctAnsWrapper.classList.remove("active");
  setTimeout(function() {
    correctAnsContainer.style.display = "none";
    correctAnsWrapper.style.display = "none";
  }, 300);

  let userAnswer = document.querySelectorAll("input");

  userAnswer.forEach((input) => (input.value = ""));
}

function toggleMusic() {
  var bgMusic = document.getElementById("bgMusic");
  var musicContainer = document.getElementById("music-container");
  bgMusic.volume = 0.4;

  if (bgMusic.paused) {
    bgMusic.play();
    musicContainer.classList.remove("paused");
  } else {
    bgMusic.pause();
    musicContainer.classList.add("paused");
  }

  // var riddleToRead = riddleText.innerHTML;

  // var speech = new SpeechSynthesisUtterance();
  // speech.text = riddleToRead;
  // speech.lang = "en-US"; // Language

  // // Find a male voice
  // var voices = window.speechSynthesis.getVoices();
  // var maleVoice = voices.find(function (voice) {
  //   return voice.name.includes("Male");
  // });

  // if (maleVoice) {
  //   speech.voice = maleVoice;
  // } else {
  //   console.log("Male voice not found. Using default voice.");
  // }

  // // Adjust speech parameters
  // speech.rate = 1.1; // Speech rate (default is 1)
  // speech.pitch = 0.7; // Speech pitch (default is 1)
  // speech.volume = 1; // Speech volume (default is 1)

  // speechSynthesis.speak(speech);
}
