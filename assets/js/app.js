
 $("button").on("click", function() {
    var tvShows = $(this).attr("data-show");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      tvShows + "&api_key=IiePoQlGZmTVVGzigF3T900cVaP3b7wD&limit=10";
    
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .done(function(response) {
        console.log(queryURL);

        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          
          var newDiv = $("<div>");
          //Create <p> tag to include the ratings on gif results
          var p = $("<p>").text("Rating: " + results[i].rating);
          //Create <img> tag
          var showImage = $("<img>");
          //Add the following attributes to <img> tag
          showImage.attr("src", results[i].images.fixed_height_still.url);
          showImage.attr("data-still", results[i].images.fixed_height_still.url);
          showImage.attr("data-animate", results[i].images.fixed_height.url);
          showImage.attr("data-state", "still");
          showImage.addClass("gifImages");
          
         
          newDiv.append(p);
          newDiv.append(showImage);

          $("#display-gifs").prepend(newDiv);
        }
        /
        $(".gifImages").on("click", function() {

          var state = $(this).attr("data-state");
          console.log(this);

          if (state === "still") {
            $(this).attr("src",$(this).attr("data-animate"));

            $(this).attr("data-state", "animate");

          }else{
            $(this).attr("src",$(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        })
      });
      //adding button per user input 
      function renderButtons() {

        $(".buttons-display").empty();

        for (var i = 0; i < tvShows.length; i++) {
          //Creating new btn tag and adding attributes 
          var newBtn = $("<button>");
          newBtn.addClass("btn btn-info btn-lg");
          newBtn.attr("data-show");
          newBtn.text(tvShows[i]);
          $(".buttons-display").append(newBtn);

          console.log(button-display);
        }
      }
      $("#add-show").on("click", function(event) {
        event.preventDefault();

        var newTvShow = $("#show-input").val().trim();

        tvShows.push(newTvShow);

        renderButtons();

      });
     

  });

  