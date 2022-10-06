const ftoc = function(temp) {
    let result = ((temp - 32)* (5/9));
    return Math.round(result*10 )/ 10;
};

const ctof = function(temp) {
  let result = ((temp * (9/5)) + 32);
  return Math.round(result * 10) / 10;
};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
