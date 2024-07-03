'use strict';

const throwDice = (type) => {
    const getRandomNumber = (number) => Math.floor(Math.random() * number + 1);

    const dices = {
        'd4': 4,
        'd6': 6,
        'd8': 8,
        'd10': 10,
        'd12': 12,
        'd16': 16,
        'd20': 20,
    }

    if (dices.hasOwnProperty(type)) {
        return getRandomNumber(dices[type]);
    }

    return 'Такого Дайса не существует!';
};

console.log(throwDice('d6'));