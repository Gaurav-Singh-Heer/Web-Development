//Callbacks
function loadScript(src,callback){
    var script=document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded Script With Src")
        callback(src);                                      //Calling Function With Argument(src)
    }
    document.body.appendChild(script) //OR  // document.body.append(script)       // To Add Script at body
}

function hello(src){
    alert('Hello World '+src)
}

function goodmorning(src){
    alert('Good Morning '+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello)

//,hello to run hello Function after script is loaded