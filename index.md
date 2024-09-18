---
layout: default
---

<!-- Preload Inknut Antiqua font -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700&display=swap" as="style">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700&display=swap">

<!-- Add Font Awesome CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Styles -->
<style>
/* Apply Inknut Antiqua font to all elements */
body, h1, h2, h3, h4, h5, h6, p, a, button {
    font-family: 'Inknut Antiqua', serif !important;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background: url('assets/flamingolake.webp') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #eee;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Styles for card container */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Styles specific to the Quiiigz card */
.quiiigz-card {
    width: 100%;
    max-width: 300px;
    margin: 10px;
    aspect-ratio: 3/4;
    background: transparent;
    border-radius: 10px;
    transition: border 0.3s;
    position: relative;
    overflow: hidden;
}

.quiiigz-card:hover {
    border: 1px solid white;
}

.quiiigz-card .card-content {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    background: black;
    box-shadow: 0 70px 63px -60px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-size 0.8s ease;
    background-image: url('assets/robModern.jpg');
}

.quiiigz-card .card-content:hover {
    background-size: 130%;
}

.quiiigz-card h2 {
    color: white;
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
}

.quiiigz-card:hover h2 {
    opacity: 1;
}

/* Styles for icons in Quiiigz card */
.quiiigz-card .icons {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    gap: 10px;
    justify-items: center;
}

.quiiigz-card .icons a {
    color: white;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.quiiigz-card:hover .icons a {
    opacity: 1;
}

.quiiigz-card .icon {
    font-size: 18px;
}

/* Individual icon styles */
.quiiigz-card .icon-github { color: #333; }
.quiiigz-card .icon-linkedin { color: #0077B5; }
.quiiigz-card .icon-twitter { color: #1DA1F2; }
.quiiigz-card .icon-instagram { color: #E4405F; }
.quiiigz-card .icon-facebook { color: #1877F2; }
.quiiigz-card .icon-youtube { color: #FF0000; }
.quiiigz-card .icon-tiktok { color: #000000; }
.quiiigz-card .icon-pinterest { color: #BD081C; }
.quiiigz-card .icon-reddit { color: #FF4500; }
.quiiigz-card .icon-soundcloud { color: #FF3300; }
.quiiigz-card .icon-spotify { color: #1ED760; }
.quiiigz-card .icon-apple-music { color: #FA57C1; }
.quiiigz-card .icon-patreon { color: #F96854; }
.quiiigz-card .icon-tumblr { color: #36465D; }
.quiiigz-card .icon-etsy { color: #F1641E; }
.quiiigz-card .icon-primal { color: #FF1493 !important; }

/* Styles specific to the Kickstarter card */
.kickstarter-card {
    --card-height: 300px;
    --card-width: calc(var(--card-height) / 1.5);
    width: var(--card-width);
    height: var(--card-height);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 36px;
    perspective: 2500px;
    margin: 0 50px;
}

/* ... (rest of the Kickstarter card styles remain unchanged) ... */

/* Styles specific to the YouTube Video card */
.video-card {
    --blur: 16px;
    --size: clamp(300px, 50vmin, 600px);
    width: var(--size);
    aspect-ratio: 4 / 3;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    color: #000;
    transform: translateZ(0);
}

/* ... (rest of the YouTube Video card styles remain unchanged) ... */

/* Styles for the Skool community card */
.nft {
    user-select: none;
    max-width: 300px;
    margin: 5rem auto;
    border: 1px solid #ffffff22;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: .7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: .5s all;
}

.nft hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #88888855;
    margin-top: 0;
}

.nft ins {
    text-decoration: none;
}

.nft .main {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;
}

.nft .main .tokenImage {
    border-radius: .5rem;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
}

.nft .main .description {
    margin: .5rem 0;
    color: #a89ec9;
}

.nft .main .tokenInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nft .main .tokenInfo .price {
    display: flex;
    align-items: center;
    color: #ee83e5;
    font-weight: 700;
}

.nft .main .tokenInfo .price ins {
    margin-left: -.3rem;
    margin-right: .5rem;
}

.nft .main .tokenInfo .duration {
    display: flex;
    align-items: center;
    color: #a89ec9;
    margin-right: .2rem;
}

.nft .main .tokenInfo .duration ins {
    margin: .5rem;
    margin-bottom: .4rem;
}

.nft .main .creator {
    display: flex;
    align-items: center;
    margin-top: .2rem;
    margin-bottom: -.3rem;
}

.nft .main .creator ins {
    color: #a89ec9;
    text-decoration: none;
}

.nft .main .creator .wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ffffff22;
    padding: .3rem;
    margin: 0;
    margin-right: .5rem;
    border-radius: 100%;
    box-shadow: inset 0 0 0 4px #000000aa;
}

.nft .main .creator .wrapper img {
    border-radius: 100%;
    border: 1px solid #ffffff22;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    margin: 0;
}

.nft::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: .7s all;
}

.nft:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);
}

.nft:hover::before {
    filter: brightness(.5);
    top: -100%;
    left: 200%;
}

/* Media queries for responsive layout */
@media (min-width: 768px) {
    .quiiigz-card, .video-card, .kickstarter-card, .nft {
        width: calc(50% - 20px);
        max-width: 450px;
        min-width: 400px;
    }
    
    .quiiigz-card h2 {
        font-size: 1.4rem;
    }
    
    .quiiigz-card .icon {
        font-size: 22px;
    }
}

@media (min-width: 1024px) {
    .quiiigz-card, .video-card, .kickstarter-card, .nft {
        width: calc(33.333% - 20px);
        max-width: 550px;
        min-width: 500px;
    }
    
    .quiiigz-card .card-content {
        aspect-ratio: 4/5;
    }

    .quiiigz-card .icons {
        bottom: 30px;
    }

    .quiiigz-card h2 {
        font-size: 1.6rem;
    }

    .quiiigz-card .icon {
        font-size: 26px;
    }
}

@media (min-width: 1440px) {
    .quiiigz-card, .video-card, .kickstarter-card, .nft {
        max-width: 700px;
        min-width: 600px;
    }
    
    .quiiigz-card h2 {
        font-size: 1.8rem;
    }

    .quiiigz-card .icon {
        font-size: 30px;
    }
}

/* Styles for background video */
#bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    object-fit: cover;
}

#audio-control {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
}
</style>

<!-- Video background element -->
<video autoplay loop muted playsinline id="bg-video" poster="assets/flamingolake.webp">
    <source src="assets/videos/background.webm" type="video/webm">
    <source src="assets/videos/background.mp4" type="video/mp4">
    Your browser does not support the video tag or the video cannot be loaded.
</video>

<!-- Audio control button -->
<button id="audio-control">Unmute</button>

<!-- Main content container -->
<div class="container">
    <!-- Featured Cards Section -->
    <div class="card-container">
        <!-- Quiiigz Card -->
        <div class="quiiigz-card">
            <div class="card-content">
                <h2>@Quiiigz</h2>
                <div class="icons">
                    <a href="#" class="icon icon-instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="icon icon-facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="icon icon-github"><i class="fab fa-github"></i></a>
                    <a href="#" class="icon icon-twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="icon icon-linkedin"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="icon icon-youtube"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="icon"><i class="fas fa-school"></i></a>
                    <a href="#" class="icon icon-pinterest"><i class="fab fa-pinterest"></i></a>
                    <a href="#" class="icon icon-reddit"><i class="fab fa-reddit"></i></a>
                    <a href="#" class="icon icon-soundcloud"><i class="fab fa-soundcloud"></i></a>
                    <a href="#" class="icon icon-apple-music"><i class="fab fa-itunes-note"></i></a>
                    <a href="#" class="icon"><i class="fas fa-music"></i></a>
                    <a href="#" class="icon icon-patreon"><i class="fab fa-patreon"></i></a>
                    <a href="#" class="icon icon-tumblr"><i class="fab fa-tumblr"></i></a>
                    <a href="#" class="icon icon-etsy"><i class="fab fa-etsy"></i></a>
                    <a href="#" class="icon icon-tiktok"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="icon icon-spotify"><i class="fab fa-spotify"></i></a>
                    <a href="#" class="icon icon-primal"><i class="fas fa-leaf"></i></a>
                </div>
            </div>
        </div>

        <!-- Kickstarter Card -->
        <div class="kickstarter-card">
            <div class="wrapper">
                <img src="assets/kickstarter.jpg" class="cover-image" />
            </div>
            <img src="assets/character.png" class="character" />
            <h1 class="title">Kickstarter</h1>
        </div>

        <!-- YouTube Video Card -->
        <div class="video-card">
            <img src="https://via.placeholder.com/600x450" alt="Video Thumbnail" class="video-card__img">
            <footer class="video-card__footer">
                <span>Video Title</span>
                <span>Video Description</span>
            </footer>
            <div class="video-card__action">
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>
            </div>
        </div>

        <!-- Skool Community Card -->
        <div class="nft">
            <div class="main">
                <img class="tokenImage" src="https://via.placeholder.com/300x250" alt="Skool Community" />
                <h2>Join Skool Community</h2>
                <p class="description">Connect with like-minded individuals in our vibrant community.</p>
                <div class="tokenInfo">
                    <div class="price">
                        <ins>◘</ins>
                        <p>0.031 ETH</p>
                    </div>
                    <div class="duration">
                        <ins>◷</ins>
                        <p>11 days left</p>
                    </div>
                </div>
                <hr />
                <div class="creator">
                    <div class="wrapper">
                        <img src="https://via.placeholder.com/50" alt="Creator" />
                    </div>
                    <p><ins>Creation of</ins> Quiiigz</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- JavaScript for video and audio control -->
<script>
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bg-video');
    const audioControl = document.getElementById('audio-control');

    // Improved error handling
    video.addEventListener('error', function(e) {
        console.error('Error loading video:', e);
        console.log('Video error code:', video.error.code);
        console.log('Video error message:', video.error.message);
        // Fallback to poster image
        video.style.display = 'none';
    });

    // Check if video can play through
    video.addEventListener('canplaythrough', function() {
        console.log('Video can play through');
    });

    // Audio control
    if (audioControl) {
        audioControl.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                audioControl.textContent = 'Mute';
            } else {
                video.muted = true;
                audioControl.textContent = 'Unmute';
            }
        });
    }

    // Log video loading progress
    video.addEventListener('loadedmetadata', function() {
        console.log('Video metadata loaded');
    });

    video.addEventListener('loadeddata', function() {
        console.log('Video data loaded');
    });

    // Attempt to play the video
    video.play().catch(error => {
        console.error("Error attempting to play video:", error);
        // Fallback handled in the 'error' event listener
    });
});
</script>
