import { templates } from './templates.js';
import { createElementFromHTML } from './domUtils.js';
import { showOverlay, closeOverlay } from './overlayManager.js';
import { setupTabs } from './tabManager.js';
import { singlesData, epsData } from './holdSongs.js'

export function setupNav() {
  console.log('setupNav running');

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      console.log("Clicked nav:", e.target);

      const target = e.target.dataset.section;
      console.log("Section target:", target);
      console.log("Template found?", templates[target]);

      if (!templates[target]) return;

      // Create the section element from the template
      const sectionElement = createElementFromHTML(templates[target]);

      // Show the overlay with the created section
      showOverlay(sectionElement);
      console.log(sectionElement);
      console.log("Looking for #xout in overlay:", sectionElement.querySelector('#xout'));

      // After showing the overlay, set up tabs (if applicable)
      requestAnimationFrame(() => {
        if (sectionElement.querySelector('.tabButton')) {
          setupTabs();
        }
      });

      // Now, target the container in the correct section based on the tab clicked
      let songList;

      if (target === 'music') {
        // Target the container in the music (singles) section
        songList = sectionElement.querySelector('#singlesContainer');
      } else if (target === 'eps') {
        // Target the container in the eps section
        songList = sectionElement.querySelector('#epsContainer');
      }

      // Check if the container exists
      if (songList) {
        console.log(`${target} container found, loading songs...`);

        // Clear any existing songs before loading new ones
        songList.innerHTML = '';

        // Load the appropriate data for singles or EPs
        if (target === 'music') {
          loadSongs(songList, singlesData);  // Using imported loadSongs
        } else if (target === 'eps') {
          loadSongs(songList, epsData);  // Using imported loadSongs
        }
      }
    });
  });
}

// Assuming loadSongs function is defined elsewhere, and takes in the container element and the songs data
export function loadSongs(container, data) {
  if (!container) return;

  container.innerHTML = '';  // Clear any existing content

  // Loop through the songs (or EPs) and add them to the container
  data.forEach(item => {
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