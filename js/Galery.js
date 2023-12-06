let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {    let h1 = entry.target.querySelector('h1');
        if (entry.isIntersecting) {      h1.classList.add('fadeIn');
        } else {      h1.classList.remove('fadeIn');
        }  });
}, { threshold: [0.5] });

document.querySelectorAll('section').forEach(section => {  observer.observe(section);
});
/*Parallax Effect*/
document.querySelectorAll('section').forEach(section => {  section.addEventListener('mousemove', function(e) {
    let moveX = (e.pageX * -1 / 60);    let moveY = (e.pageY * -1 / 60);
    this.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;  });
});
