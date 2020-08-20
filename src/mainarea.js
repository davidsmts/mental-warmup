/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:15:17+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: mainarea.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-20T21:11:30+02:00
 */

const validate = (answer) => {
  let validateField = document.getElementById("validateField");
  let validateBut = document.getElementById("validateBut");
  validateField.style.display = "inline-block	";
  validateBut.style.display = "inline-block	";
  validateField.dataset.answer = answer;
}

const showPicture = () => {
  
}

module.exports = {
  validate
}
