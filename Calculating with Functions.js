/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

function zero(operation) { return operation ? operation(0) : 0 }
function one(operation) {return operation ? operation(1) : 1}
function two(operation) {return operation ? operation(2) : 2}
function three(operation) {return operation ? operation(3) : 3}
function four(operation) {return operation ? operation(4) : 4}
function five(operation) {return operation ? operation(5) : 5}
function six(operation) {return operation ? operation(6) : 6}
function seven(operation) {return operation ? operation(7) : 7}
function eight(operation) {return operation ? operation(8) : 8}
function nine(operation) {return operation ? operation(9) : 9}

function plus(number) { return x=>x+number  }
function minus(number) { return x=>x-number}
function times(number) { return x=>x*number}
function dividedBy(number) { return x=>Math.floor(x/number)}

/*
const [zero,one,two,three,four,five,six,seven,eight,nine] = 
      Array(10).fill(0).map((_,i)=>fn=>fn?fn(i):i)
const [plus,minus,times,dividedBy] = ['+','-','*','/']
.map(s => a => b=> Math.floor(eval(b+s+a)))
*/
