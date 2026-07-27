document.addEventListener('DOMContentLoaded',function(){
  const nav=document.getElementById('mainNav');
  window.addEventListener('scroll',function(){
    if(window.scrollY>40){nav.classList.add('scrolled');}else{nav.classList.remove('scrolled');}
  });
  const hbtn=document.getElementById('hamburgerBtn');
  const links=document.querySelector('.nav-links');
  hbtn.addEventListener('click',function(){links.classList.toggle('active');});
  const observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('visible');} });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
  const form=document.getElementById('reserveForm');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      alert('تم إرسال طلب الحجز بنجاح، سنتواصل معكم قريباً.');
      form.reset();
    });
  }
});


// Gallery: click to enlarge one image and shrink the rest
document.addEventListener('DOMContentLoaded', function(){
  const items = Array.from(document.querySelectorAll('.g-item'));
  items.forEach(function(item){
    item.addEventListener('click', function(){
      const isEnlarged = item.classList.contains('enlarged');
      items.forEach(function(i){ i.classList.remove('enlarged','shrink'); });
      if(!isEnlarged){
        item.classList.add('enlarged');
        items.forEach(function(i){ if(i!==item) i.classList.add('shrink'); });
      }
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if(backToTop){
    window.addEventListener('scroll', function(){
      if(window.scrollY>500){backToTop.classList.add('show');}else{backToTop.classList.remove('show');}
    });
  }
});
