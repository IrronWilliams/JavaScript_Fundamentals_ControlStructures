/*JavaScript provides multiple options to iterate through loops:
  For 
  Do..While
  While 
  For...In 
  For..Of
  Array.Foreach
  */
 

//For Loop.  Can interrupt a for loop using 'break' and fast forward to next iteration using 'continue'
let list = ['c','a','r']
for (let i =0; i < list.length; i++) {
  //  console.log(list[i]) //returns value
  //  console.log(i) //returns index
}

//Do...While
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



