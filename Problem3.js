function lettershift(str) {
  let regex = /([a-zA-Z0-9])/gm;
  let match=str.match(regex);
  let switched=[];
  match.forEach(element => {
    switched.push(String.fromCharCode(element.charCodeAt()+1))
  });   
  return switched.join('');
}
console.log(lettershift("es2f3"));
