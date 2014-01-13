/* Sehr dumme Spambots blenden. */
var addrViews = window.document.getElementsByClassName("mailadresse");
for (var i = 0; i < addrViews.length; i++) {
    var tmp1 = addrViews[i].attributes.getNamedItem("data-to").value;
    var tmp2 = "&#64;";
    var tmp3 = "accu-rate.de"
    var addr = tmp1 + tmp2 + tmp3;
    var lnk = "<a href=\"mailto:" + addr + "\">" + addr + "</a>";
    addrViews[i].innerHTML = lnk;
}

