// call jquery

// Event listener for searchButton
$("#searchButton").on("click", function() {
  // Storing our giphy API URL
  var apiKey = ju6uCnRv4cMKILzG5m62vt52JavnVngT;
  var searchInput = $("#searchInput");
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + searchInput + "&limit=10&offset=1&rating=PG-13&lang=en";
console.log(queryURL, "queryURL")
  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var searchImage = $("<img>");

      // Setting the searchImage src attribute to imageUrl
      catImage.attr("src", imageUrl);
      catImage.attr("alt", "search-image");

      // Prepending the searchImage to the images div
      $("#images").prepend(searchImage);
    });
});
