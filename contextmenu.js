
class MenuActions {
    constructor(list, handlers, container, targetContainer = document) {
        this.handlers = handlers;
        this.container = container;
        this.targetContainer = targetContainer;

        //Render 
        this.preparationItem(list);

        //Event

        this.initHandlers();

    }

    preparationItem (source) {
        this.container.innerHTML = `${source.map((event) => `<div class="item-block"><svg "${event.img}"></svg><div class="item" data-id="${event.id}">${event.title}</div></div>`).join('')}`;
    }

    enabel() {
        this.container.classList.add('active');
    }

    disabel() {
        this.container.classList.remove('active');
    }

    positioning(x, y) {
        this.container.style.left = `${x}px`;
        this.container.style.top = `${y}px`;
    }

    initHandlers() {
        this.targetContainer.addEventListener('contextmenu', event => {
            event.preventDefault();
            event.stopPropagation();

            this.positioning(event.clientX + 10, event.clientY + 10);
            this.enabel();
        })

        //Click on menu item

        this.container.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            event.stopPropagation();
    
            if (!this.handlers[id]) {
                return console.warn('No handler for id - ', id);
            }

            this.handlers[id]();
        })

        document.addEventListener('click', () => {
            this.disabel();
        })
    }
}

window.addEventListener('load', () => {
    const castomMenu = [
        {
            title: 'Edit the text',
            img: 'id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="#674c73"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"',
            id: 'item01'
        },
        {
            title: 'Change Background',
            img: 'id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="#674c73"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"',
            id: 'item02'
        },
        {
            title: 'Change Font size',
            img: 'id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" fill="#674c73"><path d="M19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm3,15c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v10Zm-3-11c-.552,0-1,.448-1,1v4.338c-.455-.217-.964-.338-1.5-.338-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c.608,0,1.18-.156,1.679-.43,.181,.26,.481,.43,.821,.43,.552,0,1-.448,1-1V7c0-.552-.448-1-1-1Zm-2.5,10c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM8.958,6.713c-.127-.423-.517-.713-.958-.713s-.831,.29-.958,.713l-3,10c-.159,.529,.142,1.086,.671,1.245s1.086-.141,1.245-.671l.386-1.287h3.312l.386,1.287c.13,.434,.527,.713,.958,.713,.095,0,.192-.014,.288-.042,.529-.159,.83-.716,.671-1.245l-3-10Zm-2.014,7.287l1.056-3.52,1.056,3.52h-2.112Z"',
            id: 'item03'
        },
        {
            title: 'Color Text',
            img: 'id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18" fill="#674c73"><path d="M24,15c0,.55-.45,1-1,1h-7c-.55,0-1,.45-1,1s.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3H1c-.55,0-1-.45-1-1s.45-1,1-1H19c.55,0,1-.45,1-1s-.45-1-1-1h-3c-1.65,0-3-1.35-3-3s1.35-3,3-3h7c.55,0,1,.45,1,1ZM.29,19.71c-.24-.24-.35-.6-.27-.94l1.64-7.01c.33-1.41,1.4-2.56,2.78-3l3.7-1.16L14.88,.88c1.13-1.13,3.11-1.13,4.24,0h0s0,0,0,0c.57,.57,.88,1.32,.88,2.12s-.31,1.55-.88,2.12l-6.72,6.72-1.16,3.7c-.44,1.38-1.58,2.45-3,2.78l-7.01,1.64c-.08,.02-.15,.03-.23,.03-.26,0-.52-.1-.71-.29ZM10,8.59l1.41,1.41,6.29-6.29c.19-.19,.29-.44,.29-.71s-.1-.52-.29-.71t0,0c-.38-.38-1.04-.38-1.41,0l-6.29,6.29Zm-6.38,3.63l-.84,3.59,2.52-2.52c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-2.52,2.52,3.59-.84c.73-.17,1.32-.72,1.54-1.43l1.01-3.2-2.08-2.08-3.2,1.01c-.71,.22-1.26,.82-1.43,1.54Z"',
            id: 'item04'
        }
    ];
    
    const menuHandler = {
        item01: () => console.log('Edit the text'),
        item02: () => console.log('Change Background'),
        item03: () => console.log('Change Font size'),
        item04: () => console.log('Color Text'),
    }
    
    const menu = document.querySelector('.castom-menu');

    new MenuActions(castomMenu, menuHandler, menu);

    // function editText() {
    //     const itemText = document.querySelector('div[data-id="item01"]');
    //     console.log(itemText)
    //     const inputText = document.createElement('input');
    //     inputText.setAttribute('type', 'text');
    //     inputText.setAttribute('class', 'input-text');

    //     itemText.appendChild(inputText);
        
    //     return inputText
    // }
    
    // editText()
})






