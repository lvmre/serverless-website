// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Fetch the JSON file
    fetch('article.json')
        .then(response => response.json())
        .then(data => {
            // Dynamically update the featured image
            document.getElementById('featuredImage').src = data.featuredImage;

            // Update meta information
            document.getElementById('articleDate').textContent = new Date(data.meta.date).toLocaleDateString();
            document.getElementById('articleAuthor').textContent = data.meta.author;

            // Update article title and excerpt
            document.getElementById('articleTitle').textContent = data.title;
            document.getElementById('articleExcerpt').textContent = data.excerpt;

            // Update article tags
            const tagsContainer = document.getElementById('articleTags');
            data.tags.forEach(tag => {
                const tagElement = document.createElement('li');
                const tagLink = document.createElement('a');
                tagLink.href = '#';
                tagLink.textContent = tag;
                tagElement.appendChild(tagLink);
                tagsContainer.appendChild(tagElement);
            });

            // Insert the introduction
            document.getElementById('articleIntroduction').textContent = data.content.introduction;

            // Insert applications dynamically
            const applicationsSection = document.getElementById('applicationsSection');
            data.content.applications.forEach(application => {
                const appTitle = document.createElement('h3');
                appTitle.textContent = application.title;
                const appBody = document.createElement('p');
                appBody.textContent = application.body;
                applicationsSection.appendChild(appTitle);
                applicationsSection.appendChild(appBody);
            });

            // Insert benefits section
            document.getElementById('articleBenefits').textContent = data.content.benefits;

            // Insert conclusion
            document.getElementById('articleConclusion').textContent = data.content.conclusion;
        })
        .catch(error => {
            console.error('Error fetching the article content:', error);
        });
});
