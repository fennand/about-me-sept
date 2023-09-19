//Welcome message

let message;

let username = prompt("Hello new user, what is your name?");

message = "Hey " + username + " thanks for popping by, and";

document.getElementById("welcome").innerHTML = message;

//Employment question

function myFunctionWork() {
  let message;

  let work = prompt(
    "Which of these jobs did I not previously do? Probation Officer / Cruise ship worker / McDonald's staff / Truck driver"
  );

  if (work == "McDonald's staff") {
    message =
      "McDonald's staff is the correct answer. I have had much. much worse jobs than working at McDonald's . . . ";
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
  );
  if (travel == "Canada") {
    message = "Canada is the correct answer. It's the accent, no thanks.";
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
  );
  if (shirts == "Liverpool") {
    message =
      "Liverpool is the correct answer. Have you been watching me " +
      username +
      "?!";
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
  );
  if (music == "Elton John") {
    message =
      "Elton John is the correct answer. Regrettably. And now the b!tch won't be back :(";
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
  );
  if (gaming == "Oculus Quest") {
    message =
      "Oculus Quest is the correct answer. You V R really good at this " +
      username +
      " . . . ";
  } else {
    message =
      "I'm sorry " +
      username +
      ", that is incorrect. The correct answer was 'Oculus Quest'. Virtual is the best reality!";
  }
  document.getElementById("demogaming").innerHTML = message;
}
