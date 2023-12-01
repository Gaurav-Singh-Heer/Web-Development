let a=document.getElementsByTagName('div')[0]

let div =document.createElement('div');
div.innerHTML='<h1> Hello World!(append)</h1>'
a.appendChild(div);                        //    OR                         // document.body.append(div);