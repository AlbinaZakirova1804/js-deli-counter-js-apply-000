//1. add newCustomer to the line

var number = 1
function takeANumber(katzDeli )
{
 
 katzDeli.length
  katzDeli.push(number)
  number++
  //katzDeli.push(newCustomer);// add new customer to the end of array
  return "Welcome, your ticket number is" + katzDeli.length;  //  + newCustomer + ". You are number " + katzDeli.length + " in line.");
 }

//2. return first person and then remove him from the line

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return ('There is nobody waiting to be served!');
  }
  else 
  {
    var Customer = katzDeliLine.shift(); // remove first customer from array 
    return 'Currently serving ' + Customer +'.';//return just removed customer
  }
}

//3. return current line as a string
function currentLine(katzDeliLine)
{
  if ( katzDeliLine.length !==0 ) // condition, array is not empty
  {
    var NumberedLine = []; // emty array to store numbered katzDeliLine array values
    for (var i = 0; i < katzDeliLine.length; i++ )
      {
      NumberedLine[i] = ( i+1  +'. '+ katzDeliLine[i]);
      }
    return 'The line is currently: ' + NumberedLine.join(', ');
  }
  else
  {
    return "The line is currently empty.";
  }
}