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
  return Math.random() * max;
}
console.log(getRandomValue(10));
console.log(getRandomValue(100));

/* ------------------------------------------------------*/

console.log(
  "8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau."
);
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
 * covert time to minutes
 * @param {number} minute
 * @returns {number} result
 */
function convertTime(minute) {
  const hours = Math.floor(minute / 60);

  const minutesLeft = minute % 60;

  return `${hours} heures et ${minutesLeft} minutes`;
}

const durationInMinute = 150;
console.log(convertTime(durationInMinute));

/* ------------------------------------------------------*/

console.log(
  "10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau."
);

function GetMinValue(array) {
  let arrayMin = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < arrayMin) {
      arrayMin = array[i];
    }
  }

  return arrayMin;
}

const boardMin = [78, 56, 26, 84, 74];
console.log("La valeur minimale du tableau est :", GetMinValue(boardMin));

/* ------------------------------------------------------*/

console.log(
  "11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale ."
);


function getMaxKeyValue(object) {
    
    
}
const objectValues = { pierre: 22, jeanne: 36, aïda: 42, esmée: 53 };

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau."
);

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "13/ Implémentez une fonction qui retourne le nombre de mots dans un texte."
);

console.log();
console.log();
