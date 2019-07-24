<<<<<<< HEAD:events.js
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
=======

>>>>>>> 7f6058d6dad12b26971901d914edbdda105cbcf4:assets/js/events.js
