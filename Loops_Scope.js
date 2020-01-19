//following loops iterates and for 5 times adds/pushes a function to an array called operations. function = ()=>
//function console logs the loop index variable i.  The expected output is 0,1,2,3,4. But this returns 5,5,5,5,5
//this is the result of the use of var. var declarations are hoisted. so in the for loop, i is still visible, but 
//equals to 5 and every reference to i the function is going to use this value. Use let to avoid some of the weird
//things about var declarations. 

/*
const operations = []

for (var i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}

for (const operation of operations) {
  operation()
}  */

//changing var to let returns expected results because on every loop iteration, i is created as a new variable 
//each time and every function added to the operations array gets its own copy of i. 
const operations = []

for (let i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}

for (const operation of operations) {
  operation()
}

//if determined to use var, another way to solve problem is to use Immediately Invoked Function Expression (IIFE). 
//with IIFE, you can wrap the entire function and bind i to it. Since in this way you’re creating a function that \
//immediately executes, you return a new function from it, so we can execute it later. 
const operationz = []

for (var i = 0; i < 5; i++) {
  operationz.push(((j) => {
    return () => console.log(j)
  })(i))
}

for (const operation of operationz) {
  operation()
}
