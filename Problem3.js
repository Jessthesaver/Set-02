function lettershift(str) {
  const switched=str.replace(/([a-zA-Z0-9])/gm , element => {
    if(element.charCodeAt()==57){//problem characters code
      return '0'
    }else if(element.charCodeAt()==122){
      return 'a'
    }else if(element.charCodeAt()==90){
      return 'A'
    }else{
      return String.fromCharCode(element.charCodeAt()+1)
    }   
  });   
  return switched;
}
console.log(lettershift("es2f3z9Z0"));