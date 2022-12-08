var displaymillisec = document.getElementById('displaymillisec')
var displaysec = document.getElementById('displaysec')
var displaymin = document.getElementById('displaymin')


var millisec = 0
var sec = 0
var min = 0
var interval;

function timer() {
    millisec++
    if (millisec == 10) {
        millisec = 0
        sec++
        if (sec == 60) {
            sec = 0
            min++
        }

    }
    displaymillisec.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min

}

function starttimer() {
    interval = setInterval(function () {
        timer()
    }
        , 100
    )
}
function pausetimer() {
    clearInterval(interval)
}
function resettimer() {
    pausetimer()
    millisec = 0
    sec = 0
    min = 0


    displaymillisec.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min

}