var watch, phone, laptop;

function budgetCalculator(watch, phone, laptop) {

    watch = watch * 50;
    phone = phone * 100;
    laptop = laptop * 500;

    var total = watch + phone + laptop;

    return total;
}

total = budgetCalculator(4, 2, 1);
console.log(total);
