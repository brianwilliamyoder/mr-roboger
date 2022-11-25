//Business Logic
function returnRangeFromInput(numberString) {
  let parsedNumber = parseInt(numberString);
  let outputArray = [];
  for (let i = 0; i < parsedNumber; i += 1) {
    let loopOutputNumber = parsedNumber - i;
    let numStr = loopOutputNumber.toString();
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

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  



  window.addEventListener("submit", handleFormSubmission) {
    document.createElement("form");
   

  }






