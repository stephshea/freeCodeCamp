//efficient 
function booWho(bool) {
  if(typeof(bool) === "boolean"){
    return true; 
  }
    return false;
}
booWho(null);

//first try -- inefficient but it works
function booWho(bool) {
  if(bool === true) {
    return true; 
    }
  else if(bool === false) {
    return true; 
    }
  else {
  return false;
    }
}
booWho(null);