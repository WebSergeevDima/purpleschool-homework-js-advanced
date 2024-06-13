const obj = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Путя'},
    {id: 1, name: 'Вася'}
];

const cleanObject = (obj) => {
    const verification = new Set();

    const newObj = obj.filter(item => {
        if(verification.has(item.id)) {
            return false;
        }

        verification.add(item.id);
        return true;
    });

    return newObj;
}

console.log(cleanObject(obj))

