var App = (function () {
    'use strict';
    App.newsfeed = function( ){
            var client = new $.RestClient('https://api.ersnet.org/');
            client.add('news');
            client.news.read().done(function (data){
                console.log(data);
                for( var i = 0; i < data.length -1; i++){
                    var url = "https://53ed64a9-671f-4e65-9f57-5e736e3d5d62-hosted.cloudcms.net/preview/node/"+data[i].imageId+"?name=image500&size=500";
                    var image ='<div class="card-image"' 
                        +'style="background-size:cover;background-repeat: no-repeat;height:150px;' 
                        +'background-image: url(\''+url+'\');' 
                        +'background-position: center center;"></div>';
                    console.log("array" + i, data[i]);
                    $(
                    '<li class="list-group-item panel panel-full-default">'
                        +'<div class="card card-default card-dashboard">'
                            +image
                            +'<div class="card-title">'
                                +'<h2 style="font-size:20px;">'+data[i].title+'</h2>'
                            +'</div>'                 
                            +'<div class="card-content">'
                                +data[i].lead
                            +'</div>'	                
                            +'<div class="card-action">'
                                +'<a href="'+data[i].url+'" target="_blank"  class="btn btn-dark-primary pull-right">Read more...</a>'
                            +'</div>'
						+'</div>'
                    +'</li>'
                    ).appendTo($('#news-feed'));
                }

            });
    };        
    return App;
})(App || {});
