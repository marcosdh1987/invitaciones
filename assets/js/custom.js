
countdown();

function countdown(){
    var now = new Date();
    var eventDate = new Date(2022, 11, 19);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remainingTime = eventTime - currentTime;
    var s = Math.floor(remainingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("D").innerHTML = d+" Days";
    document.getElementById("H").innerHTML = h+" Hours";
    document.getElementById("M").innerHTML = m+" Minutes";
    document.getElementById("S").innerHTML = s+" Seconds";
    setTimeout(countdown, 1000);

}