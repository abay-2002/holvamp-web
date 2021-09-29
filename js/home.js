export default function Home(){
    $('#root').append(`
    <!-- === DASHBOARD HOME === -->
    <!-- banner -->
    <div id="banner">
      <div class="banner-text">
        <h1 class="text-center text-wrap" id="welcome-text">Hello World!</h1>
        <p class="text-center text-wrap">
            This site is underconstruction :D
            by: <a href="http://akbarangkasa.com/" target="blank">abay</a>
            visit us: <a href="https://www.youtube.com/channel/UCPTBQ8AxU-wsWVcdVgr55Yg" target="blank">Youtube</a> & <a href="https://www.instagram.com/holvamp/" target="blank">Instagram</a>
        </p>
      </div>
    </div>

    <!-- About -->
    <div id="about" class="container" data-aos="fade-up" data-aos-duration="1000">
      <div class="row d-flex justify-content-center align-items-center costume-home-wrapper">
          <div class="costume-home-content">
            <div class="col mx-auto costume-home-img-web">
              <!-- background-img-web disini -->
            </div>
          </div>
          <div class="col mx-auto costume-home-content text-wrap">
            <h1 class="text-center">Holvamp?</h1>
            <p class="text-center">Sebuah platform konten edukasi pada bidang development khususnya pada bidang Front-end development.</p> 
          </div> 
      </div>  
    </div>

    <!-- Our work -->
    <div class="costume-white-bg-wrapper" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div id="describe" class="costume-grid-container">
          <div class="costume-grid-item desc-bg-img">
            <!-- background-img disini -->
          </div>
          <div class="costume-grid-item desc">
            <div>
              <h1 class="text-center">Fokus Holvamp</h1>
              <p class="text-center text-wrap">
                Kami membuat video tutorial pemprograman khususnya pada bidang Front-end development dan terus berkembang berusaha berkontribusi untuk dunia software development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  <!-- === PENUTUP HOME === -->
    `);
};