window.onload = function() {
    var searching = document.getElementById("lookup");
    searching.addEventListener("click", function() {
        var httpRequest = new XMLHttpRequest();
        var search_country = document.getElementById("country").value;
            httpRequest.open('GET', 'world.php?country=' + search_country);
            httpRequest.onload = function() {
                if (httpRequest.status === 200) {
                    //alert('httpRequest.responseText');
                    document.getElementById('result').innerHTML = (httpRequest.responseText);
                }
                else {
                    alert('There was a problem with the request.');
                }    
            }; 

    httpRequest.send();
    });
};