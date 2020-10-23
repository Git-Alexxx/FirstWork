// Task1
// const arr1 = [6, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9];
// const arr3 = [20, 21, 34, 56, 100];

// const doubleArr = [arr1, arr2, arr3];

// function getAvgValue (doubleArr){
//     let min1 = arr1[0];
//     let min2 = arr2[0];
//     let min3 = arr3[0];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             for (let u = 0; u < arr3.length; u++) {
//                 if (min1 > arr1[i]) min1 = arr1[i];
//                 if (min2 > arr2[j]) min2 = arr2[j];
//                 if (min3 > arr3[u]) min3 = arr3[u];
//             }
//         }
//     }
//     return min1 + min2 + min3;
// }

// console.log(getAvgValue(doubleArr));



// Task2
// const arr = [1, 2, 10, 8];
// arr.sort(function(a, b){return b - a});
// console.log(arr.slice([0],[2]));



//Task3
// const str1 = "Hic tempore quae illo quisquam voluptates minus";
// const str2 = "Consectetur sed, i rerum dignissimos mollitia";
// const str3 = "Maxime blanditiis at dolorum ispum";

// function shortestWord(str) {
//   return (str.split(' ').reduce((firstWord, secondWord) => firstWord.length <= secondWord.length ? firstWord : secondWord)).length;
// }

// console.log(shortestWord(str1));
