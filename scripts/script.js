document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });

    const closeButton = document.querySelector('.nav__close');
    closeButton.addEventListener('click', function() {
        nav.classList.remove('active'); 
        overlay.classList.remove('active'); 
    });
});
// const socialNetworks = [
//     { src: "images/SocialNetworks/Github.svg", alt: "Github" },
//     { src: "images/SocialNetworks/Instagram.svg", alt: "Instagram" },
//     { src: "images/SocialNetworks/Facebook.svg", alt: "Facebook" }
// ];

// function populateImages(containerId) {
//     const container = document.getElementById(containerId);
//     socialNetworks.forEach(network => {
//         const img = document.createElement('img');
//         img.src = network.src;
//         img.alt = network.alt;
//         img.className = 'networks__image';
//         container.appendChild(img);
//     });
// }
// populateImages('image-container-nav');
// populateImages('image-container-footer');


