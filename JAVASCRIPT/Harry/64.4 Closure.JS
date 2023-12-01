message="Gaurav Don't Get Distracted"
function hello1(){
    let message="Good Morning"        // Check OutPut by Commenting this line and not commenting this line
    {
        let message="Good Afternoon"
        console.log("Hello 1 "+message)
    }
    let c= function hello2()
    {
        console.log("I am Cool "+message)
    }
    return c
}
d=hello1()
d()
// Check Output By commenting line 14,15 one time and By commenting Line 17 another time
hello1()