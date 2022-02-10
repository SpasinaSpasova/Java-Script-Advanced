function getArticleGenerator(articles) {
    let div = document.getElementById('content');

    return () => {
        if (articles.length) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            div.appendChild(article);
        }
    }
}
