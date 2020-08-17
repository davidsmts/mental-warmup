/**
 * @Author: David Schmotz <David>
 * @Date:   2020-08-17T20:19:48+02:00
 * @Email:  davidschmotz@gmail.com
 * @Filename: helper.js
 * @Last modified by:   David
 * @Last modified time: 2020-08-17T20:33:45+02:00
 */


const generateRandomInt = (from, to) => {
  return from + Math.floor(Math.random() * to);
}


module.exports = {
  generateRandomInt
}
