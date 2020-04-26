$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for( i = selectedCountry.length-1 ; i >= 0 ; i--){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data").append(row);

        }
      var confirmed =  selectedCountry[selectedCountry.length-1].confirmed 
        console.log(confirmed);
        $("#Wconfirmed").append(confirmed);
      var deaths =  selectedCountry[selectedCountry.length-1].deaths
        console.log(deaths);
        $("#Wdeaths").append(deaths);
      var recovered=  selectedCountry[selectedCountry.length-1].recovered
        console.log(recovered);
        $("#Wrecovered").append(recovered);
      var date = selectedCountry[selectedCountry.length-1].date
        console.log(date);
        $("#Wdate").append(date);
        
    });



})