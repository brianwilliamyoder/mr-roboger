function neighborhoodOutput(numberString) {
  //parsedNumber = parseInt(number);
  parNumberArray = numberString.split("");
  outputNumbers = [];
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