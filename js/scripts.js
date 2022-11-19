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

// 6th test and 7th test
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputNumber = parsedNumber + 1;
  let holdingArray = [];
  let outputArray = [];
  for (let i = 0; i <= outputNumber + 1; i += 1) {
    outputNumber = outputNumber - 1;
    holdingArray.push(outputNumber);
    if (holdingArray.includes(3)) {
      outputArray.push("Won't you be my neighbor?")
    }
    else if (holdingArray.includes(2)) {
      outputArray.push("Boop!");
    }
    else if (holdingArray.includes(1)) {
      outputArray.push("Beep!") 
    }
    else {
      outputArray.push(holdingArray[i])
    }
  }
  outputArray.push(0);
  return outputArray.reverse();
}

//if the value of an element in array is true

/*The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

