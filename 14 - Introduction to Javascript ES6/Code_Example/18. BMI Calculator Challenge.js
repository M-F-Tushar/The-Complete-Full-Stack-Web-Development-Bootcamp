function bmiCalculator(weight, height) 
{
    var bmi = weight / (height * height);
    return bmi;
}

var bmi = bmiCalculator(85, 1.7272);
console.log(bmi); // Outputs: 28.48730266316457