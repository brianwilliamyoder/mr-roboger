//1st test
function neighborhoodOutput(numberString) {
  parNumberArray = numberString.split("");
  for (let i = 0; i < parNumberArray.length; i += 1) {
    if (parNumberArray.includes("3")) {
      return "Won't you be my neighbor?"
    }
   else if (parNumberArray.includes("2")) {
      return "Boop!"
    }
    else if (parNumberArray.includes("1")) {
      return "Beep!"
    }
    else {
      return parNumberArray;
    }
  }
}

// 7th test
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputNumber = parsedNumber;
  let holdingArray = [];
  let outputArray = [];
  for (let i = 0; i < outputNumber; i += 1) {
    loopOutputNumber = outputNumber - i;
    holdingArray.push(loopOutputNumber);
    console.log(holdingArray);
    if (holdingArray.includes(3)) {
      outputArray.push("Won't you be my neighbor?");
      holdingArray = [];

    }
    else if (holdingArray.includes(2)) {
      outputArray.push("Boop!");
      holdingArray = [];
    }
    else if (holdingArray.includes(1)) {
      outputArray.push("Beep!");
      holdingArray = [];
    }
    else {
      outputArray.push(holdingArray[0])
      holdingArray = []
    }
  }
  outputArray.push(0);
  outputArray.reverse();
  return outputArray;
}
)




/*
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputNumber = parsedNumber;
  let holdingArray = [];
  let outputArray = [];
  for (let i = 0; i <= outputNumber; i += 1) {
    loopOutputNumber = outputNumber - i;
    holdingArray.push(loopOutputNumber);
    if (holdingArray.includes(3)) {
      outputArray.push("Won't you be my neighbor?");
      holdingArray = [];

    }
    else if (holdingArray.includes(2)) {
      outputArray.push("Boop!");
      holdingArray = [];
    }
    else if (holdingArray.includes(1)) {
      outputArray.push("Beep!");
      holdingArray = [];
    }
    else {
      outputArray.push(holdingArray[0])
    }
  }
  outputArray.push(0);
  outputArray.reverse();
  outputArray.push(parsedNumber);
  return outputArray;
}
undefined
returnRangeFromInput("5")
(8) [0, 0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 5, 5, 5]