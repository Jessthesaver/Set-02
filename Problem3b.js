function textreplace(elementid, word){
    let el= document.getElementById(elementid);
    let search= word;
    let replace= `<a href=https://twitter.com/search?q=${word}&src=typed_query>#${word}</a>`;
    console.log(replace);
    let text=el.innerHTML;
    let newtext= text.split(search).join(replace);
    el.innerHTML=newtext;
}

textreplace('paragraph','talent')