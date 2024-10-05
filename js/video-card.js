function updateVideoCard() {
    const videoCard = document.querySelector('.video-card');
    const videoId = videoCard.getAttribute('data-video-id');

    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`)
        .then(response => response.json())
        .then(data => {
            // Update thumbnail
            const thumbnail = videoCard.querySelector('img');
            thumbnail.src = data.thumbnail_url;
            thumbnail.alt = data.title;
            
            // Update title
            const title = videoCard.querySelector('.video-card__footer span:last-child');
            title.textContent = data.title;
            
            // Update author name
            const authorName = videoCard.querySelector('.video-card__footer span:first-child');
            authorName.textContent = data.author_name;

            // Add click event to play the video
            videoCard.addEventListener('click', () => {
                window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            });
        })
        .catch(error => console.error('Error fetching video data:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVideoCard);
