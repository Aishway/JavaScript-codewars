//Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

var summation = function (num) {
    let number = 0;
    let count = 1;

    while (count <= num) {
        number += count;
        count++;
    }
    return number;
}
