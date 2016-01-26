//var first_name = "glenn"; two forward slashes mean a single line comment.
/* 

BLOCK COMMENT

*/

var greeting = "Howdy, dude!";

var first_name = "Glenn";

var last_name = "Kouhia";

var message1 = "Welcome to Seattle!";

var message2 = "See Jordan Morris play soccer for the Sounders.";

/*when we want a quote to appear in the string with quote marks we can use an escape character, the backslash key must be directly before and after the inner quote.*/
var favoritequote = "\"I'm happy that I will be able to play for my hometown team.\"";

//use single quotes if you have alot of illegal characters;
var my_image = "<img src=\"images/myImage.png\"> ";
//remember, we can add attributes to an image, like width+height.

var goodbye = "Bye bye.";


//BAD Variable names (which lead to errors!!!)
//var first name =""; -- BAD -- spaces are NOT allowed in a name
//var 2first_name ="": -- BAD -- a number cannot start a variabe name
//var math 

//Operators
// "=" this assigns values
// "+=" (concatenation assignment operator, which operates on strings) this operator adds to whatever the variable currently has

// put a semicolon at the end of each variable.

// output variables to the console. Note, you can log out any variable. Note we are not creating a variable but outputting it)
console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoritequote);
console.log(goodbye);
console.log(my_image); 

/*Or, to see all variables logged to 1 line, do the following:
console.log(greeting + first_name + last_name + message1 + message2 + favoritequote + goodbye + my_image); */
/* to force a space between each variable in the single line log file, do the following:*/
console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoritequote + " " + goodbye + " " + my_image); 

/*
"My fellow *Americans*, ask not what your *country* can do for *you*—ask what *you* can do for your *country*."  
- John F. Kennedy
*/
var static_words1 = "My fellow ";
var static_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";
var static_words6 = ".";

//Preview of accessing the DOM model. We will create a new variable that is used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when clicked on
button.addEventListener("click", onClick, false);
//the eventhandler is the onClick function in this instance
function onClick(evt)
//when a function is fired off, is invoked, all the code between the curly brackets ,the function body, is fired off. 
{
    evt.preventDefault(evt);//this line stops the form from submitting anything by preventing its defaut action.
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6);
  // document.getElementById("myForm").elements.item(0).value;
  // return fales;
}