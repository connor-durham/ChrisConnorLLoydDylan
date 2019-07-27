function displayBio(bio){ 
    alert(bio); 
    // let bioDiv = $('<div>');
    $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + bio + "&api_key=7a7de95b5bc3f285d79afa7320acda1e&format=json",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $("#bandBio").text(data.artist.bio.summary);
            // bioDiv.attr("src", data.artist.bio.summary);
            // bioDiv.attr("id", "bioWords");
            // $("#bandBio").append(bioDiv);
            console.log(data.artist.bio.summary)
            
        },
    });
}
$("#searcher").on("click", function(e) {
    
    e.preventDefault()
    var bio = $("#searchbar").val().trim();
    displayBio(bio);

})