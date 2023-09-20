//Welcome message

let welcome;

let username = prompt("Hello new user, what is your name?");

welcome = "Hey " + username + " thanks for popping by, and";

document.getElementById("welcome").innerHTML = welcome;

//Employment question

let userPoints = 0;

function myFunctionWork() {
  let message;

  let work = prompt(
    "Which of these jobs did I not previously do? Probation Officer / Cruise ship worker / McDonald's staff / Truck driver"
  ).toLowerCase();

  if (work == "mcdonald's staff" || "mcdonalds staff") {
    message =
      "McDonald's staff is the correct answer. I have had much, much worse jobs than working at McDonald's . . . ";
    userPoints++;
  } else {
    message =
      "Soz but that is incorrect " +
      username +
      ". The correct answer was 'McDonald's staff', which would have been a far less stressful job!";
  }
  document.getElementById("demowork").innerHTML = message;
}

//Travel question

function myFunctionTravel() {
  let message;

  let travel = prompt(
    "Where have I NOT backpacked around?  Canada / Cambodia / Peru / Italy "
  ).toLowerCase();
  if (travel == "canada") {
    message = "Canada is the correct answer. It's the accent, no thanks.";
    userPoints++;
  } else {
    message =
      "You were miles off " +
      username +
      "!. The correct answer was 'Canada', it's just a colder England.";
  }
  document.getElementById("demotravel").innerHTML = message;
}

//Football shirt question

function myFunctionShirts() {
  let message;

  let shirts = prompt(
    "Which team does NOT feature in my football shirt collection? Liverpool / Barcelona / Juventus / Bayern Munich"
  ).toLowerCase();
  if (shirts == "liverpool") {
    message =
      "Liverpool is the correct answer. Have you been watching me " +
      username +
      "?!";
    userPoints++;
  } else {
    message =
      "I'm glad you went for that, but unfortunately for you that is incorrect " +
      username +
      ". The correct answer was 'Liverpool', aka The Devil's Club.";
  }
  document.getElementById("demoshirts").innerHTML = message;
}

//Music question

function myFunctionMusic() {
  let message;

  let music = prompt(
    "Which musical act have I NOT seen live? Lionel Richie / Fatboy Slim / Red Hot Chili Peppers / Elton John"
  ).toLowerCase();
  if (music == "elton john") {
    message =
      "Elton John is the correct answer. Regrettably. And now the b!tch won't be back :(";
    userPoints++;
  } else {
    message =
      "Ooooh unfortunately that is incorrect " +
      username +
      ". The correct answer was 'Elton John'. It's a sad, sad situation . . . ";
  }
  document.getElementById("demomusic").innerHTML = message;
}

//Gaming question

function myFunctionGaming() {
  let message;

  let gaming = prompt(
    "What is my current gaming system of choice? PS5 / Oculus Quest / Xbox Series S / PC"
  ).toLowerCase();
  if (gaming == "oculus quest") {
    message =
      "Oculus Quest is the correct answer. You V R really good at this " +
      username +
      " . . . ";
    userPoints++;
  } else {
    message =
      "I'm sorry " +
      username +
      ", that is incorrect. The correct answer was 'Oculus Quest'. Virtual is the best reality!";
  }
  document.getElementById("demogaming").innerHTML = message;
}

//Guessing game - work

function myFunctionGuess() {
  let guess = prompt(
    "How many years did I work for the Probation Service? You have four attempts to get this right!"
  );
  let attempts = 4;

  while (guess != 14) {
    if (guess < 13) {
      attempts--;
      alert("Too low!");
    } else if (guess >= 15) {
      attempts--;
      alert("Too high!");
    }

    if (attempts == 0) {
      alert("Game over! How are you this bad at guessing a number??");
      break;
    }
    guess = prompt("Guess again.");
  }
  alert("Well done! The answer was 14, how did you know that??");
}
myFunctionGuess();

//Guessing game - football shirts

let guessShirts = [
  "real betis",
  "borussia dortmund",
  "ac milan",
  "arsenal",
  "fiorentina",
  "venezia",
  "psv",
  "barcelona",
  "quilmes",
  "pumas unam",
  "everton",
];

let guessShirtsAns = prompt(
  "Can you guess a football team I think have great shirts?"
).toLowerCase;

for (let i = 0; i < guessShirts.length; i++) {
  if (guessShirtsAns === guessShirts[i]) {
    alert("Bang on! Excellent taste :)");
    userPoints++;
  }
}

alert("You got " + userPoints + "/7 questions correct");
