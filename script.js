const targetDate = new Date("July 12, 2026 13:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("timer").innerHTML =
    days + " Hari " +
    hours + " Jam " +
    minutes + " Menit " +
    seconds + " Detik";

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Acara sedang berlangsung";
  }
}, 1000);

function createShootingStar() {
  // spawn 1-3 stars per call for a fuller sky
  const count = Math.random() < 0.7 ? (Math.random() < 0.5 ? 1 : 2) : 3;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    // randomize starting position across the viewport
    const startTop = Math.random() * 60 + 5; // 5% - 65%
    const startLeft = Math.random() * 30 - 10; // can start slightly off-screen left
    star.style.top = `${startTop}%`;
    star.style.left = `${startLeft}%`;
    // randomize size & thickness
    const thickness = Math.random() * 3 + 2; // 2-5px height (we adjust via transform scaleY)
    const lengthScale = Math.random() * 6 + 6; // tail length multiplier
    star.style.height = `${Math.max(2, thickness)}px`;
    // random animation duration so stars vary
    const duration = (Math.random() * 0.9) + 0.8; // 0.8s - 1.7s
    star.style.animationDuration = duration + 's';
    // slightly rotate differently for variety
    const angle = -15 - Math.random() * 25;
    star.style.transform = `translate3d(0,0,0) rotate(${angle}deg)`;
    // append and schedule removal
    document.body.appendChild(star);
    setTimeout(() => star.remove(), (duration * 1000) + 200);
  }
}

function createFallingStar(){

    const star = document.createElement("div");

    star.className = "falling-star";

    star.style.left = Math.random()*100 + "vw";

    star.style.height = (Math.random()*60 + 60) + "px";

    const duration = Math.random()*5 + 5;

    star.style.animationDuration = duration + "s";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },duration*1000);

}

function createSnowflake() {
  const flake = document.createElement('div');
  flake.className = 'snowflake';
  // use a simple circle or snow character
  flake.textContent = '❄';
  const size = Math.random() * 12 + 8; // px
  flake.style.fontSize = size + 'px';
  flake.style.left = Math.random() * 100 + 'vw';
  const duration = Math.random() * 6 + 6; // seconds
  flake.style.animationDuration = duration + 's';
  // slight horizontal offset for variety
  flake.style.transform = `translateX(${(Math.random() - 0.5) * 20}px)`;
  document.body.appendChild(flake);

  // remove after animation
  setTimeout(() => flake.remove(), (duration * 1000) + 100);
}

function getBackgroundEffect() {
  const params = new URLSearchParams(window.location.search);
  const bg = params.get('bg');
  if (!bg) return 'stars';
  return bg.toLowerCase();
}

function createMagicSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const size = Math.random() * 4 + 3;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 90 + 5}vw`;
  sparkle.style.top = `${Math.random() * 80 + 5}vh`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 4}s`;
  sparkle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
  const glow = Math.random() * 14 + 12;
  sparkle.style.boxShadow = `0 0 ${glow}px rgba(255,255,255,0.85)`;
  const magicGlow = document.querySelector('.magic-glow');
  if (!magicGlow) return;
  magicGlow.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), (parseFloat(sparkle.style.animationDuration) * 1000) + 200);
}

const backgroundEffect = getBackgroundEffect();

if (backgroundEffect === 'snow') {
  // create snow fairly often
  setInterval(createSnowflake, 300);
} else {
  // default: dense shooting stars — spawn frequently for a dramatic sky
  // interval determines frequency of spawn bursts (lower = denser)
  const starInterval = 180; // ms between spawn bursts (lower = denser)
  setInterval(createShootingStar, starInterval);
  setInterval(createMagicSparkle, 260);
}
// Bintang cahaya yang turun perlahan
setInterval(() => {

    if(Math.random() < 0.5){
        createFallingStar();
    }

},3000);

const openButton = document.getElementById('openInvitationButton');
const introOverlay = document.getElementById('introOverlay');
const invitationContent = document.getElementById('invitationContent');
const guestbookForm = document.getElementById('guestbookForm');
const guestNameDisplay = document.getElementById('guestNameDisplay');
const backgroundMusic = document.getElementById("backgroundMusic");
const whatsappNumber = '6282268667440';

function getRecipientName() {
  const params = new URLSearchParams(window.location.search);
  const rawName = params.get('to') || params.get('nama') || params.get('guest');
  if (!rawName) return 'Nama Tamu Undangan';
  return decodeURIComponent(rawName).trim().replace(/\+/g, ' ');
}

if (guestNameDisplay) {
  guestNameDisplay.textContent = getRecipientName();
}

if (openButton && introOverlay && invitationContent) {
  openButton.addEventListener("click", () => {

    introOverlay.classList.add("hidden");
    invitationContent.classList.remove("hidden");

    backgroundMusic.play().catch(() => {});
    updateMusicButton();

  });
}

if (guestbookForm) {

    guestbookForm.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.getElementById("guestName").value;
        const pesan = document.getElementById("guestMessage").value;

        const card = document.createElement("div");

        card.className = "message-card";

        card.innerHTML = `
            <h5>🌟 ${nama}</h5>
            <p>${pesan}</p>
        `;

        document.getElementById("guestMessages").appendChild(card);

        guestbookForm.reset();

    });

}

// Prev button on invitation page — return to intro overlay
const prevButton = document.getElementById('prevButton');
if (prevButton && introOverlay && invitationContent) {
  prevButton.addEventListener('click', function () {
    invitationContent.classList.add('hidden');
    introOverlay.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (backgroundMusic && !backgroundMusic.paused) {
      backgroundMusic.pause();
      
    }
  });
}

// Next button: show page 3
const nextButton = document.getElementById('nextButton');
const page3 = document.getElementById('page3');
if (nextButton && invitationContent && page3) {
  nextButton.addEventListener('click', function () {
    invitationContent.classList.add('hidden');
    page3.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Back from page 3 to invitation
const backToInvite = document.getElementById('backToInvite');
if (backToInvite && invitationContent && page3) {
  backToInvite.addEventListener('click', function () {
    page3.classList.add('hidden');
    invitationContent.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
