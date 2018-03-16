function myReplace(str, before, after) {
    //  before = before.split('');
    //  after = after.split('');
    //   console.log(before);
    // console.log(before.charCodeAt(0));
    //   console.log(str);
    if (before.charCodeAt(0) < 91) {
//instead could use if (before.charAt(0) === before.charAt(0).toUpperCase())
        after = after.charAt(0).toUpperCase() + after.split('').splice(1).join('');
//instead after = after.charAt(0).toUpperCase() + after.slice(1);        
        //   console.log(after);
        return str.replace(before, after);
    }
    return str.replace(before, after);
    //   for (var i = 0; i > str.length; i++) {
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");