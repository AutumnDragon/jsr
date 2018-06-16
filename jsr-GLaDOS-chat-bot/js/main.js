


// insults from GLaDOS in response to any question that does not fit another answer
var gladosLines = ["Well done. Here come the test results: 'You are a horrible person.' That's what it says. We weren't even testing for that.",
  "Killing you and giving you advice aren't mutually exclusive. The rocket really is the way to go.",
  "Any feelings you think it has for you are simply byproducts of your sad, empty life.",
  "That jumpsuit you're wearing looks stupid. That's not me talking, it's right here on your file.",
  "Despite your violent behavior, the only thing you've managed to break so far is my heart.",
  "It's been fun. Don't come back.",
  "So. Was there anything you wanted to apologize to ME for?",
  "In dangerous testing environments, the Enrichment Center promises to always provide useful advice. For instance, the floor here will kill you. Try to avoid it",
  "Unbelievable. You must be the pride of your hometown!",
  "Cake and grief counseling will be available at the conclusion of the test.",
  "I really don't know how to respond to such a ridiculous comment."];


//List names of everyone in class. Later pick one at random
var classNames = ["Bernardo", "Brandon", "Colburn", "Courtney", "Joanna", "Josh", "Kaitlyn", "Alex", "Alexis", "Andrew", "David", "Diana", "Ejaz", "Katie", "Kevin", "Myriam", "Nikki", "Sonyl", "Tenny", "Timothy" ];


// Iterate through the optional answers to each type question
var why = ["Why do you think?", "Because that's just the way it is.", "Why not?", `You should ask ${className()}.`];
var whyIndex;
var whyMsg;
var how = ["How to you think?", "You'll have to look it up.", "Don't ask me", `You should ask ${className()}.`];
var howIndex;
var howMsg;
var what = ["I really don't know how to answer that.", "Thant's a complicated question. What do you think?"];
var whatIndex;
var whatMsg;
var when = ["When you're ready.", "When I'm sixty-four.", "How about never!"];
var whenIndex;
var whenMsg;
var where = ["Here", "There", "Everywhere", "Far, far away."];
var whereIndex;
var whereMsg;
var who = [`You should ask ${className()}.`, `I believe ${className()} is the person you are looking for.`];
var whoIndex;
var whoMsg;
var hi = ["Greetings", "I'd like to say 'It's nice to see you again' but... ", "Oh, it's you again. Hello."];

function randomStringGen(msgArray) {
  var randomMsg = msgArray[Math.floor(Math.random() * msgArray.length)];
  return randomMsg;
}

function className() {
  var className = randomStringGen(classNames);
  return className;
}

window.onload = function() {

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var message = document.getElementById('chatInput').value;
  chat = document.getElementById('chatInput').value;
  var chellMsgs = document.getElementById('chell').innerHTML;
  chellMsgs = message + "<br/><br/>" + chellMsgs;
  document.getElementById('chell').innerHTML = chellMsgs;
  document.getElementById('chatInput').value = "";
  respondToMessage(message);
});

// Find the index of the last answer used in an array
function nextIndex(lookFor, questionArray) {
  indexNum = questionArray.indexOf(lookFor);
  return indexNum;
}

function nextMsg(questionArray, questionMsg, questionIndex) {
  if ((nextIndex(questionMsg, questionArray)) + 1 === questionArray.length) {
    questionIndex = 0;
  } else {
    questionIndex = (nextIndex(questionMsg, questionArray)) + 1;
  }
  return questionArray[questionIndex]
}


function respondToMessage(message) {
  var gladosRandom = randomStringGen(gladosLines);
  var hello = randomStringGen(hi);
  var gladosTemp = document.getElementById('glados').innerHTML;
  var gladosMsg;

  whyMsg = nextMsg(why, whyMsg, whyIndex);
  howMsg = nextMsg(how, howMsg, howIndex);
  whatMsg = nextMsg(what, whatMsg, whatIndex);
  whenMsg = nextMsg(when, whenMsg, whenIndex);
  whereMsg = nextMsg(where, whereMsg, whereIndex);
  whoMsg = nextMsg(who, whoMsg, whoIndex);


if (message.match(/Open the/)) {
    gladosMsg = "I'm sorry, I can't do that. ";
  } else if (message.match(/hello/i) || message.match(/\bhi\b/i)) {
    gladosMsg = hello;
  } else if (message.match(/why/i)) {
    gladosMsg = whyMsg;
  } else if (message.match(/\bhow/i)) {
    gladosMsg = howMsg;
  } else if (message.match(/what/i)) {
    gladosMsg = whatMsg;
  } else if (message.match(/when/i)) {
    gladosMsg = whenMsg;
  } else if (message.match(/where/i)) {
    gladosMsg = whereMsg;
  } else if (message.match(/who\b/i) || message.match(/who\\'s\b/i)) {
    gladosMsg = whoMsg;
  } else if (message.match(/\bHal\b/)) {
    gladosMsg = "Don't call me Hal!";
  }  else {
    gladosMsg = gladosRandom ;
  }
  gladosTemp = gladosMsg + "<br/><br/>" + gladosTemp;
  document.getElementById('glados').innerHTML = gladosTemp;
}

};
