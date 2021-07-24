const passwordGeneratorBtn = document.querySelector("#password-generator");
const generatedPasswordInput = document.querySelector("#generated-password");
const copyIcon = document.querySelector("#copy");

const generateRandomIndex = (arrayLength) =>
  Math.floor(Math.random() * arrayLength);

const passwordGenerator = (passwordLength) => {
  // let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  // let uppercaseLetters = lowercaseLetters.toUpperCase();
  // let specialChars = "@$%&*^!.";
  // let numbers = "0123456789";

  // let lowercaseLettersArray = lowercaseLetters.split("");
  // let uppercaseLettersArray = uppercaseLetters.split("");
  // let specialCharsArray = specialChars.split("");
  // let numbersArray = numbers.split("");

  let allCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "@",
    "$",
    "%",
    "&",
    "*",
    "^",
    "!",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let password = "";
  let arrayLength = allCharacters.length;

  for (let i = 0; i < passwordLength; i++) {
    password += allCharacters[generateRandomIndex(arrayLength)];
  }

  return password;
};

passwordGeneratorBtn.addEventListener("click", () => {
  generatedPasswordInput.value = passwordGenerator(7);
});

copyIcon.addEventListener("click", () => {
  let password = generatedPasswordInput;

  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");
});
