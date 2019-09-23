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
  "Violin"
];

$(document).ready(function() {
  for (var i = 0; i < topics.length; i++) {
    var button = $("<button>")
      .text(topics[i])
      .addClass("instrument")
      .attr({ id: topics[i] });
    $("#music").append(button);
  }

  $(".instrument").on("click", function() {
    console.log(this.id);
    var thisButton = this.id;
    var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      apiKey +
      "&q=" +
      thisButton +
      "&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r") {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(gifImage);
          $("#giphyImages").prepend(gifDiv);
        }
      }
    });
  });
});
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
  "Violin"
];
$("#searchButton").on("click", function() {
  var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";
  var userSearch = $("#searchInput").val();
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=" +
    userSearch +
    "&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      // !!!buttons show up but not search input text and not functional!!!
      var input = $("#searchInput");
      var button = $("<button>")
        .text(input)
        .addClass("instrument")
        .attr({ id: topics[i] });
      $("#music").append(button);

      if (results[i].rating !== "r") {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var gifImage = $("<img>");
        gifDiv.append(p);
        gifDiv.append(gifImage);
        $("#giphyImages").prepend(gifDiv);
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");
        gifImage.prepend(p);
        gifDiv.prepend(showImage);
        gifDiv.prepend(instrumentImage);
        $("#music").append(gifDiv);
      }
    }
  });
});
