// background-image: url(/assets/img/logo/holvamp-logo-bgblack-v.jpg);
export default function YoutubePage(){
    function youtubePageShow(){
    $('#root').append(`
    <div id="youtube-page">
        <div class="yt-wrapper">
            <h1 class="text-center">Video terbaru kami</h1>
            <div id="yt-subscriber-count-wrapper">
                <!-- append -->
            </div>
            <div class="ratio ratio-16x9" id="yt-video-embed-wrapper">
                <!-- append -->
                <iframe
                src="https://www.youtube.com/embed/cYbnVQLOBs0">
                </iframe>
            </div>
        </div>
    </div>
    `);
    }
    var youtubeDataAPIThumbAndSubsCount = {
        "url": "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UCPTBQ8AxU-wsWVcdVgr55Yg&key=AIzaSyCARVJX9BRzK7WVfLJ5lyCOe5dABy-KfeQ",
        "method": "GET",
        "timeout": 0,
    };
      
    $.ajax(youtubeDataAPIThumbAndSubsCount).done(function (response) {
        let ytData = response;
        // youtube thumbnail  
        window.youtubeThumbnail = ytData.items[0].snippet.thumbnails.medium.url;
        console.log(youtubeThumbnail);
         // youtube title
         window.youtubeTitle = ytData.items[0].snippet.title;
         console.log(youtubeTitle);
         // youtube subcribe count
         window.youtubeSubsCount = ytData.items[0].statistics.subscriberCount;
         console.log(youtubeSubsCount);
        $('#yt-subscriber-count-wrapper').append(`
        <a href="https://www.youtube.com/channel/UCPTBQ8AxU-wsWVcdVgr55Yg" target="blank">
            <img src="${youtubeThumbnail}" class="img-thumbnail">
        </a>
        <div id="yt-title-subs-wrapper">
            <h3 class="text-muted" id="yt-channel-title">
                ${youtubeTitle}
            </h3>
            <h4  class="text-muted" id="yt-subscriber-count">
                Subscribers: ${youtubeSubsCount} 
            </h4>
        </div>
        `);  
    });
    
    youtubePageShow();  
    // API untuk video
    // exceed API
    // var youtubeAPIDataVideo = {
    //     "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPTBQ8AxU-wsWVcdVgr55Yg&key=AIzaSyCARVJX9BRzK7WVfLJ5lyCOe5dABy-KfeQ&maxResults=1&order=date",
    //     "method": "GET",
    //     "timeout": 0,
    // };
    
    // $.ajax(youtubeAPIDataVideo).done(function (response) {
    //     let ytData = response;
    //     // console.log(ytData);
    //     let items = ytData.items;
    //     $.each(items, function(i,elements){
    //         let videoId = elements.id.videoId;
    //         console.log(videoId);
    //         $('#yt-video-embed-wrapper').append(`
    //             <iframe
    //                 src="https://www.youtube.com/embed/${videoId}">
    //             </iframe>
    //         `);
    //     });
    // });

   
}




