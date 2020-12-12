### Kata: 
[Morse code decoder part-1/3](https://www.codewars.com/kata/54b724efac3d5402db00065e)
[Morse code decoder part-2/3](https://www.codewars.com/kata/decode-the-morse-code-advanced)

#### Description
Decode morse code into human redable English.

#### Task:

``` javascript
const MORSE_CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.----': 1,
  '..---': 2,
  '...--': 3,
  '....-': 4,
  '.....': 5,
  '-....': 6,
  '--...': 7,
  '---..': 8,
  '----.': 9,
  '-----': 0,
};

const decodeMorse = (morseCode) => 
  (morseCode.trim().split('   ')
  .map(w => w.split(' ').map(ch => MORSE_CODE[ch]).join(''))
  .join(' '));


const decodeBits = function (bits) {
  const newBits = bits.replace(/^0+/, '').replace(/0+$/, '');
  const possibleTimeUnits = Array.from(newBits.match(/0+|1+/g)).map(ar => ar.length);


  const unit = Math.min(...possibleTimeUnits);

  const dotRe = new RegExp(`1{${unit}}`, 'g');
  const dashRe = new RegExp(`1{${3 * unit}}`, 'g');
  const dotDashPauseRe = new RegExp(`0{${unit}}`, 'g');
  const charsPauseRe = new RegExp(`0{${3 * unit}}`, 'g');
  const wordsPauseRe = new RegExp(`0{${7 * unit}}`, 'g');

  return newBits.replace(wordsPauseRe, '   ')
    .replace(dashRe, '-')
    .replace(charsPauseRe, ' ')
    .replace(dotRe, '.')
    .replace(dotDashPauseRe, '');
}

const assert = require('assert').strict;

assert.equal(decodeMorse(decodeBits(
  '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')),
  'HEY JUDE');
assert.equal(decodeMorse(decodeBits('1110111')), 'M');
```
