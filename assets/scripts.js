$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
const filtreModal = document.querySelectorAll('.nav-link');

// Ajouter un gestionnaire d'événement à chaque catégorie
filtreModal.forEach(category => {
  category.addEventListener('mouseenter', () => {
    // Ajouter la classe active à la catégorie survolée
    category.classList.add('active');
  });

  category.addEventListener('mouseleave', () => {
    // Ne supprimez la classe active que des catégories qui ne sont pas sélectionnées
    filtreModal.forEach(otherCategory => {
      if (!otherCategory.classList.contains('selected')) {
        otherCategory.classList.remove('active');
      }
    });
  });
});

