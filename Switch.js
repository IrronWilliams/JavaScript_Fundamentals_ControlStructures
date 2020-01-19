/* And if/else statement is cool if you have a few options to evaluate.  If there are many statements to evaluate 
  code will look too complex. Switch conditional is used when there are many statements to evaluate 
*/

switch (expression) {
    //cases
}

//Based upon the result of the expression, JavaScript will trigger one case I define. 
//must add a break statement at the bottom of each case. If not, JavaScript will also execute the code in the next case 
const a = 2
switch(a) {
  case 1:
    //do this if case a is 1
    break
  case 2:
    //do this if case a is 2
    break
  case 3:
    //do this if case a is 3
    break
  default:
    //do this if the cases above are not executed. 
}

//When used inside a function, if the switch defines a return value, instead of using break just use return:
let doSomething = (a) => {
    switch(a) {
      case 1:
        //handle if case a is 1
        return 'handled 1'
      case 2:
        //handle if case a is 2
        return 'handled 2'
      case 3:
        //handle if case a is 3
        return 'handled 3'
    }
  }
  