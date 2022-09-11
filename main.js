
function oddishOrEvenish(){
    let number = parseInt(document.getElementById("number").value);
    let result = 0;
    while(number > 0){
        result += number % 10;
        number = (number - (number % 10)) / 10;
    }
    console.log("result : ", result);
    let oddOrEven = result % 2 === 1 ? "Odd" : "Even"
    document.getElementById("sonuc").innerHTML = oddOrEven;
    console.log(oddOrEven)
}
