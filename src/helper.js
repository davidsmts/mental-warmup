/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:19:48+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: helper.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-18T17:23:29+02:00
 */


const generateRandomInt = (from, to) => {
  return from + Math.floor(Math.random() * to);
}

const generateRandomSequence = (len) => {
  var result           = '';
  var chars       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charsLength = chars.length;
  for ( var i = 0; i < len; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}

module.exports = {
  generateRandomInt,
  generateRandomSequence
}
