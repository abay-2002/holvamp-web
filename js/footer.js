export default function Footer(){
    $('#root').append(`
    <div class="footer-wrapper">
        <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black">Youtube</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 costum-font-color-black">Social</a></li>
            </ul>
            <p class="text-center text-muted">&copy; 2021 Holvamp</p>
            <p class="text-center text-muted">By: <a href="http://akbarangkasa.com/" target="blank">akbar angkasa</a></p>

        </footer>
        </div>
    </div>
    `);
}