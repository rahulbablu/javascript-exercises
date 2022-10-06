const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let result;
    if(num > 0){
        for(let i = 1; i < num; i++){
            result = num1 + num2;
            num1 = num2;
            num2 = result;
        } return num2;
    }else{
        return "OOPS";
    }
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
