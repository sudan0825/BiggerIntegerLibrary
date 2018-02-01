In JavaScript, if the number is bigger thant bigest number, the calculation will be inaccurate. This library works for big integer, that is bigger than biggest number. The function includes plus and minus now. 
To use the library, you need to initial an object. The method is similar as you instantiate a jQuery object. The short cut for the library is $pm. bigInteger.js is the library module

Here is an example:

var obj=$pm(a,b);

obj.plus();
obj.minus();

A kindly reminder when you are programming: When you use a negtive sign in front of a variable, it will try to covert the variable to number to do calculate. To avoid unnecessay calculation, use "-" instead of - only.