/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  //Code here
  return str.split(' ').map(s=>s.replace(/(\w)(\w*)/g, '$2$1ay')).join(' ')
}
