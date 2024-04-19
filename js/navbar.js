document.addEventListener("DOMContentLoaded", function () {
    const section = document.createElement('section');
    section.className = 'nav-wrapper text-center justify-content-center mb-3';

    const style = document.createElement('style');
    style.textContent = `
        .nav-wrapper h1 {
            font-family: 'Fira Sans', sans-serif;
            margin-left: 2rem;
        }
        .nav-wrapper a {
            border-width: 1px;
        }
        .nav-wrapper p {
            font-family: 'Liberation Sans', sans-serif;
        }
        @media all and (max-width: 768px) {
            .nav-wrapper {
                flex-direction: column;
            }
            .nav-wrapper h1 {
                margin-left: 0;
            }
        }
    `;

    const nav = document.createElement('nav');
    nav.className = 'nav-wrapper bg-dark p-1 d-flex justify-content-between align-items-center fw-bold border-bottom rounded-bottom border-5';

    const h1 = document.createElement('h1');
    h1.className = 'nav-title text-white';
    h1.style.marginTop = '0.5rem';
    h1.style.fontSize = '2.5rem';
    h1.style.cursor = 'default';

    const navbarItemsWrapper = document.createElement('div');
    navbarItemsWrapper.className = 'navbar-items-wrapper';

    const currentPage = window.location.pathname.split('/').pop();

    const navLinks = [
        { href: 'index.html', iconClass: 'fa fa-home', text: 'Home' },
        { href: 'projects.html', iconClass: 'fa-solid fa-play', iconClass2: 'fa-solid fa-image', text: 'Projects' },
        { href: 'credits.html', iconClass: 'fa-solid fa-note-sticky', text: 'Credits' }
    ];

    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.className = `nav-${link.text.toLowerCase().replace(' ', '-')}`;
        a.classList.add('btn');
        a.href = link.href;

        // Add text-white class to all anchor elements except the one corresponding to the current page
        if (currentPage !== link.href.split('/').pop()) {
            a.classList.add('text-white');
        }


        if (currentPage === 'projects.html' && link.text === 'Projects') {
            h1.textContent = 'PROJECTS';
            a.classList.add('btn-outline-warning');
            a.style.color = '#ffc107';
            a.classList.remove('text-white');
            a.style.borderWidth = '0';

            a.addEventListener('mouseover', function () {
                this.style.color = '#202020';
            });
            a.addEventListener('mouseout', function () {
                this.style.color = '#ffc107';
            });
            nav.className = 'nav-wrapper bg-dark p-1 d-flex justify-content-between align-items-center fw-bold border-bottom rounded-bottom border-5 border-warning';
        }

        if (currentPage === 'credits.html' && link.text === 'Credits') {
            h1.textContent = 'CREDITS';
            a.classList.add('btn-outline-success');
            a.classList.remove('text-white');
            a.style.borderWidth = '0';
            nav.className = 'nav-wrapper bg-dark p-1 d-flex justify-content-between align-items-center fw-bold border-bottom rounded-bottom border-5 border-success';
        }


        const icon1 = document.createElement('i');
        icon1.className = link.iconClass;
        icon1.setAttribute('aria-hidden', 'true');
        if (link.iconClass2) {
            icon1.style.marginRight = '0.5rem';
            const icon2 = document.createElement('i');
            icon2.className = link.iconClass2;
            a.appendChild(icon1);
            a.appendChild(icon2);
        } else {
            a.appendChild(icon1);
        }

        const p = document.createElement('p');
        p.style.marginBottom = '0';
        p.textContent = link.text;

        a.appendChild(p);

        navbarItemsWrapper.appendChild(a);
    });

    nav.appendChild(h1);
    nav.appendChild(navbarItemsWrapper);

    section.appendChild(style);
    section.appendChild(nav);

    document.body.insertBefore(section, document.body.firstChild);
});