function neighborhoodOutput(number) {
  parsedNumber = parseInt(number).split();
  outputNumbers = [];
  for (let i = 0; i < parsedNumber; i += 1) {
    if (parsedNumber === 3) {
      return "Won't you be my neighbor?"
    }
   else if (parsedNumber === 2) {
      return "Boop!"
    }
    else if (parsedNumber === 1) {
      return "Beep!"
    }
  }
}