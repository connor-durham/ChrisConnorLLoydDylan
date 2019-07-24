function iTunesSearch() {
  let queryUrl = "https://itunes.apple.com/search?term=nirvana&country=US&callback=callback&limit=2"

  $.ajax(
    {
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      console.log("oh hey again")
    });
}
iTunesSearch();
console.log("hey")
function callback() {
  console.log("YESSSSSS")
}