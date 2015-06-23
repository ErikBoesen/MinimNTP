addEventListener('load', function () {
    var h = new Date().getHours(),
        m = new Date().getMinutes();
    if (h < 10) {h = "0" + h;}
    if (m < 10) {m = "0" + m;}
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.body.style.backgroundImage = "url(bg/" + (Math.floor(Math.random() * 27) + 1) + ".jpg)";
    document.getElementById("theme").href = "themes/" + (Math.floor(Math.random() * 5) + 1) + ".css";
});