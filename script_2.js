document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#buttons_container .button');
    const articles = document.querySelectorAll('#activities_container article');

    function showArticle(index) {
        // Masquer tous les articles
        articles.forEach(article => {
            article.style.display = 'none';
        });

        // Retirer la classe active de tous les boutons
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        // Afficher l'article sélectionné
        articles[index].style.display = 'flex';

        // Ajouter la classe active au bouton cliqué
        buttons[index].classList.add('active');
    }

    // Ajouter les écouteurs d'événements
    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Empêcher le scroll en haut de page
            showArticle(index);
        });
    });

    // Initialisation (affiche le premier article)
    showArticle(0);
});
