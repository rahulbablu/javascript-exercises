const repeatString = function(str, num) {
    if(num > 0 ){
       return str.repeat(num);
    } else if(num == 0){
        return "";
    }else{
        return "ERROR"
    }
};

const number = Math.floor(Math.random() * 1000)

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey", number);
repeatString("", 10);




// Do not edit below this line
module.exports = repeatString;
