function neighborhoodOutput(number) {
  parsedNumber = parseInt(number);
  outputNumbers = [];
  for (let i = 0; i < parsedNumber; i += 1) {
    if (parsedNumber === 1) {
      outputNumbers = "Beep!"
    }
    return outputNumbers;
  }
}