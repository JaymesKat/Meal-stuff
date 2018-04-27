$("button").click(function(){
    $.ajax({url: "https://api.eatstreet.com/publicapi/v1/restaurant/search?'", success: function(result){
        $("#div1").html(result);
    }});
});

$(function() {
    var form = $('#ajax-contact');

    var display= $('#results_display');

    $("#register").submit(function(event) {
        event.preventDefault();
    
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: 'https://api.eatstreet.com/publicapi/v1/register-user',
            data: formData,
            contentType: "application/json",
            dataType: "json",
        })
        .done(function(response) {            
            $('#success').html(data);
        })
        .fail(function(error){
            $('#success').html("<p>No restaurants found</p>");
        })
    });
    
    $("#search").submit(function(event) {
        event.preventDefault();
    
        var searchData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: 'https://api.eatstreet.com/publicapi/v1/restaurant/search?',
            data: searchData,
            contentType: "application/json",
            dataType: "json",
        })
        .done(function(response) {            
            $('#search').val('');
            $('#search_results').html(data);
        })
    });
});