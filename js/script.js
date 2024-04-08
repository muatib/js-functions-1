// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log(
  "1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres."
);
/**
 * Get the sum of elements
 * @param {number} a
 * @param {number} b
 * @returns {number} result
 */
function getTotalAmount(a, b) {
  return a + b;
}
console.log(getTotalAmount(5, 8));
console.log(getTotalAmount(10, 23));

/* ------------------------------------------------------*/

console.log(
  "2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre."
);
/**
 * Get the smallest value
 * @param {number} a
 * @param {number} b
 * @returns {number} result
 */
function getSmallest(a, b) {
  return Math.min(a, b);
  //   if (a > b) {
  //     return a;
  //   } else {
  //     return b;
  //   }
  //   return a < b ? a : b;
}
console.log(getSmallest(25, 78));
console.log(getSmallest(36, 21));

console.log(
  "3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau."
);
/**
 * Get the last value of array
 * @param {array} myBoard
 * @returns {*} Last value
 */
function getLastBoardElement(myBoard) {
  return myBoard[myBoard.length - 1];
}

const boardOne = [45, 56, 89, 32];
const boardTwo = ["Jack", "Marie", "Momo", "Priscilla"];

console.log(getLastBoardElement(boardOne));
console.log(getLastBoardElement(boardTwo));

/* ------------------------------------------------------*/

console.log(
  "4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation."
);
/**
 * Get value of increase percent
 * @param {number} percent
 * @returns
 */
function getIncreasePercent(percent) {
  return +percent / 100;
}
console.log(getIncreasePercent(15));
console.log(getIncreasePercent(21));

/* ------------------------------------------------------*/

console.log(
  "5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs."
);
/**
 * Get the max value
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
function getMaxValue(a, b, c) {
  return Math.max(a, b, c);
}
console.log(getMaxValue(45, 56, 98));
console.log(getMaxValue(69, 32, 41));

/* ------------------------------------------------------*/

console.log(
  "6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau."
);
/**
 * calculate the array sum
 * @param {number} array
 * @returns {number} result
 */
function getArraySum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const arrayOne = [28, 34, 52, 26, 15];
console.log(getArraySum(arrayOne));

/* ------------------------------------------------------*/

console.log(
  "7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre."
);

/**
 * get random value from a number range
 * @param {number} max
 * @returns {number} result
 */
function getRandomValue(max) {
  return Math.floor(Math.random() * (max + 1));
}
console.log(getRandomValue(10));
console.log(getRandomValue(100));

/* ------------------------------------------------------*/

console.log(
  "8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau."
);
/**
 * calculate average array sum
 * @param {number} array
 * @returns {number} result
 */
function totalAverageBoard(array) {
  let sum = 0;

  for (const i = 0; i < array.length; i++) {
    sum += array[i];
    let average = sum / array.length;
    return average;
  }
}

const boardValues = [56, 96, 78, 23, 45];
console.log(totalAverageBoard(boardValues));
console.log();

/* ------------------------------------------------------*/

console.log(
  "9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes."
);
/**
 * convert time to minutes
 * @param {number} minute
 * @returns {number} time in minutes
 */
function convertTime(minute) {
  const hours = Math.floor(minute / 60);

  minute %= 60;

  return `${hours} heures et ${minute} minutes`;
}

// const durationInMinute = 150;
console.log(convertTime(180));
console.log(convertTime(240));


//function convertTime (minutes){
//   return {
//     hours: Math.florr(minute / 60),
//     minute: minute % 60
//   };
// }
/* ------------------------------------------------------*/

console.log(
  "10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau."
);
/**
 * Get min value form an array
 * @param {number} array
 * @returns {number} min value of the array
 */
function getMinValue(array) {
  // let arrayMin = array[0];

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < arrayMin) {
  //     arrayMin = array[i];
  //   }
  // }

  return Math.min(...array);
}

// const boardMin = [78, 56, 26, 84, 74];
console.log(
  "La valeur minimale du tableau est :",
  getMinValue([78, 56, 26, 84, 74])
);

/* ------------------------------------------------------*/

console.log(
  "11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale ."
);

/**
 * get the object key with max value
 * @param {string} object
 * @returns {string} key with the max value
 */
function getMaxKeyValue(object) {
  let ojectValueMax = Math.max(...Object.values(object));
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key] === ojectValueMax) {
      return key;
    }
  }
}
// let objectValues = { pierre: 22, jeanne: 36, aïda: 42, esmée: 53 };
let maxKey = getMaxKeyValue({ pierre: 22, jeanne: 36, aïda: 42, esmée: 53 });

console.log(maxKey);

/* ------------------------------------------------------*/

console.log(
  "12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau."
);

/**
 * Get a random value from an array
 * @param {array} board
 * @returns {number} random value from array
 */
function boardRandomValue(board) {
  const randomIndex = getRandomValue(board.length -1);
  return board[randomIndex];
}

const value = boardRandomValue([1, 2, 3, 4, 5]);
console.log("valeur aléatoire dans le tableau:", value);

/* ------------------------------------------------------*/

console.log(
  "13/ Implémentez une fonction qui retourne le nombre de mots dans un texte."
);
/**
 *  number of words in a sentence
 * @param {string} text
 * @returns {number} number of words in the sentence
 */
function CountnumberOfWords(text) {
  const textWithoutPunctuation = text.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
    ""
  );

  const words = textWithoutPunctuation.split(/\s+/);

  return words.length;
}

const text = "Ceci est un exemple de text. Il contient plusieurs words.";
const numberOfWordsInText = CountnumberOfWords(text);
console.log("Nombre de words dans le text:", numberOfWordsInText);

//OU

function numberOfWords(text) {
  let numberOfWords = 0;
  let inWord = false;

  for (let i = 0; i < text.length; i++) {
    const caractere = text[i];

    if (
      (caractere >= "a" && caractere <= "z") ||
      (caractere >= "A" && caractere <= "Z") ||
      (caractere >= "0" && caractere <= "9") ||
      caractere === "'"
    ) {
      inWord = true;
    } else {
      if (inWord) {
        numberOfWords++;
        inWord = false;
      }
    }
  }

  if (inWord) {
    numberOfWords++;
  }

  return numberOfWords;
}

const sentence = "Ceci est un exemple de texte. Il contient plusieurs mots.";
const numbnerOfWordsInText = numberOfWords(sentence);
console.log("Nombre de mots dans le texte:", numberOfWordsInText);
