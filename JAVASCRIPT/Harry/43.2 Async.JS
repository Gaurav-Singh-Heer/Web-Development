async function harry(){                  //IF REMOVED async THEN ERROR WILL COME THAT .then IS NOT A FUNCTION
    return 5
}

harry().then((x)=>{
    alert(x)
})