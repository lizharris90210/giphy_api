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

  $(document).on("click", ".instrument", function() {
    console.log(this.id);
    var thisButton = this.id;
    var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      apiKey +
      "&q=" +
      thisButton +
      "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r") {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var gifImage = $("<img>");
          gifDiv.append(p);
        gifDiv.append(gifImage);
        gifImage.addClass('gifImage');
        $("#giphyImages").prepend(gifDiv);
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still"); 
        $("giphyImages").append(gifDiv);
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
$(document).on('click', '.gifImage', function() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
  console.log(state);
});

$("#searchButton").on("click", function() {
  var apiKey = "ju6uCnRv4cMKILzG5m62vt52JavnVngT";
  var userSearch = $("#searchInput").val();
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=" +
    userSearch +
    "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    var results = response.data;
    var input = $("#searchInput").val();
    console.log(input)
    var button = $("<button>")
      .text(input)
      .addClass("instrument")
      .attr({ id: input });
    $("#music").append(button);

    for (var i = 0; i < results.length; i++) {
      // !!!buttons show up but not search input text and not functional!!!

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
        $("giphyImages").append(gifDiv);
      }
    }
  });
});
