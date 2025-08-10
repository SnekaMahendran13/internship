document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
const resumeBtn = document.getElementById('resumeDownload');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
   
    setTimeout(() => {
      alert('Your download should start. Thank you!');
    }, 300);
  });
}



document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully!');
  this.reset();
});


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 70;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
      document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add('active');
    }
  });
});
