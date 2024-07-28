function loadArticle(articleUrl) {
    fetch(articleUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('article-content').innerHTML = data;
            document.getElementById('article-modal').classList.remove('hidden');
        })
        .catch(error => console.error('Error loading article:', error));
}

function closeModal() {
    document.getElementById('article-modal').classList.add('hidden');
}
