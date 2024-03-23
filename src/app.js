let riddleLevel = document.querySelector("#level-riddle")
let riddleText = document.querySelector("#riddle")
let hintText = document.querySelector("#hint-text")
let score = document.querySelector("#score")

var hintWrapper = document.querySelector(".hint-wrapper")
var hintContainer = document.querySelector(".hint-container")

var audio = document.getElementById("tata-sound")

let level = 0
let riddleNumber = 0
let riddleNumberActual = 0
let hintNumber = 0
let currentScore = 0 

const combinedList = [
    { riddle: "What begins with an 'e' and only contains one letter?", answer: "envelope", hint: "It's a type of stationery." },
    { riddle: "What has a thumb and four fingers, but is not a hand?", answer: "glove", hint: "It's something you wear." },
    { riddle: "What has a head and a tail but no body?", answer: "coin", hint: "It's a common object used for transactions." },
    { riddle: "What goes up and down but doesn’t move?", answer: "staircase", hint: "Think about your home's architecture." },
    { riddle: "What is so fragile that saying its name breaks it?", answer: "silence", hint: "It's related to sound." },
    { riddle: "What gets wet while drying?", answer: "towel", hint: "It's a common household item used for drying off after a shower or bath." },
    { riddle: "The more you take, the more you leave behind. What are they?", answer: "footsteps", hint: "Think about your movements." },
    { riddle: "What tastes better than it smells?", answer: "tongue", hint: "Think about one of your senses." },
    { riddle: "What has keys but can't open locks?", answer: "piano", hint: "It's a musical instrument." },
    { riddle: "What has teeth but can't bite?", answer: "comb", hint: "It's a grooming tool." },
    { riddle: "What gets wetter as it dries?", answer: "towel", hint: "It's used for drying." },
    { riddle: "What has a neck but no head?", answer: "bottle", hint: "It holds liquids." },
    { riddle: "What has many eyes but can't see?", answer: "potato", hint: "It's a vegetable." },
    { riddle: "What can you keep after giving it to someone?", answer: "word", hint: "It's a form of communication." },
    { riddle: "What travels around the world but stays in one spot?", answer: "stamp", hint: "It's used for mailing letters." }
];

function checkAnswer(){
    
    let userAnswer = document.querySelector("#type-answer").value
    if(userAnswer.toLowerCase() === combinedList[riddleNumberActual].answer){
        
        document.querySelector(".correct-answer-wrapper").style.display = "block"
        document.querySelector(".correct-answer-container").style.display = "block"
        
        currentScore += 10
        score.innerHTML = `${currentScore}`
        playSound();
    }
}

function playSound(){
    audio.play();
}

function showHint(){
    hintContainer.classList.add("open");
    hintWrapper.classList.add("active");
}

function closeHint(){
          hintContainer.classList.add("close");
          hintWrapper.classList.add("inactive");
}

function nextRiddle(){
    riddleNumberActual += 1
    riddleNumber += 1
    hintNumber += 1

    if(riddleNumber % 3 === 0){
        level += 1
    }

    if(riddleNumber === 3){
        riddleNumber = 0
    }

    riddleLevel.innerHTML = `Lv.${level+1} Riddle.${riddleNumber+1}`

    riddleText.innerHTML = `${combinedList[riddleNumberActual].riddle}`

    hintText.innerHTML = `${combinedList[riddleNumberActual].hint}`

    document.querySelector(".correct-answer-wrapper").style.display = "none"
    document.querySelector(".correct-answer-container").style.display = "none"

    let userAnswer = document.querySelectorAll("input")

    userAnswer.forEach(input => input.value = '')
    }

    function readText() {
        var riddleToRead = riddleText.innerHTML;
      
        var speech = new SpeechSynthesisUtterance();
        speech.text = riddleToRead;
        speech.lang = "en-US"; // Language
        
        // Find a male voice
        var voices = window.speechSynthesis.getVoices();
        var maleVoice = voices.find(function(voice) {
          return voice.name.includes('Male');
        });
      
        if (maleVoice) {
          speech.voice = maleVoice;
        } else {
          console.log('Male voice not found. Using default voice.');
        }
        
        // Adjust speech parameters
        speech.rate = 1.3; // Speech rate (default is 1)
        speech.pitch = 0.7; // Speech pitch (default is 1)
        speech.volume = 1; // Speech volume (default is 1)
      
        speechSynthesis.speak(speech);
      }
