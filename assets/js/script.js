
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference or default to dark mode
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
  }

  // Toggle theme on switch change
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  const tl = anime.timeline({
    autoplay: true
  });
  tl.add({
      targets: '.circle',
      keyframes: [
          { opacity: 0, duration: 150 },
          { opacity: 1, duration: 150 },
          { opacity: 0, duration: 150 },
          { opacity: 1, duration: 150 },
          { opacity: 0, duration: 150 },
          { opacity: 1, duration: 150 },
          { opacity: 0, duration: 150 },
          { opacity: 1, duration: 150 },
          { opacity: 0, duration: 150 },
          { opacity: 1, duration: 150 }
      ],
      easing: 'easeInOutSine'
  })
  .add({
      targets: '.circle',
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
  })
  .add({
    targets: '.nav-links',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad'
  })

  .add({
    targets: '.animated-text',
    translateY: [40, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=700")

  .add({
    targets: '.animated-text-name',
    translateY: [40, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=700")

  .add({
    targets: '.animated-text-role',
    translateY: [40, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=700")

  .add({
    targets: '.content-social',
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=800")

  .add({
    targets: '.buttons',
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=800")

  .add({
    targets: '.hero .container .content',
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=900")

  .add({
    targets: '.number-projects',
    innerHTML: [0, 100+'+' ],
    round: 1,
    easing: 'easeOutQuad',
  }, "-=1000")

  .add({
    targets: '.number-clients',
    innerHTML: [0, 50+'+' ],
    round: 1,
    easing: 'easeOutQuad',
  }, "-=1000")

  .add({
    targets: '.photo-hero',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
  }, "-=700")

  .finished.then(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  });

  const target = document.querySelector('.services-title');
  const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime.timeline()
          .add({
            targets: ".services-title",
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutQuad"
          })
          .add({
            targets: ".services-description",
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: "easeOutQuad"
          }, "-=700")
          .add({
            targets: ".card",
            opacity: [0, 1],
            // translateY: [70, -10],
            duration: 1000,
            direction: "alternate",
            easing: "easeOutQuad",
            delay: function(el, i)  {
              return i * 150;
            },
            endDelay: function(el, i, l) {
              return (l - 1) * 150;
            },

          }, "-=700")
          obs.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.0,
      rootMargin: "0px 0px 100px 0px"
    }); 

    observer.observe(target);

    const target2 = document.querySelector('.about-me-title');
    const observer2 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime.timeline()
            .add({
              targets: ".about-me-title",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            })
            .add({
              targets: ".about-me-description",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            }, "-=700")
            obs.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.0,
        rootMargin: "0px 0px 100px 0px"
      });

      observer2.observe(target2);

      const target3 = document.querySelector('.about-me-text');
      const observer3 = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              anime.timeline()
              .add({
                targets: ".about-me-photo",
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 1000,
                easing: "easeOutQuad"
              })
              .add({
                targets: ".about-me-text",
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 1000,
                easing: "easeOutQuad"
              }, "-=700")
              obs.unobserve(entry.target);
            }
          });
        }, { 
          threshold: 0.0,
          rootMargin: "0px 0px 100px 0px"
        });

        observer3.observe(target3);

    const target4 = document.querySelector('.skill .container h1');
    const observer4 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime.timeline()
            .add({
              targets: ".skill .container h1",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            })
            .add({
              targets: ".skill .container p",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            }, "-=700")
            .add({
              targets: ".skill .container .skill-wrapper .skill-card",
              opacity: [0, 1],
              duration: 1000,
              direction: "alternate",
              easing: "easeOutQuad",
              delay: function(el, i)  {
                return i * 150;
              },
              endDelay: function(el, i, l) {
                return (l - 1) * 150;
              },
            }, "-=700")
            const bars = document.querySelectorAll(".progress");

            bars.forEach(bar => {
              const target = parseInt(bar.textContent);
              bar.style.width = "0%";
              bar.textContent = "0%";

              anime({
                targets: bar,
                delay: 1000,
                width: target + "%",
                duration: 1500,
                update: anim => {
                  const current = Math.round((anim.progress / 100) * target);
                  bar.textContent = current + "%";
                },
                complete: () => {
                  bar.textContent = target + "%";
                }
              });
            });
            obs.unobserve(entry.target);
          }
          
        });
      }, { 
        threshold: 0.0,
        rootMargin: "0px 0px 100px 0px"
      });

      observer4.observe(target4);

      const target5 = document.querySelector('.portfolio .container h1');
      const observer5 = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              anime.timeline()
              .add({
                targets: ".portfolio .container h1",
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 1000,
                easing: "easeOutQuad"
              })
              .add({
                targets: ".portfolio .container p",
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 1000,
                easing: "easeOutQuad"
              }, "-=700")
              obs.unobserve(entry.target);
            }
          });
        }, { 
          threshold: 0.0,
          rootMargin: "0px 0px 100px 0px"
        });

        observer5.observe(target5);
    const target6 = document.querySelector('.portfolio .container .portfolio-wrapper .portfolio-card');
    const observer6 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime.timeline()
            .add({
              targets: ".portfolio .container h1",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            })
            .add({
              targets: ".portfolio .container p",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: "easeOutQuad"
            }, "-=700")
            
            .add({
              targets: ".portfolio .container .portfolio-wrapper .portfolio-card",
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 1000,
              // direction: "alternate",
              // easing: "easeOutQuad",
              delay: function(el, i)  {
                return i * 150;
              },
              endDelay: function(el, i, l) {
                return (l - 1) * 150;
              },
            }, "-=700")
            obs.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.0,
        rootMargin: "0px 0px 100px 0px"
      });

      observer6.observe(target6);
});