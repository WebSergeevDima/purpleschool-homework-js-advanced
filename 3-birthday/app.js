function is18(date) {
    const now = new Date();
    const userDate = new Date(date);
    const year = now.getFullYear() - userDate.getFullYear();

    if (year < 18) {
        return false;
    } else if(year === 18 && userDate.getMonth() < now.getMonth()) {
        return false;
    } else if(year === 18 && userDate.getDate() < now.getDate()) {
        return false;
    }

    return true;
}


console.log(is18('2022-01-01'));
console.log(is18('1992-09-09'));