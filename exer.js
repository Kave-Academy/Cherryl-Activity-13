
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