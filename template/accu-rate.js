/* Sehr dumme Spambots blenden. */
var addrViews = window.document.querySelectorAll(".mailadresse");
for (var i = 0; i < addrViews.length; i++) {
    var tmp1 = addrViews[i].attributes.getNamedItem("data-to").value;
    var tmp2 = "&#64;";
    var tmp3 = "accu-rate.de"
    var addr = tmp1 + tmp2 + tmp3;
    var lnk = "<a href=\"mailto:" + addr + "\">" + addr + "</a>";
    addrViews[i].innerHTML = lnk;
}


/* Piwik tracker (thx klml!) */
var _paq = _paq || [];
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);

(function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://tr.umija.net/";
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", "14"]);
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
})();


