let currentOverlay = null;

export function showOverlay(contentElement) {
    console.log("showOverlay called"); // Debugging line
  
    // Remove the previous overlay if one exists
    if (currentOverlay) currentOverlay.remove();
  
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';  // Add the class 'overlay'

    // Append the passed content element (singlesContainer or other content) to the overlay
    overlay.appendChild(contentElement);

    // Add the overlay to the document body
    document.body.appendChild(overlay);

    // Store the current overlay so we can remove it later
    currentOverlay = overlay;

    // Optionally hide the navigation bar when the overlay is displayed
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';

    console.log("Overlay innerHTML:", overlay.innerHTML); // Debugging line

    // Optional: Handle close button in overlay (if it exists)
    const closeBtn = overlay.querySelector('#xout');
    if (closeBtn) {
        console.log("closeBtn found:", closeBtn);
        closeBtn.style.cursor = 'pointer';
        closeBtn.addEventListener('click', () => {
            console.log('xout clicked');
            closeOverlay();
            if (nav) nav.style.display = '';  // Restore nav visibility
        });
    } else {
        console.warn('Could not find #xout in overlay!');
    }
}

export function closeOverlay() {
    if (currentOverlay) {
        currentOverlay.remove();  // Remove the current overlay
        currentOverlay = null;    // Reset the overlay reference
    }
}
