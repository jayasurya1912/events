  // Navbar background on scroll
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Typing effect for heading
  const text = "The Soul of Music";
  const typingElement = document.getElementById("typingText");
  let idx = 0;
  function typeEffect() {
    if (idx < text.length) {
      typingElement.innerHTML = text.substring(0, idx + 1).replace("Music", "<span>Music</span>");
      idx++;
      setTimeout(typeEffect, 120);
    }
  }
  typingElement.innerHTML = "";
  typeEffect();

  // Fade-in subheading and button after typing
  setTimeout(() => {
    document.getElementById("subText").classList.add("fade-in");
    document.getElementById("ctaBtn").classList.add("fade-in");
  }, 2500);