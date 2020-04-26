$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function (result) {
        var confirmed = 0;
        var deaths = 0;
        var recovered =0;
        var no = 1;
        for (var country in result) {
            var selectedCountry = result[country];
            confirmed =   confirmed + selectedCountry[selectedCountry.length-1].confirmed 
            deaths = deaths + selectedCountry[selectedCountry.length-1].deaths
            recovered = recovered + selectedCountry[selectedCountry.length-1].recovered
            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country2.html?country=${country}">${country}</a>
                        </td> 
                    </tr>`;

            $("#data").append(row);
            no++;
        }
        console.log(confirmed);
        $("#data1").append(confirmed);
        console.log(deaths);
        $("#data2").append(deaths);
        console.log(recovered);
        $("#data3").append(recovered);
        
        
    });
});
