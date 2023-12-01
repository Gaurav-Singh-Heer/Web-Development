//Callbacks
function loadScript(src){
    let script=document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded Script With Src")
    }
    document.body.append(script)       // To Add Script at body
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js") 

//This will be appended in Body see in     Inspect->element

// document.head.append(script)          // To Add Script at head