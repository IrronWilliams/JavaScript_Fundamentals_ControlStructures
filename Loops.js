/*JavaScript provides multiple options to iterate through loops:
  For 
  Do..While
  While 
  For...In 
  For..Of 
  Array.Foreach

The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. It is typically used to define and 
setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it 
evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. 
This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and 
is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i 
by 1 in each loop iteration with i++ as our final-expression.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

*/
 

//For Loop.  Can interrupt a for loop using 'break' and fast forward to next iteration using 'continue'
let list = ['c','a','r']
for (let i =0; i < list.length; i++) {
  //  console.log(list[i]) //returns value
  //  console.log(i) //returns index
}

//Do...While loop will first do one pass of the code inside the loop no matter what, and then continue to run 
//the loop while the specified condition evaluates to true
let list2 = ['d','o','g']
let i=0
do {
    //console.log(i) //returns index
    //console.log(list2[i]) //returns value
    i = i+1 
} while (i<list2.length)


//While Loop..Can interrupt a while loop using break and you can jump to the next iteration using continue
let list3 = ['a', 'b', 'c']
let a = 0
while (a < list3.length) {
  console.log(list3[a]) //value
  console.log(a) //index
  a = a + 1
}
//Difference between do...while and while is that do...while will always execute cycle at least once


//For...in iterates all the enumerable (countable) properties of an object, giving the property names
let letters = ['s','a','m']

for (let letter in letters) {
    console.log(letter) //property index
    console.log(letters[letter]) //property value
}

//For...of combines the conciseness of forEach with the ability to break:
//iterate over the values within array
for (let value of ['c', 'u', 'r', 'l', 's']) {
    console.log(value) //value
}
  
//A way to get the index of an iteration?..By calling the entries() method on the array
for (let [index, value] of ['s', 'n', 'a', 'p'].entries()) {
    console.log(index) //index
    console.log(value) //value
  }

/* The difference between for...in  and for...of is:
for...of iterates over the property values
for...in iterates the property names */

//Array.ForEach. Given an array, can iterate over its properties using list.forEach().  But cannot break out of the loop
let list5 = ['t', 'r', 'u', 'c', 'k']
list5.forEach((item, index) => {
  console.log(item) //value
  console.log(index) //index
})
//index is optional
list5.forEach(item => console.log(item))


/* 
If you have a multi-dimensional array, you can use the same logic to loop through both the array and any sub-arrays. 

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the 
.length of arr[i], since arr[i] is itself an array.
*/
