

var typed = new Typed('#element', {
    strings: [ '','COKE',],
    typeSpeed: 70,
  });
  
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            document.body.style.backgroundColor = getComputedStyle(section).backgroundColor;
        }
    });
});
