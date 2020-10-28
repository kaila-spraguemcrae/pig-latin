function pigLatin(string) {
  let fstLetter = string.charAt(0).toLowerCase();
  let fstSecLetter = (string.charAt(0).toLowerCase()).concat(string.charAt(1).toLowerCase())
  if (fstLetter=='a' || fstLetter=='e'|| fstLetter=='i' || fstLetter=='o' || fstLetter=='u') {
    return string + "way";
  } else if (fstLetter!='a' && fstLetter!='e'&& fstLetter!='i' && fstLetter!='o' && fstLetter!='u' && fstSecLetter!='qu') {
    return string.slice(1) + string[0] + "ay";
  } else if (fstSecLetter == "qu") {
    return string.slice(2) + "quay";
  } 

}