let myarr = [1,2,3,4,5,6]

function sumfac(number){
    let sum = 0
    for(let i = 0 ; i < number.length ; i++){
     sum = sum + number[i]
    }
    return sum
}

let sum1 = sumfac(myarr)
console.log(sum1);
