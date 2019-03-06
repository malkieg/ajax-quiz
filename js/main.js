//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {

        let requestedShow='';
        $('#submit-show').bind('click', function(e)
         {

             e.preventDefault();
             requestedShow=document.getElementById('requested').value;
             requestedShow = requestedShow.replace(/\s/g, "+");
            console.log(requestedShow);


        //Make the AJAX call
        $.ajax('http://api.tvmaze.com/search/shows?q=' + requestedShow, {
            method: "GET",
            dataType: "json"
        })


        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                    $('#name').append(data.name);
                    //Add the episodes
                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>'+
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
            })
        })
         });
    }
)
