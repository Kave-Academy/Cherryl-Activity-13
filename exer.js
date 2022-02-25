// function run(){
//     num = document.getElementById("number").value;
//     var Number = num;
//     var digits=0;

//     // Finding the number of digits
//     while(num > 0){
//     digits = digits + 1;
//     num = parseInt(num/10);
//     }
//     num = Number;
//     var sum = 0;

//     // calculating sum
//     while(num > 0) {
//     var digit = num%10;
//     sum = sum + Math.pow(digit, digits);
//     num = parseInt(num/10);
//     }

//     // checking sum with original number
//     if(sum == Number){
//     document.getElementById("result").style.color = "blue";
//     document.getElementById("result").innerHTML = "The number: " + Number + " is Armstrong Number";
//     }else{
//     document.getElementById("result").style.color = "red";
//     document.getElementById("result").innerHTML = "The number: " + Number + " is NOT Armstrong Number";
//     }
//     }


function run(){
    let num, sum, total = 0;
    let inputNumber = document.getElementById("number").value;
    let splitNumber = inputNumber.split("");
    num = inputNumber;

    while(num>0){
        sum = num % 10;
        num = parseInt(num/10);
        total =  total + (sum*sum*sum);
    }

    if (inputNumber == total){
        document.getElementById("result").innerHTML = "  " 
        + inputNumber + " is an Armstrong Number since " 
        + splitNumber[0] + "**3 + " + splitNumber[1] + "**3 + " + splitNumber[2] + "**3 = " + total + "!";
    }else {
        document.getElementById("result").innerHTML = " " 
        + inputNumber + " is NOT Armstrong Number since " 
        + splitNumber[0] + "**3 + " + splitNumber[1] + "**3 + " + splitNumber[2] + "**3 = " + total + "!";
    }
     
}