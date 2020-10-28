function pigLatin(string) {
  let fstLetter = string.charAt(0).toLowerCase();
  if (fstLetter=='a' || fstLetter=='e'|| fstLetter=='i' || fstLetter=='o' || fstLetter=='u') {
    return string + "way";
  } else if (fstLetter!='a' && fstLetter!='e'&& fstLetter!='i' && fstLetter!='o' && fstLetter!='u') {
    return string.slice(1) + string[0] + "ay";
    } 

});