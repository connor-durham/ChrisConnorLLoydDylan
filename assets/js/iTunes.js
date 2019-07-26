function iTunesSearch(term) {
  // let queryUrl = "https://itunes.apple.com/search?term=" + searchKeyword + "&country=US&callback=callback&limit=2"

  $.ajax(
    {
      url: 'https://itunes.apple.com/search',
      crossDomain: true,
      dataType: 'jsonp',
      data: {
        term: term,
        entity: 'album',
        limit: 24,
        explicit: 'No'
      },
      method: "GET"
    }).then(function(response) {
      console.log(response)
      
      for ( let i = 0; i < response.results.length; i++) {
        console.log(response.results[i].artistName)
        console.log(response.results[i].collectionName)
        console.log(response.results[i].collectionViewUrl)
        console.log(response.results[i].artworkUrl100)

        

        let artName = response.results[i].artistName;
        let albName = response.results[i].collectionName;
        let tunUrl = response.results[i].collectionViewUrl;
        let imgUrl = response.results[i].artworkUrl100;
        let iTunesDiv =$("<a class='albums' href='" + tunUrl + "'>");

        //img tag to display album img
        let image = $("<img>").attr("src", imgUrl);
        //h2 tag for artist name
        let textbox = $("<div>");
        let name = $("<p>").html(artName)
        let album = $("<p>").html(albName)
        iTunesDiv.append(image)
        textbox.append(name)
        textbox.append(album)
        iTunesDiv.append(textbox)
        //p tag for album name
        //adds click function to img so links to iTunes URL

        //append entire iTunes div
        $("#iTunes").append(iTunesDiv);
      }
    });
    
}


function callback() {
  //Empty function that returns callback from iTunes API
}
$("#searcher").on("click", function(e) {
    
  e.preventDefault()
  


  let searchanswer = $("#searchbar").val().trim()
  iTunesSearch(searchanswer)


})