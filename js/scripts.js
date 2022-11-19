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

// 6th test
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputNumber = parsedNumber + 1;
  let outputArray = [];
  for (let i = 0; i <= outputNumber + 1; i += 1) {
    outputNumber = outputNumber - 1;
    outputArray.push(outputNumber);
  }
  outputArray.push(0);
  return outputArray.reverse();