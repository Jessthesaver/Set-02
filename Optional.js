function leetencoder(str) {
	var leetCode = {
		A: "@",
		B: '8',
		C: '(',
		D: '|)',
		E: '3',
		F: '7',
		G: '9',
		H: '#',
		I: 'l',
		J: '_|',
		K: '|<',
		L: '1', 
		M: '|\'|\'|',
		N: '/|/',
		O: '0', 
		P: '|D',
		Q: '(,)',
		R: '|2',
		S: '5',
		T: '+',
		U: '|_|',
		V: '|/',
		W: '|/|/',
		X: '><',
		Y: 'j',
		Z: '2',
        ' ': ' ',
        '.': '.',
        ',': ',',
        '\'': '\'',
        '-':'-'
	}
	
	var translatedStr = "";

	for (i = 0; i < str.length; i++) {
		translatedStr += leetCode[str.charAt(i).toUpperCase()];
		}

	return translatedStr;
}

let text=document.querySelector('p').innerText;
let translation= leetencoder(text);
let translatedp = document.createElement('p');
translatedp.innerText=translation;
document.querySelector('body').appendChild(translatedp)