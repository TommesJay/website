/* Sehr dumme Spambots blenden. */
var tmp1 = "info";
var tmp2 = "&#64;";
var tmp3 = "accu-rate.de"
var addr = tmp1 + tmp2 + tmp3;
var lnk = "<a href=\"mailto:" + addr + "\">" + addr + "</a>";
document.getElementById("mailadresse").innerHTML = lnk;

