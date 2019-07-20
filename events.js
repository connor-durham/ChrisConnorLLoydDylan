function displayEvents() {
    var events = $(this).attr("data-name");
    var queryUrl = "https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}"

// ajax call for the API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) { 
        console.log(response)
    })
