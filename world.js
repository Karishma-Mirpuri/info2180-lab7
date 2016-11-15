window.onload = function() {
    var searching = document.getElementById("lookup");
    searching.addEventListener("click", function() {
        
        var httpRequest = new XMLHttpRequest();
        var all_countries = '';
        var search_country = document.getElementById("country").value;
        var check = document.getElementById("checkbox");
        
        if (search_country !== '' ||  check.checked)
        {    
            if (check.checked)
            {
                all_countries = check.value;
            }
            else
            {
                all_countries = '';
            }
            httpRequest.open('GET', 'world.php?country=' + search_country + '&all=' + all_countries);
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
        }
        else
        {
            document.getElementById('result').innerHTML = 'Please enter a valid country to lookup, or select the checkbox to lookup all countries.';
        }
    });
};