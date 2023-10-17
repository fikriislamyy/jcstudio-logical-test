function filterInputCharacters(inputElement) {
  const inputValue = inputElement.value;

  // Use a regular expression to filter out non-word characters
  const filteredValue = inputValue.replace(/[^a-zA-Z\s]/g, "");

  // Update the input value to contain only letters
  inputElement.value = filteredValue;
}

function filterInputNumbers(inputElement) {
  const inputValue = inputElement.value;

  const filteredValue = inputValue.replace(/[^0-9]/g, "");

  inputElement.value = filteredValue;
}

//Test 1//
function evenOddNumbers() {
  const inputElement = document.getElementById("test1");

  const output1 = [];
  const output2 = [];
  const x = inputElement.value;

  if (x >= 0 && x <= 100) {
    document.getElementById("warn").innerHTML = "";
    for (let i = 1; i <= x; i++) {
      if (i % 2 === 0) {
        output2.push(i);
      }
      if (i % 2 === 1) {
        output1.push(i);
      }
    }

    document.getElementById(
      "oddOutput"
    ).innerHTML = `List of odd numbers less than or equal to ${x}: ${output1.join(
      " "
    )}`;
    document.getElementById(
      "evenOutput"
    ).innerHTML = `List of even numbers less than or equal to ${x}: ${output2.join(
      " "
    )}`;
  } else {
    document.getElementById("warn").innerHTML =
      "Please enter a positive number and less than or equal to 100";
  }
}
// Test 2

function sortCharacters() {
  const inputElement = document.getElementById("test2");
  let vowels = "";
  let consonants = "";
  const x = inputElement.value;

  for (let i = 0; i < x.length; i++) {
    const letter = x[i].toLowerCase();
    if ("aeiou".includes(letter)) {
      vowels += letter;
    } else if (/[a-z]/.test(letter)) {
      consonants += letter;
    }
  }

  document.getElementById("vowels").innerHTML = `Vowel characters: ${vowels
    .split("")
    .sort()
    .join("")}`;
  document.getElementById(
    "consonants"
  ).innerHTML = `Consonant characters: ${consonants.split("").sort().join("")}`;
}

// Test 3
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

const generatePrime = (num) => {
  const result = [];
  let i = 10;
  while (result.length < num) {
    if (isPrime(i) && isPrime(reverseNumber(i))) {
      result.push(i);
    }
    i = i === 10 ? i + 1 : i + 2;
  }
  return result;
};

function reverseNumber(n) {
  return parseInt(n.toString().split("").reverse().join(""));
}

function matchNumbers() {
  const inputElement = document.getElementById("test3");
  const x = parseInt(inputElement.value);
  const result = generatePrime(x);
  const matchOutput = document.querySelector("#matchOutput");
  const clearButton = document.querySelector("#clearMatch");
  const submitButton = document.querySelector("#submitMatch");

  while (matchOutput.firstChild) {
    matchOutput.removeChild(matchOutput.firstChild);
    clearButton.classList.add("d-none");
    submitButton.removeAttribute("disabled");
  }

  if (x > 100) {
    document.querySelector("#matchOutput").innerHTML =
      "Please enter a number less than or equal to 100";
  } else {
    for (let i = 0; i < result.length; i++) {
      const number = result[i];
      const reverse = reverseNumber(number);
      const list = document.createElement("li");

      list.innerText = `${number} and ${reverse} are Match`;
      matchOutput.appendChild(list);
    }
  }

  if (matchOutput.hasChildNodes()) {
    clearButton.classList.remove("d-none");
    submitButton.setAttribute("disabled", "");
  }
}

function clearMatch() {
  const matchOutput = document.querySelector("#matchOutput");
  const clearButton = document.querySelector("#clearMatch");
  const submitButton = document.querySelector("#submitMatch");

  while (matchOutput.firstChild) {
    matchOutput.removeChild(matchOutput.firstChild);
    clearButton.classList.add("d-none");
    submitButton.removeAttribute("disabled");
  }
}

// Test 4
const isTheOne = (num) => {
  let m, n;
  let c = [];

  while (num !== 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m;
  }
  return num === 1;
};

function theOne() {
  const inputElement = document.getElementById("test4");
  let x = parseInt(inputElement.value);
  let num = 100;
  let result = [];
  const theOneOutput = document.querySelector("#theOneOutput");
  const clearButton = document.querySelector("#clearTheOne");
  const submitButton = document.querySelector("#submitTheOne");

  while (x-- > 0) {
    while (!isTheOne(num)) num++;
    if (isTheOne(num)) {
      result.push(num);
      num++;
    }
  }

  while (theOneOutput.firstChild) {
    theOneOutput.removeChild(theOneOutput.firstChild);
    clearButton.classList.add("d-none");
    submitButton.removeAttribute("disabled");
  }

  if (x > 100) {
    theOneOutput.innerHTML = "Please enter a number less than or equal to 100";
  } else {
    for (let i = 0; i < result.length; i++) {
      const list = document.createElement("li");
      list.innerText = `${result[i]} is TheOne Number`;
      theOneOutput.appendChild(list);
    }
  }

  if (theOneOutput.hasChildNodes()) {
    clearButton.classList.remove("d-none");
    submitButton.setAttribute("disabled", "");
  }
}

function clearTheOne() {
  const theOneOutput = document.querySelector("#theOneOutput");
  const clearButton = document.querySelector("#clearTheOne");
  const submitButton = document.querySelector("#submitTheOne");

  while (theOneOutput.firstChild) {
    theOneOutput.removeChild(theOneOutput.firstChild);
    clearButton.classList.add("d-none");
    submitButton.removeAttribute("disabled");
  }
}

// Test 5
function findLargestW(numbers) {
  numbers.sort((a, b) => a - b);
  let largestW = 0;

  for (let number of numbers) {
    if (number <= largestW + 1) {
      largestW += number;
    } else {
      break;
    }
  }

  return largestW;
}
let length = document.querySelector("#inputLength").value;
let numbers = [];
const largestW = findLargestW(numbers);

document.getElementById("openModalBtn").addEventListener("click", function () {
  $("#inputModal").modal("show");
});

// Handle the calculation when the "Calculate" button in the modal is clicked
document.getElementById("calculateBtn").addEventListener("click", function () {
  var length = parseInt(document.getElementById("inputLength").value);
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbers = inputNumbers.split(" ").map(Number);

  if (numbers.length !== length) {
    alert("Please enter the correct number of numbers.");
  } else {
    var largestW = findLargestW(numbers);
    document.querySelector("#biggestWInput1").innerHTML =
      "Length of numbers : " + length;
    document.querySelector("#biggestWInput2").innerHTML =
      "Numbers : " + inputNumbers;
    document.querySelector("#biggestWOutput").innerHTML =
      "The largest W value is " + largestW;
    $("#inputModal").modal("hide");
  }
});
