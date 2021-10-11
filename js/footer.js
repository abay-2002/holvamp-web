import {default as Home} from './home.js';
import {default as YoutubePage} from './youtubepage.js';
import {default as AppRender} from './AppRender.js';


export default function Footer(){
    $('#root').append(`
    <div class="footer-wrapper">
        <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black" title="home">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black" title="youtube">Youtube</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black" title="social">Social</a></li>
            </ul>
            <p class="text-center text-muted">&copy; 2021 Holvamp</p>
            <p class="text-center text-muted">Made with love by: <a href="http://akbarangkasa.com/" target="blank">akbar angkasa</a></p>
        </footer>
        </div>
    </div>
    `);
    $('.nav-link').on('click', function(){
        let footerLink = $(this).attr('title');
        console.log(footerLink);
        if(footerLink == 'home'){
            $('#root').html('');
            AppRender();
            Home();
            Footer();
          }else if(footerLink == 'youtube'){
            $('#root').html('');
            AppRender();
            YoutubePage();
            Footer();
          }else if(footerLink == 'social'){
          }
    });
}