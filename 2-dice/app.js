'use strict';

const throwDice = (type) => {
    const getRandomNumber = (number) => Math.floor(Math.random() * number + 1);

    const dices = {
        'd4': getRandomNumber(4),
        'd6': getRandomNumber(6),
        'd8': getRandomNumber(8),
        'd10': getRandomNumber(10),
        'd12': getRandomNumber(12),
        'd16': getRandomNumber(16),
        'd20': getRandomNumber(20),
    }

    if(dices.hasOwnProperty(type)) {
        return dices[type];
    }

    return 'Такого Дайса не существует!';
};

console.log(throwDice('d6'));