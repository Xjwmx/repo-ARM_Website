//load content into main
const navLinks = document.querySelectorAll('.nav-link');
const mainContent = document.querySelector('.content');

navLinks.forEach(nav_link => {
    nav_link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        fetch(target)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});


