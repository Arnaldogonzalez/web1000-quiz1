2- Write a recursive function which receives an array and returns the sum of the elements of the array.

    function Sum(arr){
        var num = [];
        var result =
        if(var)
    }

3- Given two temperatures, return true if one is less than 0 and the other is greater than 100.
a.	icyHot(120, -1) → true
b.	icyHot(-1, 120) → true
c.	icyHot(2, 120) → false

function icyHot(a, b){
    if((a < 0 && b > 100) || (a > 100 && b < 0)) return true;
    return false;
}

4- Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
a.	makes10(9, 10) → true
b.	makes10(9, 9) → false
c.	makes10(1, 9) → true

function makes10(a, b){
    if((a === 10) || (b === 10) || a + b === 10 )return true;
    return false;
}

5- Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
a.	front22("kitten") → "kikittenki"
b.	front22("Ha") → "HaHaHa"
c.	front22("abc") → "ababcab"

function front22(string){
    "kitten".slice(string.length < 2)return 
}
