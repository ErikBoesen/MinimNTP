function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; ";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

var NTP = {
    currentBackground: 1,
    currentTheme: 1,
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    backgroundButton: document.getElementById("backgroundButton"),
    themeButton: document.getElementById("themeButton"),
    themeLink: document.getElementById("theme"),
    initiate: function() {
        NTP.currentBackground = getCookie("background");
        NTP.currentTheme = getCookie("theme");
        NTP.updateClock();
        backgroundButton.addEventListener("click", NTP.changeBackground);
        themeButton.addEventListener("click", NTP.changeTheme);
    },
    updateClock: function() {
        setInterval(function() {
            var today = new Date(),
                h = today.getHours(),
                m = today.getMinutes();
            if (m < 10) {
                m = "0" + m;
            }
            document.getElementById("hours").innerHTML = h;
            document.getElementById("minutes").innerHTML = m;

            document.cookie = "currentTheme=" + NTP.currentTheme + ";currentBackground=" + NTP.currentBackground;
        }, 500);
    },
    changeTheme: function() {
        if (NTP.currentTheme < 3) {
            NTP.currentTheme++;
            NTP.themeLink.href = "themes/" + NTP.currentTheme + ".css";
        } else {
            NTP.currentTheme = 1;
            NTP.themeLink.href = "themes/1.css";
        }
        setCookie("theme", NTP.currentTheme);
    },
    changeBackground: function() {
        if (NTP.currentBackground < 35) {
            NTP.currentBackground++;
            document.body.style.backgroundImage = "url(bg/" + NTP.currentBackground + ".jpg)";
        } else {
            NTP.currentBackground = 1;
            document.body.style.backgroundImage = "url(bg/1.jpg)";
        }
        setCookie("background", NTP.currentBackground);
    }
};
// Actually start the program
addEventListener('load', function () {
    NTP.initiate();
});