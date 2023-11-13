/*  This program requires the PJS library.
    This program is hosted at: https://www.khanacademy.org/computer-programming/deviation/6489771231723520
    I made this program as a project for myself becuase I was learning standard deviation in math and calculating it manually would have taken way to long and been way to innacurite.
    This program shows that I understand debugging, the best practice of using code commends, the concept of a code library, arrays, for loops, and other miscelanous comands.

*/









//Set the fill to black (I was printing arrays as I debugged)
fill(0, 0, 0);

//Collect the numbers and add them together
var numbers = [ 17, 86, 50, 1, 63, 84, 52, 5, 13, 74, 18, 42 ];
var length = numbers.length;
var total=0;
for (var i = 0; i < numbers.length; i++) {
    total = (total + numbers[i]);
}

//Calculate the average of the starting numbers
var average= total/length;

//Make an array of the deviations between the average each number
var deviations = [];
for (var j = 0; j < numbers.length; j++) {
    deviations.push(numbers[j]-average);
    text (deviations[j], 50, j*28);
}

//Square each of the deviations and store them in a new array
var squaredDeviations= [];
for (var k = 0; k < numbers.length; k++) {
    squaredDeviations.push(sq(deviations[k]));
    text (squaredDeviations[k], 130, k*28);
}

//Add up all the squared deviations
var totalDeviation=0;
for (var l = 0; l < squaredDeviations.length; l++) {
    totalDeviation = (totalDeviation + squaredDeviations[l]);
}

//Calculate the average of the squared deviations
var averageDeviation=totalDeviation/squaredDeviations.length;

//Take the square root of the average of the squared deviations in order to get the final answer
var standardDeviation= sqrt(averageDeviation);

//Print the answer using println
println("The standard deviation is: " + standardDeviation);
