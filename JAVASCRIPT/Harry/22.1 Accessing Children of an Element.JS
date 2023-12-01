console.log(document.body.firstChild); // <h1>I am Child of body</h1>
console.log(document.body.lastChild); // <script src="script.js"></script>       //<script> is a last child
console.log(document.body.childNodes); // NodeList [ #text, <h1>, #text, <p>, #text, <script> ]



// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// let arr = Array.from(document.body.childNodes)
// console.log(arr)