function getMilk(money) {
    var costPerBottle = 1.5;
    var numberOfBottles = Math.floor(money / costPerBottle);
    
    console.log("leaveHouse");
    // ... movement instructions
    console.log("buy " + numberOfBottles + " bottles of milk");
    // ... return instructions
}

getMilk(5); // With $5, can buy 3 bottles (Math.floor(5/1.5) = 3)