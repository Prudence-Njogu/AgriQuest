function showComingSoon() {
  const popup = document.getElementById("comingSoonPopup");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closePopup() {
  const popup = document.getElementById("comingSoonPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

        
        
        // Add smooth scrolling behavior for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        // window.addEventListener('scroll', () => {
        //     const header = document.querySelector('header');
        //     if (window.scrollY > 100) {
        //         header.style.background = 'rgba(54, 93, 159, 0.95)';
        //         header.style.backdropFilter = 'blur(20px)';
        //     } else {
        //          header.style.background = 'linear-gradient(135deg,rgb(83, 100, 176) 0%,rgb(13, 28, 94) 100%)';
        //          header.style.backdropFilter = 'blur(10px)';
        //     }
        // });

        // Add intersection observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    //      document.querySelector('.cta-button').addEventListener('click', () => {
    //   alert('Comming Soon!');
    //      });
        //on scroll navbar  changes colour from white to black
        // Change navbar text color on scroll
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navLinks.classList.add('scrolled');
    } else {
      navLinks.classList.remove('scrolled');
    }
  });
});

        //add an on click, the app is coming soon