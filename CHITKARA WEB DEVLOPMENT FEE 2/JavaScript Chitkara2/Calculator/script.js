let string = "";
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = "";
        } else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
// let string="";
// let buttons=document.querySelector('.button');

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
    
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             document.querySelector('input').value=string;

//         }
//         else{
//             console.log(e.target)
//             string=string+e.target.innerHTML
    
//             document.querySelector('input').value=string;
//         }
//     })
// })

// querySelector('.button') will only select the first element with the class "button", but it seems 
// like you 
// want to select multiple buttons. You should use querySelectorAll('.button') to select all elements with 
// the 
// class "button".
// You're trying to iterate over the buttons using Array.from(buttons), but buttons is not an array. You 
// should use forEach directly on the NodeList returned by querySelectorAll.