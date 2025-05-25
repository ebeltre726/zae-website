import { singlesData, epsData } from "./holdSongs.js";

export function setupTabs() {
  const tabButtons = document.querySelectorAll('.tabButton');
  const tabPanels = document.querySelectorAll('.tabPanel');
  const singlesContainer = document.querySelector('#singlesContainer'); // Assuming you have this container in your template
  const epsContainer = document.querySelector('#epsContainer');  // Assuming you have a different container for EPs and Albums

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const targetId = btn.dataset.tab;

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // Show the correct panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');

      // Load the appropriate data based on the tab clicked
      if (targetId === 'singles') {
        loadSongs(singlesContainer, singlesData);  // Load singlesData into singlesContainer
      } else if (targetId === 'eps') {
        loadSongs(epsContainer, epsData);  // Load epsData into epsContainer
      }
    });
  });
}

function loadSongs(container, data) {
  if (!container) return;
  
  container.innerHTML = '';  // Clear any existing content
  
  let currentAlbum = null;  // Track the current album being processed

  data.forEach(item => {
    // Check if an album is provided or not
    const itemAlbum = item.album || "single";  // Use "single" for non-album items

    // If the album changes (or it's the first item), add a header
    if (itemAlbum !== currentAlbum) {
      if (itemAlbum !== "single") {
        const albumHeader = document.createElement('h2');
        albumHeader.textContent = itemAlbum;  // Display the album name
        albumHeader.classList.add('albumHeader');
        container.appendChild(albumHeader);
      }
      currentAlbum = itemAlbum;  // Update current album
    }

    // Create the song element
    const itemElement = document.createElement('div');
    itemElement.classList.add('itemBox');
    itemElement.innerHTML = `
      <div class="itemImage">
        <img src="${item.cover}" alt="${item.title} Cover">
      </div>
      <div class="itemDetails">
        <p class="itemTitle">${item.title}</p>
        <div class="musicIcons">
          ${item.links.map(link => `<a href="#"><img class="musicIcon" src="${link}" alt="${link}"></a>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(itemElement);
  });
}