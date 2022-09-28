function lettershift(str) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + 1;
        result += String.fromCharCode(charcode);
    }
    return result;

}
console.log(lettershift('es2f3'))