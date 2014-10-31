/* Sehr dumme Spambots blenden. */
if(typeof(window.document.querySelectorAll) == "undefined") {
    // Thanks to http://www.codecouch.com/2012/05/adding-document-queryselectorall-support-to-ie-7/
    // IE7 support for querySelectorAll in 274 bytes. Supports multiple / grouped selectors and the attribute selector with a "for" attribute. http://www.codecouch.com/
(function(d,s){d=document,s=d.createStyleSheet();d.querySelectorAll=function(r,c,i,j,a){a=d.all,c=[],r=r.replace(/\[for\b/gi,'[htmlFor').split(',');for(i=r.length;i--;){s.addRule(r[i],'k:v');for(j=a.length;j--;)a[j].currentStyle.k&&c.push(a[j]);s.removeRule(0)}return c}})() // jshint ignore:line
}
var addrViews = window.document.querySelectorAll(".mailadresse");
for (var i = 0; i < addrViews.length; i++) {
    var tmp1 = addrViews[i].attributes.getNamedItem("data-to").value;
    var tmp2 = "&#64;";
    var tmp3 = "accu-rate.de";
    var addr = tmp1 + tmp2 + tmp3;
    var lnk = "<a href=\"mailto:" + addr + "\">" + addr + "</a>";
    addrViews[i].innerHTML = lnk;
}


/* Piwik tracker (thx klml!) */
if (window.location.href.indexOf("local") == -1) {
    // Only load when not testing locally
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
}

/* Mobile device detection one-liner.
 * Thanks to https://coderwall.com/p/i817wa */
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

/* Insert HTML tag to load script programmatically.
 * Thanks to http://www.stevesouders.com/blog/2009/04/27/loading-scripts-without-blocking/ */
function loadScript(path) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = path;
    document.getElementsByTagName("head")[0].appendChild(s);
}

/* Hint non-german speaking users to the Google Translate bar (in English)
 * works in IE/SAFARI/CHROME/FF
 * Thanks Annibigi and Marco Demaio in
 * http://stackoverflow.com/q/1043339/1181063 */
function userSpeaksGerman() {
    var language = window.navigator.userLanguage || window.navigator.language || "de";
    return language.indexOf("de") != -1;
}

/* Thanks https://developer.mozilla.org/en-US/docs/Web/API/document.cookie */
function getCookie(sKey) {
    if (!sKey) {
        return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

if (!userSpeaksGerman() && (getCookie("seenIntlNotice") !== "true")) {
    alert("Hello international visitor! So far, our website is only available in German. We had good results using Google Translate, so we included Google's toolbar for your convenience. Please contact us, we're happy to speak English (and some Spanish, French and Dutch too).");

    // save for the current session:
    document.cookie = "seenIntlNotice=true";
}

