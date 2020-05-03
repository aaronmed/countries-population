window.onload = initialize;

function initialize() {
    let xsl = loadXMLDoc("data.xsl");

    let gi = "GI";
    let tv = "TV";
    let nr = "NR";
    let pw = "PW";
    let vg = "VG";
    let sm = "SM";

    let url = [tv, nr, pw, vg, gi, sm];

    for (var i = 0; i < url.length; i++) {
        xml = loadXMLDoc("https://api.worldbank.org/v2/country/" + url[i] + "/indicator/SP.POP.TOTL?date=1970:2018");
        displayResult(xml, xsl, url[i]);
    }
}

var xhttp;

function displayResult(xml, xsl, id) {
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        ex = xml.transformNode(xsl);
        document.getElementById(id).innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        let resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById(id).appendChild(resultDocument);
    }
}

function loadXMLDoc(filename) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try { xhttp.responseType = "msxml-document" } catch (err) { } // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

