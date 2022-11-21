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

//7th test edit
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputNumber = parsedNumber;
  let outputArray = [];
  for (let i = 0; i < outputNumber; i += 1) {
    let loopOutputNumber = outputNumber - i;
    let numStr = loopOutputNumber.toString();
    console.log(loopOutputNumber);
    if (numStr.includes('3')) {
      outputArray.push("Won't you be my neighbor?");

    }
    else if (numStr.includes('2')) {
      outputArray.push("Boop!");
     
    }
    else if (numStr.includes('1')) {
      outputArray.push("Beep!");
    }
    else {
      outputArray.push(loopOutputNumber)
    }
  }
  outputArray.push(0);
  outputArray.reverse();
  return outputArray;
}

