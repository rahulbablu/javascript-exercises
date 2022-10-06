const palindromes = function (str) {
    let brokenStr = str.toLowerCase().replace(/[^a-z]/g, "");
    return (brokenStr == brokenStr.split("").reverse().join(""));
};

palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
