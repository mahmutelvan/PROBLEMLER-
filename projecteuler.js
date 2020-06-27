// PROJECT EULER SORULARI


// PROBLEM 5 Smallest multiple

// const soru = function(n){
//     const mults =[];
//     for(let i=1;i<=n; i++){
//         let newMult =i;
//         mults.forEach(function(mult){
//             if(newMult % mult==0){
//                 newMult /= mult;
//             }            
//         })
//         mults.push(newMult);
//     }
//     return mults.reduce((product =1, mult)=>product *=mult);
// }
// console.log(soru(20))

// PROBLEM 25 	1000-digit Fibonacci number

// function* fib(){
//     var last= BigInt(1);
//     var current= BigInt(1);
//     yield last ;
//     yield current;
//     while(true){
//         current += last;
//         last= current - last;
//         yield current;

//     }
// }
// function fibo(){
//     var i=1;
//     for(const n of fib()){
//         if(n.toString().length === 1000){
//             console.log(i);
//             break;
//         }
//         i++
//     }
    
// }
// fibo();

//PROBLEM 35 Circular primes

// var prime = {};
// prime.isPrime = function(num) {
//     num = (num > 0) ? num : num * -1;
//     return factors.getFactors(num).length <= 2;
// }; 
// var factors = {};
// factors.getFactors = function(number) {
//     var factors = [];

//     var possibleFactor = 1;
//     var sqrt = Math.sqrt(number);
//     while (possibleFactor <= sqrt) {
//         if (number % possibleFactor == 0) {
//             factors[factors.length] = possibleFactor;

//             var otherPossibleFactor = number / possibleFactor;
//             if (otherPossibleFactor > possibleFactor) {
//                 factors[factors.length] = otherPossibleFactor;
//             }
//         }
//         possibleFactor++;
//     }

//     return factors;
// }; 
// var bigNumber = {};
// bigNumber.createFromNumber = function(number) {
//     var bigNum = [number];
//     bigNumber.rebalanceDigitArray(bigNum);
//     return bigNum;
// };
// bigNumber.rebalanceDigitArray = function(digits, index) {
//     index = index || 0;
//     var digit = digits[index];
//     while (digit > 9) {
        
//         digits[index] = digit % 10;

        
//         index++;
//         digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
//     }
// }; 

// var getCircularPrimes = function(numDigits) {
//     var circularPrimes;
//     if (numDigits < 1) {
//         circularPrimes = {};
//     } else if (numDigits == 1) {
//         circularPrimes = {
//             '2': true,
//             '3': true,
//             '5': true,
//             '7': true
//         };
//     } else {
//         var circularPrimes = getCircularPrimes(numDigits - 1);

//         var digits = [];
//         for (var i = 0; i < numDigits; i++) {
//             digits[i] = 1;
//         }

//         var continueLoop = true;
//         while (continueLoop) {
//             var combination, combinations = getCombinations(digits);
//             var circularPrime = true;

//             for (var i = 0; i < combinations.length; i++) {
//                 if (!prime.isPrime(combinations[i])) {
//                     circularPrime = false;
//                 }
//             }

//             if (circularPrime) {
//                 for (var i = 0, combination; combination = combinations[i]; i++) {
//                     circularPrimes['' + combination] = true;
//                 }
//             }

          
//             var digit = numDigits - 1;
//             var digitLoop = true;
//             while (digitLoop) {
//                 digitLoop = false;

//                 if (digits[digit] == 9) {
//                     digits[digit] = 0;
//                     digit--;
//                     digitLoop = true;
//                 } else {
//                     digits[digit]++
//                 }
//             }


//             digits[digit] = (digits[digit] + 1) % 10;
//             while (digits[digit] == 0 && digit >= 0) {
//                 digits[digit]++;
//                 digit--;
//             }


//             var digit = 0;
//             while ((digits[digit] == 9) && (digit < numDigits)) {
//                 if (digit == numDigits - 1) {
//                     continueLoop = false;
//                 }
//                 digit++;
//             }
//         }
//     }

//     return circularPrimes;
// };

// var getCombinations = function(digits) {
//     var combinations = [];

//     var length = digits.length;

//     for (var shift = 0; shift < length; shift++) {

//         var num = 0;
//         for (var i = 0; i < length; i++) {
//             num += digits[i] * Math.pow(10, (length - 1 - i + shift) % length);
//         }
//         combinations.push(num);
//     }
//     return combinations;
// };

// var twoDigitCircularPrimes = getCircularPrimes(2);
// console.log(twoDigitCircularPrimes);

//         var size = 0;
// for (var key in twoDigitCircularPrimes) {
//     if (twoDigitCircularPrimes[key]){
//         size++;
//     }
// }
// console.log(size);


// var n = 3        
// var nDigitCircularPrimes = getCircularPrimes(6);
// console.log(nDigitCircularPrimes );

//         var sizeN = 0;
// for (var key in nDigitCircularPrimes) {
//     if (nDigitCircularPrimes[key]){
//         sizeN++;
//     }
// }


// console.log(sizeN);
 
//Problem 15 Lattice paths

// var perimeter = 1;

// var routes = 1;

// var move = function (x, y) {
//   if (x < perimeter && y < perimeter) {
//     routes += 1;
//     move(x + 1, y);
//     move(x, y + 1);
//   }
// }

// move(0,0);

// // console.log(routes);

// var pattern = [];

// for (var i = 1; i <= 15; i++) {
//   routes = 1;
//   perimeter = i;
//   move(0,0);
//   pattern.push([i, routes]);
// }

// console.log(pattern)
 

//Problem 95 Amicable chains
// function dene(y, m) {
//     for (var i = 2; i <= m; i++) {
//         var a = 1;
//         for (var j = 2; j * j <= i; j++) {
//             if (i % j == 0) {
//                 a += j;
//                 if (j * j != i) {
//                     a += i / j;
//                 }
//             }
//         }
//         y[i] = a;
//     }
// }

// function main(m) {
//     var y = [];
//     dene(y, m);
//     var x = [];
//     var a = 0;
//     var k = 0;
//     for (var i in y) {
//         var s = i;
//         var p = {};
//         var n = 1;
//         while (s && !x[s] && !p[s]) {
//             p[s] = n++;
//             s = y[s];
//         }
//         if (x[s]) {
//             x[i] = x[s];
//         } else if (s) {
//             var l = n - p[s];
//             for (var q in p) {
//                 x[q] = l;
//             }
//             if (l > k) {
//                 k = l;
//                 a = s;
//             }
//         }
//     }
//     return a;
// }

// console.log('ANS: ' + main(1000000));
