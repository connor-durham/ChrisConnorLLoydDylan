
function displayPhotos(eventId) {
    console.log('eventid', eventId);
    // var events = $(this).attr("data-name");
    var queryUrl = `https://app.ticketmaster.com/discovery/v2/events/${eventId}/images.json?apikey=RncxtNn2EJaysh6A9ZPsAFJBB3p71oXX&limit=5`
    
    let image = $('<img>');
 // ajax call for the API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log('the response brah', response.images[0].url);
        $("#bandPhoto").empty();
        image.attr("src", response.images[0].url);
        image.attr("id", "bandImage");
        $("#bandPhoto").append(image);
    })
 }

function eventSearch(anything) {
    // var events = $(this).attr("data-name");
    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=" + anything +"&apikey=RncxtNn2EJaysh6A9ZPsAFJBB3p71oXX"

    // let eventsDiv = $("<div class='events>'")
// ajax call for the API
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $('#events').empty()
        
        for ( let i = 0; i < response._embedded.events.length; i++) {
        let term = response._embedded.events[i].url;
        let eventsDiv = $("<a  href='" + term + "'></a>")      
        
            let newDiv = $('<p class="eventButton">')
            newDiv.text(response._embedded.events[i].name);
            console.log(response._embedded.events[i].url)
            newDiv.append(" " +response._embedded.events[i].dates.start.localDate)
            

            eventsDiv.append(newDiv)
            console.log("eventsdiv", eventsDiv)
            
            $('#events').append(eventsDiv)
        }
           
            return response._embedded.events[0].id;
    }).then(res => {
        setTimeout(() => {
            displayPhotos(res);
        }, 1000)
    
    })
}



$("#searcher").on("click", function(e) {
    
    e.preventDefault()


    let searchanswer = $("#searchbar").val().trim()
    // $("#sectionheader").text(searchanswer)
    console.log(searchanswer)
    eventSearch(searchanswer)
    footerBull()
})

function footerBull() {
    $(".footer").hide()
    $(".footer2").show()
}


