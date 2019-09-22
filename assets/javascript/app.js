// call jquery
$(document).ready(function() {

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
    "Stand-up Bass"
  ];


// makes var topics into buttons
  for(var i= 0; i < topics.length; i++) {
    var button = $("<button>").text(topics[i]).addClass('instrument').attr({'data-name': topics[i]});
    $("#music").append(button)
  }

  // !!!buttons clicked won't search button text!!!
  $(".instrument").on("click", function()  {

    var thisButton = $('#instrument').val();

    var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";

    var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + thisButton + "&limit=10";
  

     $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(giphy) {
      currentGif = giphy.data;
      $.each(currentGif, function(button,value){
      animatedGif= value.images.original.url;
      pausedGif = value.images.original_still.url;
    })})

    .then(function(response) {
      // Saving the image_original_url property
      var results = response.data;
      console.log(results)
      for (var i = 0; i < results.length; i++) {
        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing result rating
          var rating = results[i].rating;

          // Create paragraph tag with result rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var gifImage = $("<img>");

          // Giving image tag src attribute of proporty pulled from result item
          gifImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and gifImage created to the "gifDiv" created
          gifDiv.append(p);
          gifDiv.append(gifImage);

          // Prepending gifDiv to "#giphyImages" div HTML
          $("#giphyImages").prepend(gifDiv);
        }
      }
  })
})

  
       
  // add functionality
  // make gifs static, click to active, click to static
  // Event listener for searchButton
  $("#searchButton").on("click", function() {
    // Storing our giphy API URL
    var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";

    var userSearch = $("#searchInput").val();

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + userSearch + "&limit=10";
    
    // AJAX GET request to queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      // Saving the image_original_url property
      var results = response.data;
      console.log(results)
      for (var i = 0; i < results.length; i++) {
        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing result rating
          var rating = results[i].rating;

          // Create paragraph tag with result rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var gifImage = $("<img>");

          // Giving image tag src attribute of proporty pulled from result item
          gifImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and gifImage created to the "gifDiv" created
          gifDiv.append(p);
          gifDiv.append(gifImage);

          // Prepending gifDiv to "#giphyImages" div HTML
          $("#giphyImages").prepend(gifDiv);
        }
      }
    });
  });
});
