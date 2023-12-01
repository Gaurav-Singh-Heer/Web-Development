let a=document.getElementsByTagName('div')[0]

let div =document.createElement('div');
div.innerHTML='<h1> Hello World!(after)</h1>'
a.after(div);