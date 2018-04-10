var App = (function () {
    'use strict';
    App.newsfeed = function(){
            var client = new $.RestClient('https://api.ersnet.org/', {
                cache: 60, //This will cache requests for 60 seconds
                cachableMethods: ["GET"] //This defines what method types can be cached (this is already set by default)
            });
            // var client = new $.RestClient('http://localhost:3030/');

            client.add('news');
            client.news.read({limit:5}).done(function (data){
                var articles = data.data;
                for( var i = 0; i < articles.length -1; i++){
                    if(articles[i].image) {
                        console.log(articles[i]);
                        var image = 
                            '<div class="card-image"' 
                            +'style="background-size:cover;background-repeat: no-repeat;height:200px;' 
                            +'background-image: url(\'' + articles[i].image + '\');' 
                            +'background-position:' + articles[i].itemImageAlignment + ' center;"></div>';
                    } else {
                        var image = '';
                    }
                    $(
                    '<li class="list-group-item panel panel-full-default">'
                        +'<div class="card card-default card-dashboard">'
                            +image
                            +'<div class="card-title">'
                                +'<h2 style="font-size:20px;">' + articles[i].title + '</h2>'
                            +'</div>'                 
                            +'<div class="card-content">'
                                + articles[i].leadParagraph
                            +'</div>'	                
                            +'<div class="card-action">'
                                +'<a href="' + articles[i].url + '" target="_blank"  class="btn btn-dark-primary pull-right">Read more...</a>'
                            +'</div>'
						+'</div>'
                    +'</li>'
                    ).appendTo($('#news-feed'));
                }

            });
    };        
    return App;
})(App || {});
