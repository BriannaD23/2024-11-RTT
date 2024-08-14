var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

const mainEL = document.querySelector('main');

mainEL.style.backgroundColor = 'var(--main-bg)';

mainEL.innerHTML = '<h1>DOM Manipulation</h1>';

mainEL.classList.add('flex-ctr');


// Part 2: Creating a Menu Bar



const topMenuEL = document.querySelector('#top-menu');
    menuLinks.forEach(link =>{
        
        const anchor = document.createElement('a');
        anchor.setAttribute('href', link.href);

        anchor.textContent = link.text;

        topMenuEL.appendChild(anchor)
    });



topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.classList.add('flex-around')