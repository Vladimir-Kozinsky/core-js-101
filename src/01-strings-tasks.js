/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const arrStr = value.split(' ').splice(1, 2);
  const correctArr = arrStr.map((str) => {
    let res = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char !== '!') {
        res += char;
      }
    }
    return res;
  });
  return `${correctArr[0]} ${correctArr[1]}`;
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const str = value.replace(/\t/, ' ');
  // eslint-disable-next-line no-plusplus, no-shadow
  function delSpaceInBeginStr(str) {
    if (str[0] === ' ') {
      return delSpaceInBeginStr(str.split('').splice(1, str.length).join(''));
    }
    return str;
  }

  // eslint-disable-next-line no-shadow
  function delSpaceInEndStr(str) {
    if (str[str.length - 1] === ' ') {
      return delSpaceInEndStr(str.split('').splice(0, str.length - 1).join(''));
    }
    return str;
  }

  return delSpaceInEndStr(delSpaceInBeginStr(str));
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  let resStr = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    resStr += value;
  }
  return resStr;
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  const strArr = str.split('');
  strArr.splice(index, value.length);
  return strArr.join('');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  let resStr = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== '<' && char !== '>') {
      resStr += char;
    }
  }
  return resStr;
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let restr = '';
  // debugger
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < height; i++) {
    // eslint-disable-next-line no-plusplus
    for (let n = 0; n < width; n++) {
      if (n === 0 && i === 0) {
        restr += '┌';
      } else if (i === 0 && n === width - 1) {
        restr += '┐\n';
      } else if (i !== 0 && i !== height - 1 && n === 0) {
        restr += '│';
      } else if (i !== 0 && i !== height - 1 && n === width - 1) {
        restr += '│\n';
      } else if (i !== 0 && i !== height - 1 && n !== 0 && n !== width - 1) {
        restr += ' ';
      } else if ((i === 0 && n !== 0 && n !== width - 1)
        || (i === width - 1 && n !== 0 && n !== width - 1)) {
        restr += '─';
      } else if (i === height - 1 && n === 0) {
        restr += '└';
      } else if (height - 1 && n === width - 1) {
        restr += '┘\n';
      } else if (height - 1 || i === width - 1) {
        restr += '─';
      }
    }
  }
  return restr;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  let strRes = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-inner-declarations
    function getCode(char) {
      const code = char.codePointAt(0);
      if (code > 64 && code < 91) {
        if (code + 13 > 90) return code + 13 - 26;
        return code + 13;
      } if (code > 96 && code < 123) {
        if (code + 13 > 122) return code + 13 - 26;
        return code + 13;
      }
      return code;
    }
    const char = str[i];
    const code = getCode(char);
    strRes += String.fromCodePoint(code);
  }
  return strRes;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === 'string') return true;
  if (typeof value === 'object') {
    if (value instanceof String) {
      return true;
    }
  }

  return false;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */

// eslint-disable-next-line consistent-return
function getCardId(value) {
  const cardValue = (value.length === 3) ? value.split('')[0] + value.split('')[1] : value.split('')[0];
  const cardSuit = (value.length === 3) ? value.split('')[2] : value.split('')[1];
  // eslint-disable-next-line consistent-return, no-shadow
  function getIndex(cardValue) {
    switch (cardValue) {
      case 'A':
        return 0;
      case '2':
        return 1;
      case '3':
        return 2;
      case '4':
        return 3;
      case '5':
        return 4;
      case '6':
        return 5;
      case '7':
        return 6;
      case '8':
        return 7;
      case '9':
        return 8;
      case '10':
        return 9;
      case 'J':
        return 10;
      case 'Q':
        return 11;
      case 'K':
        return 12;
      default:
        break;
    }
  }
  switch (cardSuit) {
    case '♣':
      return getIndex(cardValue);
    case '♦':
      return getIndex(cardValue) + 13;
    case '♥':
      return getIndex(cardValue) + 26;
    case '♠':
      return getIndex(cardValue) + 39;
    default:
      break;
  }
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
