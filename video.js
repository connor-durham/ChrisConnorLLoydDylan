$("#searcher").on("click", function(e) {

  e.preventDefault()

  var videos = $("#searchbar").val().trim()

  var queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyBd64aYhZDi9l4WLQ66ABUy0gYifwjV_EU"

  console.log(videos)

  $.ajax({
      url: queryUrl,
      method: "GET"
  }).then(function(response) {
      console.log(response)
  })

})
$("#searcher").on("click", function(e) {

  e.preventDefault()


  let searchanswer = $("#searchbar").val().trim()
  console.log(searchanswer)
  displayVideos()


})