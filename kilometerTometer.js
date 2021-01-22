

function kilometerToMeter(num){

    var result = 0;

    if(num <= 0){
        return "distance cannot a negative"
    }
    else{
        result = num * 1000;
        return result;
    }

}
result = kilometerToMeter(10);
console.log(result);



//

// function hotelCost(day){
//     if(day <= 0){
//         return "digit cannot be negative"
//     }
//     else if(day <=10){
//         totalCost = day * 100;
//     }
//     else if(day <= 19){
//         var firstCost = 10 * 100;
//         var reminder = day - 10;
//         var secondCost = reminder * 80;
//         totalCost = firstCost + secondCost;
//     }
//     else{
//         firstCost = 10 * 100;
//         secondCost = 9 * 80;
//         reminder = day - 19;
//         var thirdCost = reminder * 50;
//         totalCost = firstCost + secondCost + thirdCost; 
//     }
//     return totalCost;


// }

// var totalCost = hotelCost(25);
// console.log(totalCost);