const songs = [
    "songs/findyou.mp3",
    "songs/saintlaurent.mp3",
    "songs/glowinnn.mp3",
    "songs/overandover.mp3",
    "songs/nextone.mp3",
    "songs/toolong.mp3"
];

const audio = document.getElementById("audioPlayer");
const nav = document.querySelector('nav');
const muteBtn = document.getElementById("muter");
const muteIcon = document.getElementById("muteIcon");
const muteText = document.getElementById("muteText");
const mainContent = document.getElementById("about");
const closeBtn = document.getElementById("xout");

const sectionMap = {
  music: renderMusicSection,
  about: renderAboutSection,
  contact: renderContactForm,
  newsletter: renderNewsletterForm
};

function renderAboutSection() {
  const about = document.createElement('section');
  about.id = 'about';
  const abtContent = document.createElement('div');
  abtContent.id = 'abtContent';
  const aboutBody = document.createElement('span');
  aboutBody.id = 'aboutBody';
  aboutBody.textContent = "An emotionally raw, genre-building artist crafting a cinematic fusion of pop, rap, and R&B, layered with nostalgic electronic textures. Signed to UMPG as a songwriter in 2020, he's now stepping into the spotlight as a recording"
  const aboutBody2 = document.createElement('span');
  aboutBody2.id = 'aboutBody2';
  aboutBody2.textContent = "artist with a distinct voice and a powerful catalog of unreleased music."
  const aboutImg = document.createElement('img');
  aboutImg.id = 'abtImg';
}

let isMuted = false;
let audioStarted = false;

audio.autoplay = true;
audio.muted = false;

const randomIndex = Math.floor(Math.random() * songs.length);
audioPlayer.src = songs[randomIndex];

// Test autoplay
audio.play().then(() => {
  console.log("Autoplay with sound succeeded.");
  isMuted = false;
  audioStarted = true;
  updateButtonUI();
}).catch(err => {
  console.log("Autoplay with sound was blocked:", err);
  isMuted = true;
  audio.muted = true;
  updateButtonUI();
});

// Mute/unmute button behavior
muteBtn.addEventListener("click", () => {
  if (!audioStarted) {
    audio.muted = false;
    audio.play().then(() => {
      console.log("Audio manually started after user click.");
      audioStarted = true;
      isMuted = false;
      updateButtonUI();
    }).catch(err => {
      console.error("Manual play failed:", err);
    });
    return;
  }

  isMuted = !isMuted;
  audio.muted = isMuted;
  updateButtonUI();
});

// Update mute icon and text
function updateButtonUI() {
  if (muteIcon) {
    muteIcon.src = isMuted ? "img/mute.png" : "img/volume.png";
  }
  if (muteText) {
    muteText.textContent = isMuted ? "UNMUTE" : "MUTE";
  }
}

// Allow random songs to play after initial song is played
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audioPlayer.src = songs[randomIndex];
    audioPlayer.play()
    .then(() => console.log("Playing"))
      .catch(err => console.log("Audio failed:", err));
}

audioPlayer.addEventListener('ended', function() {
    playRandomSong();
});

/*const audio = document.getElementById("audioPlayer");
const muteBtn = document.getElementById("muter");
const muteIcon = document.getElementById("muteIcon");
const muteText = document.getElementById("muteText");

let isMuted = false;            // Start assuming we want sound
let autoplayBlocked = false;    // Will be true if browser blocks autoplay
let hasManuallyStarted = false; // Tracks whether user has manually started the audio

// 1️⃣ Try to autoplay audio with sound
audio.autoplay = true;
audio.muted = false;

audio.play().then(() => {
  // ✅ Autoplay with sound succeeded
  console.log("Autoplay with sound worked.");
  isMuted = false;
  updateButtonUI();
}).catch(err => {
  // ❌ Autoplay blocked (likely due to browser policy)
  console.log("Autoplay with sound was blocked.");
  autoplayBlocked = true;
  isMuted = true;
  audio.muted = true; // Ensure muted until user interacts
  updateButtonUI();
});

// 2️⃣ Mute/unmute button behavior
muteBtn.addEventListener("click", () => {
  // If autoplay failed and audio hasn’t started yet...
  if (autoplayBlocked && !hasManuallyStarted) {
    // ✅ First click: manually start audio with sound
    audio.muted = false;
    const randomIndex = Math.floor(Math.random() * songs.length);
    audioPlayer.src = songs[randomIndex];
    audio.play().then(() => {
      console.log("User manually started playback.");
      hasManuallyStarted = true;
      isMuted = false;
      autoplayBlocked = false; // From now on, behave normally
      updateButtonUI();
    }).catch(err => {
      console.error("Manual play still failed:", err);
    });

  } else {
    // ✅ Normal toggle mute/unmute
    isMuted = !isMuted;
    audio.muted = isMuted;
    updateButtonUI();
  }
});

// 3️⃣ Update the UI button text/icon
function updateButtonUI() {
  if (muteIcon) {
    muteIcon.src = isMuted ? "img/mute.png" : "img/volume.png";
  }
  if (muteText) {
    muteText.textContent = isMuted ? "Unmute" : "Mute";
  }
}*/

/*
const audioPlayer = document.getElementById("audioPlayer");
const muteIcon = document.getElementById('muteIcon')
const muter = document.getElementById('muter');

let isMuted = true;
let autoplayFailed = false;

muter.addEventListener('click', () => {
  audioPlayer.muted = isMuted;

  console.log('muteIcon', muteIcon)

  if (isMuted) {
    console.log("Muted");
    muteIcon.src = '/img/volume.png'; // <-- Make sure this path is correct
    muteText.textContent = 'UNMUTE';
  } else {
    console.log("Unmuted");
    muteIcon.src = '/img/mute.png'; // <-- Make sure this path is correct
    muteText.textContent = 'MUTE';
  }
});

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audioPlayer.src = songs[randomIndex];
    audioPlayer.play()
    .then(() => console.log("Playing"))
      .catch(err => console.log("Audio failed:", err));
}

audioPlayer.addEventListener('ended', function() {
    playRandomSong();
});


  ____       _ _         __
 |  _ \     | | |       /_/ 
 | |_) | ___| | |_ _ __ ___ 
 |  _ < / _ \ | __| '__/ _ \
 | |_) |  __/ | |_| | |  __/
 |____/ \___|_|\__|_|  \___|



window.onload = playRandomSong; */