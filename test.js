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
