// function displayPhotos() {
//     // var events = $(this).attr("data-name");
//     var queryUrl = "https://app.ticketmaster.com/discovery/v2/events/vvG1VZ4R7OiLZV/images.json?apikey=RncxtNn2EJaysh6A9ZPsAFJBB3p71oXX&limit=5"
    
 
//  // ajax call for the API
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         console.log(response.images);
//         $("#start").attr("src=" +  response.images[0].url)
//     })
//  }
// // displayPhotos();

// $("#searcher").on("click", function(e) {
    
//     e.preventDefault()
//     let searchanswer = $("#searchbar").val().trim()
//     console.log(searchanswer)
//     displayPhotos()


// })
