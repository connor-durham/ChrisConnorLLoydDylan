function displayEvents() {
    var events = $(this).attr("data-name");
    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword&apikey=RncxtNn2EJaysh6A9ZPsAFJBB3p71oXX"

// ajax call for the API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) { 
        console.log(response)
    })
}
