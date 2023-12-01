function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
            month = '0' + month;
    }
    if (day.toString().length == 1) {
            day = '0' + day;
    }
    if (hour.toString().length == 1) {
            hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
            minute = '0' + minute;
    }
    if (second.toString().length == 1) {
            second = '0' + second;
    }
    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// example usage: realtime clock
setInterval(function() {
    currentTime = getDateTime();
    time.innerHTML = currentTime;
    //document.getElementById("time").innerHTML = currentTime;
}, 1000);

// setInterval(()=>{
//     let d=new Date()
//     time.innerHTML=d
// },1000)

// let a =new Date()
//     let h =a.getDate()
//     let i =a.getMonth()
//     let j=a.getFullYear()
//     let k=a.getHours()
//     let l=a.getMinutes()
//     let m=a.getSeconds()

//     console.log(`${h}/ ${i}/ ${j} ${k} : ${l} : ${m} `)
//     document.write(`${h}/ ${i}/ ${j} ${k} : ${l} : ${m} `)