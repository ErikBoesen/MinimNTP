var NTP = {
    currentBackground: 1,
    currentTheme: 1,
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    backgroundButton: document.getElementById("backgroundButton"),
    themeButton: document.getElementById("themeButton"),
    themeLink: document.getElementById("theme"),
    initiate: function() {
        cookieData = document.cookie.split(";");
        NTP.currentBackground = cookieData[0].split("=")[1];
        //NTP.currentTheme = cookieData[1].split("=")[1];
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
    },
    changeBackground: function() {
        if (NTP.currentBackground < 11) {
            NTP.currentBackground++;
            document.body.style.backgroundImage = "url(bg/" + NTP.currentBackground + ".jpg)";
        } else {
            NTP.currentBackground = 1;
            document.body.style.backgroundImage = "url(bg/1.jpg)";
        }
    }
};
// Actually start the program
addEventListener('load', function () {
    NTP.initiate();
});