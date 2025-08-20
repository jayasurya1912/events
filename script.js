window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.2; // 20% volume

  // Unmute after user interacts (click/scroll/keypress)
  const enableAudio = () => {
    music.muted = false;
    music.play();
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("scroll", enableAudio);
    document.removeEventListener("keydown", enableAudio);
  };

  document.addEventListener("click", enableAudio);
  document.addEventListener("scroll", enableAudio);
  document.addEventListener("keydown", enableAudio);
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