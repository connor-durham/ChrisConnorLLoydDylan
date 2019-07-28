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
      $("#iTunes").empty();
      
      for ( let i = 0; i < response.results.length; i++) {
        console.log(response.results[i].artistName)
        console.log(response.results[i].collectionName)
        console.log(response.results[i].collectionViewUrl)
        console.log(response.results[i].artworkUrl100)

        

        let artName = response.results[i].artistName;
        let albName = response.results[i].collectionName;
        let tunUrl = response.results[i].collectionViewUrl;
        let imgUrl = response.results[i].artworkUrl100.replace('100x100','300x300');
        let iTunesDiv =$("<a class='albums' href='" + tunUrl + "'>");

        //img tag to display album img
        let image = $("<img class='albumCover'>").attr("src", imgUrl);
        //h2 tag for artist name
        let textbox = $("<div class='textbox'>");
        let gradient = $("<div class='gradient'>");
        let name = $("<p class='albumText'>").html(artName)
        let album = $("<p class='albumText'>").html(albName)
        iTunesDiv.append(image)
        iTunesDiv.append(gradient)
        textbox.append(name)
        textbox.append(album)
        iTunesDiv.append(textbox)
        // let template = `
        // <a class='albums' href='${tunUrl}'>
        //   <img class='albumCover" src="${imgUrl}">
        //   <div class='textBox'>
        //     <span class='artistName'>${artName}</span>
        //     <span class='albumName'>${albName}</span>
        //   </div>
        // </a>
        // `
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