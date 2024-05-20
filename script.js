const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
    document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen judul website
    var homeLink = document.getElementById('homeLink');
    
    // Tambahkan event listener untuk klik
    homeLink.addEventListener('click', function() {
        // Arahkan pengguna ke halaman utama
        window.location.href = 'https://19hs-studio.github.io/';
    });
});
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
