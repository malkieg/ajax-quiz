//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {

        let requestedShow='';
        $('#submit-show').bind('click', function(e)
         {
             requestedShow='';
 e AJAX call
        $.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + requestedShow + '&embed=episodes', {
            method: "GET",
            dataType: "json"
        })


        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                        $("name").html("");
                        $('#name').html(data.name);
                    $('#episodeList').html("");

                    // $('#name').bind('click', function (e) {
                    //     e.preventDefault();

                    //Add the episodes

                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>'+
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
            })
                              //})
        })
             }
         );
    }
)
