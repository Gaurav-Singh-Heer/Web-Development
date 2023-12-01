function init(){
    var name ="Mozilla"
    function displayName(){
        console.log(name)
    }
    name="Harry"
    return displayName
}
init()

console.log("OR")// OR

function init(){
    var name ="Mozilla"
    function displayName(){
        console.log(name)
    }
    name="Harry"
    displayName()
}
init()