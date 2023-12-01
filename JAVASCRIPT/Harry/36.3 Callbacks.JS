//Callbacks
function loadScript(src){
    var script=document.createElement('script')
    script.src=src
    document.head.append(script)           // To Add Script at head
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js") 

//This will be appended in Body see in     Inspect->element