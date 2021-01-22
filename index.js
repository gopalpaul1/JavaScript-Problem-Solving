
// Kilometer To Meter Conversion...
function kilometerToMeter(num){
    
    var result = 0;

    if(num <= 0){
        return "distance cannot a negative";
    }
    else{
        result = num * 1000;
        return result;
    }

}

result = kilometerToMeter(10);
console.log(result);



// Buget Calculator with watch, phone and laptop...

function budgetCalculator(watch, phone, laptop) {

    var watch, phone, laptop;

    watch = watch * 50;
    phone = phone * 100;
    laptop = laptop * 500;

    var total = watch + phone + laptop;

    return total;
}

total = budgetCalculator(4, 2, 1);
console.log(total);



// Hotel Cost with How many days spent in hotel...

function hotelCost(day){

    if(day <= 0){
        return "day cannot be negative"
    }
    else if(day <=10){
        totalCost = day * 100;
    }
    else if(day <= 19){
        var firstCost = 10 * 100;
        var reminder = day - 10;
        var secondCost = reminder * 80;
        totalCost = firstCost + secondCost;
    }
    else{
        firstCost = 10 * 100;
        secondCost = 9 * 80;
        reminder = day - 19;
        var thirdCost = reminder * 50;
        totalCost = firstCost + secondCost + thirdCost; 
    }
    return totalCost;

}

var totalCost = hotelCost(25);
console.log(totalCost);



// Mega Name with Array Name...

function megaFriend(array){

    var length = 0;
    
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            var length = array[i].length;
            var max = array[i]; 
        }
    }
    return max;
}

max = megaFriend(['gopal paul', 'pritom', 'sumon']);
console.log(max);