function displayBio(bio){ 
    

    $.ajax({
        type: "GET",
        url: "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + bio + "&api_key=bf773c5707e336cebbff0b38c08db0c2&format=json",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
            console.log(data);
            let bioShit = $("<p class='bio'>").html(data.artist.bio.summary);
            let bandName = (data.artist.name)
            $("#bandBio").html(bioShit);
            // bioDiv.attr("src", data.artist.bio.summary);
            // bioDiv.attr("id", "bioWords");
            // $("#bandBio").append(bioDiv);
            console.log(data.artist.bio.summary)
            $("#sectionheader").text(bandName)
            
        },
    });
}
$("#searcher").on("click", function(e) {
    
    e.preventDefault();
    var bio = $("#searchbar").val().trim();
    displayBio(bio);

})
