// Add your Pexels API key here
const PEXELS_API_KEY = 'kANnqaEo8gJwrYUDBMJM75iGn0TWq0JHGBGLPWE3eziOX3NPvFc86Ouy';

// Fetch image from Pexels API based on a search term
function fetchPexelsImage(searchTerm) {
    fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=1`, {
        headers: {
            Authorization: PEXELS_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        // Get the first image from the response
        const imageUrl = data.photos[0].src.landscape;

        // Update the featured image on the page
        document.getElementById('featuredImage').src = imageUrl;
    })
    .catch(error => {
        console.error('Error fetching image from Pexels:', error);
    });
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Fetch an image related to "Artificial Intelligence"
    fetchPexelsImage('Artificial Intelligence');
    
    // Fetch the JSON article content (from the previous example)
    fetch('article.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('articleTitle').textContent = data.title;
            document.getElementById('articleExcerpt').textContent = data.excerpt;
            document.getElementById('articleDate').textContent = new Date(data.meta.date).toLocaleDateString();
            document.getElementById('articleAuthor').textContent = data.meta.author;

            const tagsContainer = document.getElementById('articleTags');
            data.tags.forEach(tag => {
                const tagElement = document.createElement('li');
                const tagLink = document.createElement('a');
                tagLink.href = '#';
                tagLink.textContent = tag;
                tagElement.appendChild(tagLink);
                tagsContainer.appendChild(tagElement);
            });

            document.getElementById('articleIntroduction').textContent = data.content.introduction;

            const applicationsSection = document.getElementById('applicationsSection');
            data.content.applications.forEach(application => {
                const appTitle = document.createElement('h3');
                appTitle.textContent = application.title;
                const appBody = document.createElement('p');
                appBody.textContent = application.body;
                applicationsSection.appendChild(appTitle);
                applicationsSection.appendChild(appBody);
            });

            document.getElementById('articleBenefits').textContent = data.content.benefits;
            document.getElementById('articleConclusion').textContent = data.content.conclusion;
        })
        .catch(error => {
            console.error('Error fetching article content:', error);
        });
});
