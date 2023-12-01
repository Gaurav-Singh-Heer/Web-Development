//Callback Hell OR Pyramid of Doom Makes Code Unreadeable 
function loadScript(src, callback) {
    var script = document.createElement('script')
    script.src = src
    script.onload = function () {
        console.log("Loaded Script With Src")
        callback(null, src);//If Script Runned Sucssesfully then Error=null //Calling Function With Arguments(src)
    }
    script.onerror = function () {                                    //Performing Function if Error occurs
        console.log("Error Loading Script with SRC:" + src)
        callback(new Error("Src got Some Error"))
        //For whenever error Comes Run callback Everytime and Write "Src got Some Error"
    }
    document.body.appendChild(script) //OR  // document.body.append(script)       // To Add Script at body
}

function hello(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert('Hello World ' + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessagetoCeo()
        return
    }
    //alert('Good Morning '+src)       // If No Error Instead of this Load another Script
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
        if (error) {
            console.log(error)
            sendEmergencyMessagetoCeo()
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                console.log(error)
                sendEmergencyMessagetoCeo()
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                    console.log(error)
                    sendEmergencyMessagetoCeo()
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                        console.log(error)
                        sendEmergencyMessagetoCeo()
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                            console.log(error)
                            sendEmergencyMessagetoCeo()
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                console.log(error)
                                sendEmergencyMessagetoCeo()
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                    console.log(error)
                                    sendEmergencyMessagetoCeo()
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                        console.log(error)
                                        sendEmergencyMessagetoCeo()
                                        return
                                    }

                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

//REMOVED
// Added                //dfdfs              // To make site which Never Existed
//Error will Come Now we will handle that Error


//,hello to run hello Function after script is loaded








//IF wrote ctrl,error instead of null,error then harry is fired from his job
//Solution of this callback HEll is 