'use strict';

const throwDice = (type) => Math.floor(Math.random() * type.split('d')[1] + 1);

console.log(throwDice('d6'));