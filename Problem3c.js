function palindromecheck(elementid){
    let el= document.getElementById(elementid);
    let regex= / \b(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)(?:(\w)\11?\10|\10?)\9|\9?)\8|\8?)\7|\7?)\6|\6?)\5|\5?)\4|\4?)\3|\3?)\2|\2?))?\1\b/g;
    let text=el.innerText;
    let newtext= text.match(regex);
    return newtext;
}

console.log(palindromecheck('paragraph'));