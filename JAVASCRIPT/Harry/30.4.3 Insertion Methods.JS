let a=document.getElementsByTagName('div')[0]

let div =document.createElement('div');
div.innerHTML='<h1> Hello World!(prepend)</h1>'
a.append(div);                    
// a.prepend(div);

//  FIRST CHECK BY COMMENTING LINE 5 AND NORMAL LINE 6 
//  THEN CHECK BY COMMENTING LINE 6 AND NORMAL LINE 5