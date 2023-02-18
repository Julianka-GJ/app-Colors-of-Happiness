const castomMenu = [
    {
        title: 'Edit the text',
        img: '',
        id: 'item01'
    },
    {
        title: 'Change Background',
        img: '',
        id: 'item02'
    },
    {
        title: 'Change Font size',
        img: '',
        id: 'item03'
    },
    {
        title: 'Color Text',
        img: '',
        id: 'item04'
    }
];

const menuHandler = {
    item01: () => console.log('Edit the text'),
    item02: () => console.log('Change Background'),
    item03: () => console.log('Change Font size'),
    item04: () => console.log('Color Text'),
}


document.addEventListener('contextmenu', event => {
    event.preventDefault();

    const menu = document.querySelector('.castom-menu');

    menu.style.left = `${event.clientX + 10}px`;
    menu.style.top = `${event.clientY + 10}px`;

    if (menu.children.length != castomMenu.length) {
        menu.innerHTML = `${castomMenu.map((event) => `<div class="item" data-id="${event.id}">${event.title}</div>`).join('')}`;
    }

    menu.classList.add('active');
})


document.addEventListener('click', () => {
    let menu = document.querySelector('.castom-menu');
    menu.classList.remove('active');
})

window.addEventListener('load', () => {
    const menu = document.querySelector('.castom-menu');
    menu.addEventListener('click', function (event) {
        const id = event.target.dataset.id;
        console.log(id)

        if (!menuHandler[id]) {
            return console.warn('No handler for id - ', id);
        }

    })
})


