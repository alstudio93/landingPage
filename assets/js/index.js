// https://www.youtube.com/watch?v=JkuiKeNS2mg
// https://www.youtube.com/watch?v=HpjW9eaFLIg

const mobileOpen = document.getElementById('mobileOpen');
const mobileMenu = document.getElementById('mobileMenu');

const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('.nav-links li a').forEach((link) => {
    if (link.href.includes('#')) {
        return;
    }

    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active-link')
    }

})

// document.querySelectorAll('.nav-links li a').forEach((link) => {
//     if (link.href === window.location.href) {
//         link.setAttribute('aria-current', 'page');
//     }
// })

mobileOpen.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})

