function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  var newString = str.split("").reverse().join("");

  if (newString == str) {
  
    return true;
  }

    else {
      return false;
}
  
}

palindrome("eye");