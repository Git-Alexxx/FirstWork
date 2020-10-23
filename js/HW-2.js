//Task1
// const bank = 16;
// const len = prompt('Введите длину');
// const width = prompt('Введите длину');
// const height = prompt('Введите длину');

// const volume = len * width * height;
// const area = volume / height;
// const countOfBanks = area / bank;

// if((len || width || height) > 1000){
//     alert('Ошибка');
// }
// else{
//     alert(`Кол-во банок с краской = ${countOfBanks}`);
// }






//Task2
const a1 = +prompt('За сколько вы хотите продать один кг черного песка');
const a2 = +prompt('За сколько вы хотите продать один кг белого песка');
const a3 = +prompt('За сколько вы хотите продать один кг красного песка');
const b1 = +prompt('На сколько кг расчитана первая емкость?');
const b2 = +prompt('На сколько кг расчитана вторая емкость?');
const b3 = +prompt('На сколько кг расчитана третья емкость?');

let arr1 = [a1, a2, a3];
let arr2 = [b1, b2, b3];

// alert(Math.max.apply(null, arr1));

let f = function(arr1, arr2){

}

arr1.sort(function(a,b){return a - b});
arr2.sort(function(a,b){return a - b});

console.log();

// const price = (a1 * b1) + (a2 * b2) + (a3 * b3);

// if((a1 || a2 || a3 ||b1 || b2 || b3) > 100){
//     alert('Перебор');
// }else{
//     alert(`Максимальное кол-во рублей = ${price}`);
// }


