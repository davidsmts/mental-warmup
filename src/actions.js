/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:17:18+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: actions.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-18T17:52:53+02:00
 */

const helper = require('./helper')
const mainarea = require('./mainarea')


/*

*/
const generateNumberBut = document.getElementById("generateNumberBut");
generateNumberBut.addEventListener("click", () => {
  //
  let n = helper.generateRandomInt(2, 20);
  let digits = helper.generateRandomInt(1,3);
  var randomNumbers = [];
  for (var i=0; i<=n; i++) {
    var randomNumber = helper.generateRandomInt( 0 , Math.pow(10,digits) );
    randomNumbers.push( randomNumber );
  }
  //
  let outputLabel = document.getElementById("outputLabel")
  outputLabel.innerHTML = randomNumbers.join("  ");
  //
  setInterval(function(){
    outputLabel.innerHTML = "";
    mainarea.validate(randomNumbers.join(","))
  }, (n*700 + digits*1000) );
});


/*

*/
const generateSequenceBut = document.getElementById("generateSequenceBut");
generateSequenceBut.addEventListener("click", () => {
  // get random sequence
  let n = helper.generateRandomInt(2, 20);
  let randomSeq = helper.generateRandomSequence(n);
  // display random sequence
  let outputLabel = document.getElementById("outputLabel")
  outputLabel.innerHTML = randomSeq
  // hide random sequence
  setInterval(function(){
    outputLabel.innerHTML = "";
    mainarea.validate(randomSeq)
  }, (n*1000) );
});



/*

*/
const validateBut = document.getElementById("validateBut");
validateBut.addEventListener("click", () => {
  let validateField = document.getElementById("validateField");
  let inp = validateField.value;
  let answer = validateField.dataset.answer
  console.log(answer)
  console.log(inp)
  if (inp === answer) {
    validateField.style.background = "green";
  } else {
    validateField.style.background = "red";
  }
  outputLabel.innerHTML = (inp === answer);
})
