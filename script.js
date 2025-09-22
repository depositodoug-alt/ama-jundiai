
document.addEventListener('DOMContentLoaded', function(){
  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', function(){
      lbImg.src = this.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLB();
  });

  function closeLB(){
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  // Mobile menu toggle (simple)
  const menuBtn = document.querySelector('.menu-toggle');
  if(menuBtn){
    menuBtn.addEventListener('click', function(){
      const links = document.querySelectorAll('.topnav .nav-right a');
      links.forEach(a => {
        if(a.style.display === 'inline-block') a.style.display = '';
        else a.style.display = 'inline-block';
      });
    });
  }
});
