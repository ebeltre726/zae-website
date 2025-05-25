export const singlesData = [
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'] },
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'] },
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'] },
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'] },
  // Add more singles...
];

export const epsData = [
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/findyou.png', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'], album: "Forever & Always" },
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/findyou.png', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'], album: "Forever & Always"},
  { title: "Glowinnn (feat. STACK!E & SWEEZY)", cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'], album: "Glowinnn"},
  { title: "Glowinnn (feat. STACK!E & SWEEZY)",cover: 'img/glowinnn.jpg', links: ['img/soundcloud.png', 'img/applemusic.png', 'img/spotify2.png', 'img/itunes.png'], album: "Glowinnn" },
  // Add more EPs...
];

/*export function loadSongs(songs) {
    
    document.addEventListener('DOMContentLoaded', () => {
  // Your code to manipulate the DOM
  const songList = document.getElementById('singlesContainer');
  if (songList) {
    songList.innerHTML = '';
    songs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.classList.add('singlesBox');
      songElement.innerHTML = `
        <div class="singlesItem">
          <img src="${song.cover}" alt="Song Cover">
        </div>
        <div class="musicIcons">
          ${song.links.map(link => `<a href="#"><img class="musicIcon" src="${link}" alt="${link}"></a>`).join('')}
        </div>
      `;
      songList.appendChild(songElement);
    });
  } else {
    console.log("SongList not found!");
  }
});*/


    
   /* songList.innerHTML = '';
  songs.forEach(song => {
    const songElement = document.createElement('div');
    songElement.classList.add('singlesBox');
    songElement.innerHTML = `
      <div class="singlesItem">
        <img src="${song.cover}" alt="Song Cover">
      </div>
      <div class="musicIcons">
        ${song.links.map(link => `<a href="#"><img class="musicIcon" src="${link}" alt="${link}"></a>`).join('')}
      </div>
    `;
    songList.appendChild(songElement);
  });*/
// Load the singles by default
