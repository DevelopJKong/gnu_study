const range = document.getElementById("js-range");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");


function controllGuessSubmit(event) {
  event.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "") {
    return;
  }
  const max = range.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", controllGuessSubmit);


// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");
// 
// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "" && maxNumber === "") {
//     return;
//   }
//   const max = maxNumber.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }
// 
// guessForm.addEventListener("submit", handleGuessSubmit);
