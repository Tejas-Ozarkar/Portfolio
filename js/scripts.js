document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        $('#loader').css("visibility", "hidden");
        $('#load').css("visibility", "hidden");
        $('html, body').css("overflow-y", "auto");
        $(function() {
            AOS.init();
        });
    }
}