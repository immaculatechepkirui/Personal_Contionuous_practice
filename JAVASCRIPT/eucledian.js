function gcd(num1, num2){
    if (num2 > num1){
        return num2
    } else {
        let divider = num2
        num2 = num1 % num2
        num1 = divider

        return num2 > 0
        
    };
};
console.log(gcd(45,9));


const greatedstDivisor = (a, b) =>{
        while(b != 0){
            let num1 = a;
            let num2 = b;
            let divider = num2;
            num2 = num1 % num2
            num1 = divider

        }
        return num1;
}
 console.log(greatedstDivisor(9, 45));
 



