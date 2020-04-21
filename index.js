$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td> 
                    </tr>`;

            $("#data1").append(row);
            no++;
        }
    });
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data2").append(row);

        }
        

    });

});
