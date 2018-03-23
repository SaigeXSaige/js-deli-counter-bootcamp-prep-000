var katzDeli = [];
var timeStamp = [];
function takeANumber(katzDeli, i){
  i++;
  katzDeli.push(i);
  timeStamp.push(Time.now());
  return (`Welcome, ${i}. You are number ${katzDeli.length} in line.`);
}
function nowServing(line){
  if (line.length === 0){
    return ('There is nobody waiting to be served!'); 
  } else {
    return (`Currently serving ${line.shift()}.`);
  }
}
function currentLine(katzDeli){
  var DeliLine = [];
  for (var i = 0; i < katzDeli.length; i++) {
    
      DeliLine.push(' ' + [i + 1] +'. ' + katzDeli[i]);
  }
  if (katzDeli.length === 0){
      return ('The line is currently empty.');
    } else {
      return ('The line is currently:' + DeliLine);
    }
}

function OneTo100(){
  for (var i = 0; i < 100; i++){
    if (i%3 === 0 && i%5 === 0){
     return "FizzBuzz"
    } else if (i%3 === 0) {
    return "Fizz"  
    } else if (i%5 === 0) {
    return "Buzz"  
    } else {
    return i;
    }
  
  }
}