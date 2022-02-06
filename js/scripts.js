// Utility Logic

function noInputtedWord(word, text) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}


function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function commonWord(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount2 = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount2++;
    }
  });
  return word + ' ' + wordCount2;
}
  
//function includesRarestLetter(word) {
//  if (word.toLowerCase().includes("q")) {
//    return true;
//  }
//  return false;
//}

// UI Logic

// boldPassage()

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>"
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
    htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>"; 
}

// offensiveWord()

function offensiveWord(passage) {
  let sentence = passage.split(" ");
  sentence.map(function(word, index) {
    const badArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
    if (badArray.includes(word)) {
      sentence.splice(index, 1);
    }
  });
  return sentence.join(" ")
}
  


$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const wordCount2 = commonWord(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#common-word").html(wordCount2);
    $("#bold-passage").html(boldPassage(word, passage));
    
  });
});