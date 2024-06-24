'use strict';

const throwDice = (type) => {
    const numbers = new Set([4, 6 ,8 ,10, 12, 16, 20]);
    const number = type.split('d')[1];

    return numbers.has(Number(number)) ? Math.floor(Math.random() * number + 1) : 'Такого Дайса не существует!';
};

console.log(throwDice('d6'));