$(document).ready(function () {
    $('.faq-question').on('click', function () {
        const parent = $(this).closest('.faq-item');

        // Fecha outros dropdowns
        $('.faq-item').not(parent).removeClass('active');

        // Alterna o estado do dropdown clicado
        parent.toggleClass('active');
    });
});
