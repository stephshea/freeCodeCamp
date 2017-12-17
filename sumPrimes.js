
function sumPrimes(num) {
  
  var totalPrimes;
  var primesArray = [];
  
  for (var i = 0; i <=num; i++) {
    
 if (i % 2 != 0) {
   primesArray.push(i);
}

  else if (i % 3 == 0) {
    primesArray.push(i);  
  }
   
  else if (i % 5 == 0) {
    primesArray.push(i);  
  }
    
  else if (i % 7 == 0) {
    primesArray.push(i);  
  }
    
  console.log(primesArray);
    return(primesArray);
     
}
    
}  
//   return totalPrime

sumPrimes(10);