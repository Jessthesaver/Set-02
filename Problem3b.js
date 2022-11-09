let paragraph=document.querySelector('#paragraph')
    let ogtext=paragraph.innerHTML;
function textreplace(elementid, word){
    paragraph.innerHTML=ogtext;
    let el= document.getElementById(elementid);
    let replace= `<a href=https://twitter.com/search?q=${word}&src=typed_query>#${word}</a>`;
    let text=el.innerHTML;
    let newtext= text.split(word).join(replace);
    el.innerHTML=newtext;
    document.getElementById('wordtosearch').value='';
}


//textreplace('paragraph','talent')