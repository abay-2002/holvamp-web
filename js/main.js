// // ES6 Import
import {default as Navbar} from './navbar.js';
import {default as Home} from './home.js';
import {default as Footer} from './footer.js'
import {default as BootstrapFunction} from './bootstrap.js';

Navbar();
Home();
Footer();
BootstrapFunction();

// $('.nav-link').on('click',function(event){
//     $('#root').html('');
//     let kategori = $(this).attr('title');
//     console.log(kategori);

//     let content = "";

//     if(kategori == 'home'){
//         console.log('ini adalah halaman home');

//         content += Navbar() + Home() + Footer();

//     }else if(kategori == 'youtube'){
//         console.log('ini adalah halaman youtube');
//     }else if(kategori == 'social'){
//         console.log('ini adalah halaman social');
//     }


// });

