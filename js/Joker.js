const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('is-hovered');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('is-hovered');
    });
});