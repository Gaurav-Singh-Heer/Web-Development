let a=document.getElementsByTagName('div')[0]

let div =document.createElement('div');
div.innerHTML='<h1> Hello World!(before)</h1>'
a.before(div);