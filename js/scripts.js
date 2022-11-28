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

  outputArray.reverse();
  return outputArray;
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let numInput = document.querySelector("input#enterNumber").value;
  let numOutput = returnRangeFromInput(numInput);
  document.getElementById("outputSpan").innerText = numOutput;
  document.getElementById("robocounter").reset();
  }


window.addEventListener("load", function() {
  document.querySelector("form#robocounter").addEventListener("submit", handleFormSubmission);
});

