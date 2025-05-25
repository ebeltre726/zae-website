export const templates = {
    about: `
      <section id="about">
        <div id="abtContent">
          <span id="aboutBody">
            An emotionally raw, genre-building artist crafting a cinematic fusion of
            pop, rap, and R&B, layered with nostalgic electronic textures. Signed to UMPG as a songwriter in
            2020, he's now stepping into the spotlight as a recording artist with a distinct
          </span>
          <span id="aboutBody2">
            voice and a powerful catalog of unreleased music.
          </span>
          <img id="abtImg" src="img/zaeimagecolor.png">
        </div>
        <img id="xout" src="img/crossed.png">
      </section>
    `,
    music: `
    <section id="music">
    <img class="musicBg" src="/img/zaeimagecolor2.png">
        <div class="tabsHeader">
            <button class="tabButton active" data-tab="singles">SINGLES</button>
            <button class="tabButton" data-tab="eps">EPs & ALBUMS</button>
        </div>
        <div class="tab-content">
            <div id="singles" class="tabPanel active">
              <div id="singlesContainer" class="songContainer">
              </div>
            </div>
            <div id="eps" class="tabPanel">
            <div id="epsContainer" class="songContainer">
            </div>
            </div>
            </div>
                <img id="xout" src="img/crossed.png">
    </section>`,
    contact: `
    <section id="contact">
      <div class="contactWrapper">
        <h2 class="contactHeader">Let's Create Something Together</h2>
        <form id="contactForm" class="contact-form">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name"><br>
          
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name"><br>
          
          <label for="sourceEmail">Email Address</label>
          <input type="email" id="sourceEmail" name="sourceEmail" required placeholder="Enter your email address"><br>
          
          <label for="message">Message</label>
          <textarea id="message" name="message" required placeholder="Your message..."></textarea>
          
          <button type="submit">Send Message</button>
        </form>
        <div id="responseMessage" class="response-message"></div>
      </div>
      <img id="xout" src="img/crossed.png">
    </section>`,
    newsletter: ``
};

/*
                <div class="singlesBox">
                <img class="singlesItem" src="img/glowinnn.jpg">
                <div class="musicIcons">
                <a href="#" ><img class="musicIcon" src="/img/soundcloud.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/applemusic.png"></a> <!-- Image from Freepik by Freepik -->
                <a href="#" ><img class="musicIcon" src="/img/spotify2.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/itunes.png"></a> <!-- Image from Freepik by Mayor Icons -->
                </div>
                </div>
                <div class="singlesBox">
                <img class="singlesItem" src="img/glowinnn.jpg">
                <div class="musicIcons">
                <a href="#" ><img class="musicIcon" src="/img/soundcloud.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/applemusic.png"></a> <!-- Image from Freepik by Freepik -->
                <a href="#" ><img class="musicIcon" src="/img/spotify2.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/itunes.png"></a> <!-- Image from Freepik by Mayor Icons -->
                </div>
                </div>
                <div class="singlesBox">
                <img class="singlesItem" src="img/glowinnn.jpg">
                <div class="musicIcons">
                <a href="#" ><img class="musicIcon" src="/img/soundcloud.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/applemusic.png"></a> <!-- Image from Freepik by Freepik -->
                <a href="#" ><img class="musicIcon" src="/img/spotify2.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/itunes.png"></a> <!-- Image from Freepik by Mayor Icons -->
                </div>
                </div>
                <div class="singlesBox">
                <img class="singlesItem" src="img/glowinnn.jpg">
                <div class="musicIcons">
                <a href="#" ><img class="musicIcon" src="/img/soundcloud.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/applemusic.png"></a> <!-- Image from Freepik by Freepik -->
                <a href="#" ><img class="musicIcon" src="/img/spotify2.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/itunes.png"></a> <!-- Image from Freepik by Mayor Icons -->
                </div>
                </div>
                <div class="singlesBox">
                <img class="singlesItem" src="img/glowinnn.jpg">
                <div class="musicIcons">
                <a href="#" ><img class="musicIcon" src="/img/soundcloud.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/applemusic.png"></a> <!-- Image from Freepik by Freepik -->
                <a href="#" ><img class="musicIcon" src="/img/spotify2.png"></a> <!-- Image from Freepik by Pixel Perfect -->
                <a href="#" ><img class="musicIcon" src="/img/itunes.png"></a> <!-- Image from Freepik by Mayor Icons -->
                </div>
                </div>
                */