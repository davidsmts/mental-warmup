/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:17:18+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: actions.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-18T17:21:53+02:00
 */

const helper = require('./helper')

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
  }, (n*700 + digits*1000) );
});

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
  }, (n*1000) );

});
