

$("#searcher").on("click", function(e) {



    $("#holder").css("display","block");


    e.preventDefault()

    $("#videoholder").empty()

    var videos = $("#searchbar").val().trim()

    var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +videos+ "&order=viewCount&relevanceLanguage=en&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyA7HK1zi1Uozn3nq7QtyCpY_LBtjA_82l8"

    console.log(videos)
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response.items[0].id.videoId)
        for (let i=0; i<3; i++) {
            let video = response.items[i].id.videoId
            let URL = "https://www.youtube.com/embed/" + video
            let frame = $("<iframe class='youpoop'>")
            frame.attr("width", "560")
            frame.attr("height", "315")
            frame.attr("src", URL)
            frame.attr("id", "video")
            frame.attr("frameborder", "0")
            frame.attr("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture")
            $("#videoholder").append(frame)
            
        }
    

    })

})

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/D1OgwR7JuTg" id="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


