console.log('WE R LOADED')
var cityChoice = document .getElementById('weatherDetailsTable');

function getApi(cityChoice) {
    console.log('API FUNCTION IS HAPPENING!!!')
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityChoice + "&appid=bd0834857d11c7c26292f5e1e8657635" 
    fetch(requestUrl)
        .then (function (response){

            return response.json();
        }).then(function(data) {
            console.log('dataaaa form api', data)
        })
}


$("#search-btn").on("click", function(){
    console.log("you got clicked")
   console.log( $("#search-input").val())
   getApi( $("#search-input").val())
})