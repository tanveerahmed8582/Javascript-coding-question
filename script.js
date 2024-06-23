// 1 - Given a string, reverse each word in the sentence.

var str = "seere jaha se achha hindustan humara";

var savedStrArray = str.split(" ").map(function (word){
  return word.split("").reverse().join("")
});

console.log(savedStrArray.join(" "));