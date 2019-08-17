/*Uses https://github.com/stewartlord/identicon.js and http://caligatio.github.io/jsSHA/  */
function get_identicon (text) {
    var salt = $("#salt")[0].value;
    var rounds = Number($("#rounds")[0].value);
    var size = Number($("#size")[0].value);
    var outputType = $('input[name=outputType]:checked')[0].value;
    var hashtype = $('input[name=hashVariant]:checked')[0].value;
    var shaObj = new jsSHA(text+salt, "TEXT");
    var hash = shaObj.getHash(hashtype, outputType,rounds);
    var data = new Identicon(hash, size).toString();
    $("#show_identicon")[0].src='data:image/png;base64,' + data;
}

