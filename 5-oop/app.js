'use strict';

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

const Ork = function(weapon) {
    this.weapon = weapon;
}

const Elf = function(weapon) {
    this.weapon = weapon;
}

Character.prototype.speak = function() {
    console.log(`Персонаж: ${this.name}, язык: ${this.language}`)
}

Ork.prototype.hit = function() {
    console.log('Удар!');
}

Elf.prototype.spell = function() {
    console.log('Заклинание!');
}

Elf.prototype.createSpell = function() {
    console.log('Создание заклинания!');
}

const pers1  = new Character('Орк', 'Юра', 'Оркский');
const pers2  = new Character('Чёрный Эльф', 'Настя', 'Эльфийский');

Ork.prototype.__proto__ = pers1;
Elf.prototype.__proto__ = pers2;

const ork = new Ork('Дубина');
const elf = new Elf('Волшебная палочка');

console.log('Ork:');
console.log(ork.name);
ork.speak();
console.log(ork.weapon);

console.log('Elf:');
console.log(elf.name);
elf.speak();
console.log(elf.weapon);




