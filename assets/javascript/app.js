// call jquery
$(document).ready(function() {
  // Event listener for searchButton
  $("#searchButton").on("click", function() {
    // Storing our giphy API URL
    var apiKey = ju6uCnRv4cMKILzG5m62vt52JavnVngT;

    // music topics
    var topics = [
      "Guitar",
      "Piano",
      "Drums",
      "Clarinet",
      "Tuba",
      "Saxaphone",
      "Flute",
      "Banjo",
      "Trumpet",
      "Ukulele",
      "Oboe",
      "Trombone",
      "Tambourine",
      "Harp",
      "Violin",
      "Stand-up Bass",
      "Xylophone",
      "Glockenspiel",
      "Harmonica"
    ];

    var queryURL =
      "https://api.giphy.com/v1/gifs/random?api_key=" + music + apiKey;
    
    var userSearch = $(this).attr("topics");

    // AJAX GET request to queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    });

    // After the data from the AJAX request comes back
    then(function(response) {
      console.log(queryURL);
      // Saving the image_original_url property
      var imageUrl = response.data;
      for (var i = 0; i < results.length; i++) {
        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var gifImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          gifImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(gifImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#giphyImges").prepend(gifDiv);
        }
      }
    });
  });
});
