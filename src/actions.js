/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:17:18+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: actions.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-17T20:37:35+02:00
 */

const helper = require('./helper')

const generateBut = document.getElementById("generate_but");
generateBut.addEventListener("click", () => {
  let n = helper.generateRandomInt(2, 20);
  let digits = helper.generateRandomInt(1,3);
  var randomNumbers = [];
  for (var i=0; i<=n; i++) {
    var randomNumber = helper.generateRandomInt( 0 , Math.pow(10,digits) );
    randomNumbers.push( randomNumber );
  }

  console.log(randomNumbers)
});
