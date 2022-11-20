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
  //
  let holdingArray = [];
  let outputArray = [];
  for (let i = 0; i <= outputNumber + 1; i += 1) {
    outputNumber = outputNumber - 1;
    holdingArray.push(outputNumber);
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

