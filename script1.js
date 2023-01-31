const endDate = new Date("Mar 2, 2023 06:00:00").getTime();

const inputs = document.querySelectorAll("input")


function clock() {

    const now = new Date().getTime();
    const timeleft = (endDate - now);

    if (timeleft < 0) return;

    // convert into days;

        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);



//  var days=Math.floor(diff / 3600 / 24);
//  var hours=Math.floor(diff / 3600) % 24;
//  var minutes=Math.floor(diff / 60) % 60;
// var seconds=Math.floor(diff) % 60;


var daysStr = days;
if (days < 10) {
    daysStr = "0" + days;
}

var hoursStr = hours;
if (hours < 10) {
    hoursStr = "0" + hours;
}

var minutesStr = minutes;
if (minutes < 10) {
    minutesStr = "0" + minutes;
}

var secondsStr = seconds;
if (seconds < 10) {
    secondsStr = "0" + seconds;
}
if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    daysStr = "00";
    hoursStr = "00";
    minutesStr = "00";
    secondsStr = "00";

    console.log("close");
    if (typeof interval !== "undefined") {
        clearInterval(interval);
    }
}





    inputs[0].value = daysStr;
    inputs[1].value =hoursStr;
    inputs[2].value = minutesStr ;
    inputs[3].value = secondsStr;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)