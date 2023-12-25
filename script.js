function showTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    

if (h <= 11 ) {
    h = h
}

if(h >= 12){
    
}

h = (h < 10) ? '0' + h : h
m = (m < 10) ? '0' + m : m
s = (s < 10) ? '0' + s : s

var time = h + ':' + m + ':' + s + ''
document.getElementById('MyClockDisplay').innerText = time

setTimeout(showTime, 1000)

}

showTime()