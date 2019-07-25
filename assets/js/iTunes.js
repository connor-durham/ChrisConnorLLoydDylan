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