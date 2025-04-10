
    document.addEventListener('DOMContentLoaded', () => {
        const ecoButton = document.getElementById('ecoModeButton');
        ecoButton.addEventListener('click', () => {
            document.body.classList.toggle('eco-mode');
        });
    });