// ES6 export
export default function Navbar(){

    $('.nav-link').on('click',function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
     
    });
};

