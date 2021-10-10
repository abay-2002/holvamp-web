// ES6 export

import {default as Home} from './home.js';
import {default as YoutubePage} from './youtubepage.js';
import {default as Footer} from './footer.js';
export default function AppRender(){
    $('#root').html(`
    <nav class="navbar navbar-expand-lg navbar-dark costum-bg-color">
    <div class="container-fluid">      
        <a class="navbar-brand" href="#">
            <img src="assets/img/logo/web-navbar-brand200x33.png">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home" title="home" >
                    <img src="assets/img/ui/home-white.png" class="brightness" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home" value> 
                    <span class="ui-desc">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#youtube" title="youtube">
                    <img src="assets/img/ui/youtube-white.png" class="brightness" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Youtube">
                    <span class="ui-desc">Youtube</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#social" title="social">
                    <img src="assets/img/ui/media-white.png" class="brightness" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Social">
                    <span class="ui-desc">Social</span>
                </a>
              </li>
              <!-- 
              <li class="nav-item">
              <a class="nav-link active"  href="#">Blog</a>
              </li>
              -->
          </ul>  
        </div>
    </div>
  </nav>
    `);
  // logika halaman/page pada navbar
  // let kategori = $('')

  $('.nav-link').on('click',function(){
    let kategori = $(this).attr('title');
    console.log(kategori);
    if(kategori == 'home'){
      console.log('ini page home');
      $('#root').html('');
      AppRender();
      Home();
      Footer();
    }else if(kategori == 'youtube'){
      console.log('ini page youtube');
      $('#root').html('');
      AppRender();
      YoutubePage();
      Footer();
    }else if(kategori == 'social'){
      console.log('ini page social');
    }
  });
};
