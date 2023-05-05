// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
result = '';
number = 19.5;

do {
    number += 0.5;
    result += number + ' ';
} while (number < 30) {
    console.log(result);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

oneDollar = 27;
multyNumber = 0;

do {
    multyNumber += 10;
    console.log(oneDollar * multyNumber);
} while (multyNumber <= 100);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

integer = +prompt('Please enter any integer from 1 to 100');
squareNumber = '';

do {
    squareNumber = integer * 2;
    integer++;
    console.log(squareNumber);
}
while (squareNumber <= integer);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

number = +prompt("Enter a positive number: ");
isPrime = true;
devider = 2;

if (number === 1) {
    console.log(`${number} is not prime.`);
} else if (number > 1) {

    while (devider < number) {
        if (number % devider == 0) {
            isPrime = false;
            break;
        }
        devider++
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not prime.`);
    }
}

else {
    console.log("The number is not prime.");
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

number = +prompt('Please enter any number to know if you can get the indices of 3');

while (number % 3 === 0) {
    number /= 3;
}
result = number === 1 ? 'You can get it' : 'You cannot get it';

console.log(result);