//business logic
//pigLatin function tests working
function pigLatin(string){ 
  let fstLetter = string.charAt(0).toLowerCase(); 
  let fstSecLetter = (string.charAt(0).toLowerCase()).concat(string.charAt(1).toLowerCase())
  let fstSecThiLetter = ((string.charAt(0).toLowerCase()).concat(string.charAt(1).toLowerCase()).concat(string.charAt(2).toLowerCase()))
  //test one: (pigLatin("a")).toEqual("away");
  if (fstLetter=='a' || fstLetter=='e'|| fstLetter=='i' || fstLetter=='o' || fstLetter=='u') {
    return string + "way";
  //test two: (pigLatin("cat")).toEqual("atcay");
  } else if (fstLetter!='a' && fstLetter!='e'&& fstLetter!='i' && fstLetter!='o' && fstLetter!='u' && fstSecLetter!='qu' && fstSecThiLetter!='squ') {
    return string.slice(1) + string[0] + "ay";
  //test three: (pigLatin("quit")).toEqual("itquay")
  } else if (fstSecLetter == "qu") {
    return string.slice(2) + "quay";
  //test four: (pigLatin("squid")).toEqual("idsquay")
  } else if (fstSecThiLetter == "squ") {
    return string.slice(3) + "squay";
  }
}//end pigLatin function


//pigSen function to run sentence through translator
function pigSen(string) {
  let stringSplit = string.split(" ");
  let pigLatinArray = [];
  stringSplit.forEach(function(test){
    pigLatinArray.push(pigLatin(test));
  });
  return pigLatinArray.join(' ');
}

