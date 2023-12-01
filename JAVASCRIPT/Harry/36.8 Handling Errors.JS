//Callbacks
function loadScript(src,callback){
    var script=document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded Script With Src")
        callback(src);                                            //Calling Function With Argument(src)
    }
    script.onerror=function(){                                    //Performing Function if Error occurs
        console.log("Error Loading Script with SRC:"+src)
    }
    document.body.appendChild(script) //OR  // document.body.append(script)       // To Add Script at body
}

function hello(src){
    alert('Hello World '+src)
}

function goodmorning(src){
    alert('Good Morning '+src)
}

loadScript("https://cdn.jsdfdfsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",goodmorning)
// Added                //dfdfs              // To make site which Never Existed
//Error will Come Now we will handle that Error


//,hello to run hello Function after script is loaded