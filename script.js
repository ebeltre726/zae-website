const songs = [
    "songs/findyou.mp3",
    "songs/saintlaurent.mp3",
    "songs/glowinnn.mp3",
    "songs/overandover.mp3",
    "songs/nextone.mp3",
    "songs/toolong.mp3"
];

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs[randomIndex];
    audioPlayer.play();
}

document.getElementById("audioPlayer").addEventListener('ended', function() {
    playRandomSong();
});

window.onload = playRandomSong;