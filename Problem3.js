// function lettershift(str) {
//   str = str.toLowerCase();
//   let regex = /([a-zA-Z0-9]+)$/g;
//   let result = "";
//   let charcode = 0;
//   if (str.match(regex)) {
//     for (var i = 0; i < str.length; i++) {
//       charcode = str[i].charCodeAt() + 1;
//       result += String.fromCharCode(charcode);
//     }
//     return result;
//   } else {
//     return str;
//   }
// }
// console.log(lettershift("es2f3"));

function lettershift(str) {
  let regex = /([a-zA-Z0-9])/gm;
  let match=str.match(regex);
  let switched=[];
  match.forEach(element => {
    switched.push(String.fromCharCode(element.charCodeAt()+1))
  });
  let result='';
    for(let i=0;i<str.length;i++){ 
       result+=str[i].replace(match[i],switched[i]);
    }
        
    return result;
}
console.log(lettershift("es2f3"));
