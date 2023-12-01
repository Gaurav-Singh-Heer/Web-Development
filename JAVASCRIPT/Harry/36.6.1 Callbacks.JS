//Callbacks
function loadScript(src,callback){
    var script=document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded Script With Src")
        callback();
    }
    document.body.appendChild(script) //OR  // document.body.append(script)       // To Add Script at body
}

function hello(){
    alert('Hello World')
}

function goodmorning(){
    alert('Good Morning')
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",goodmorning)

//,hello to run hello Function after script is loaded