
    


// function search() {



//     var videos = $("#query").val().trim()

//     var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyBd64aYhZDi9l4WLQ66ABUy0gYifwjV_EU"

//     console.log(videos)
    
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response)
//     })
//  }




$("#add-movie").on("click", function(e) {

    e.preventDefault()

    var videos = $("#movie-input").val().trim()

    var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyBd64aYhZDi9l4WLQ66ABUy0gYifwjV_EU"

    console.log(videos)
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    })

})


