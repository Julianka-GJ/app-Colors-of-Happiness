let colorText = document.querySelector('.color-happiness');
let changeButton = document.querySelector('#change');
let colorDisplay = document.querySelector('.color-display');

function changeColor() {
    colorText.style.textShadow = `
    0 2px 0px rgba(${getRandomColor(1, 'colorBox1')}), 
    0 3px 2px rgba(${getRandomColor(0.5,'colorBox2')}, 0.5), 
    0 6px 0 rgba(${getRandomColor(1, 'colorBox3')}),
    0 8px 2px rgba(${getRandomColor(0.5, 'colorBox4')}, 0.5),
    0 12px 0 rgba(${getRandomColor(1, 'colorBox5')}),
    0 16px 2px rgba(${getRandomColor(0.5, 'colorBox6')}, 0.5),
    0 24px 0 rgba(${getRandomColor(1, 'colorBox7')}),
    0 26px 2px rgba(${getRandomColor(0.5, 'colorBox8')}, 0.5),
    0 36px 0 rgba(${getRandomColor(1, 'colorBox9')}),
    0 38px 2px rgba(${getRandomColor(0.5, 'colorBox10')}, 0.5),
    0 48px 0 rgba(${getRandomColor(1, 'colorBox11')}),
    0 50px 2px rgba(${getRandomColor(0.5, 'colorBox12')}, 0.5)`;
};


// //---- random number generator function ---

function getColor() {
    return Math.floor(Math.random()*256);
};

class Element {
    constructor(tagName, attributes, contents,) {
        this.tagName = tagName;
        this.contents = contents;
        this.attributes = attributes; 
    };

    createEl() {
        let elem = document.createElement(this.tagName);
        if (!this.attributes) return elem;
        for (let [attr, value] of Object.entries(this.attributes)) {
            elem.setAttribute(attr, value);
        }

        elem.textContent = this.contents;

        return elem
    };
}


// ---- We create html elements: a block in which a randomly generated color
// and its representation in rgba format will be displayed ----- 

function createElements(nameBox, rgbString) {
    let colorInfoElem = new Element('div', {class: `colorInfo ${nameBox}`});
    let rgbInfoElem = new Element('div', {class: 'rgbBlock'});
    let colorElem = new Element('div', {class: `color color-${nameBox}`});
    let rgbElem = new Element('div', {class: `rgb rgb-${nameBox}`}, rgbString);
    let imgElem = new Element('img', {class: 'img-basket', src: './img/trash.png', alt: 'trash'})

    let colorInfo = colorInfoElem.createEl();
    let rgbBlock = rgbInfoElem.createEl();
    let color = colorElem.createEl();
    let rgb = rgbElem.createEl();
    let imgBasket = imgElem.createEl();
    
    color.style.backgroundColor = rgbString;
    

    rgbBlock.appendChild(color);
    rgbBlock.appendChild(rgb);
    colorInfo.appendChild(rgbBlock);
    colorInfo.appendChild(imgBasket);
    colorDisplay.prepend(colorInfo);

    function deleteItem(el) {
        if (el.target.classList.contains('img-basket')) {
            el.target.parentElement.remove();
        }
    };
    
    imgBasket.addEventListener('click', deleteItem);
};

//---- show color display ------ 

function showСolorDisplay() {
    colorDisplay.style.display = 'block'; 
    colorText.style.opacity = 0;

    setTimeout(() => {
        colorDisplay.style.opacity = 1;
        colorText.style.opacity = 1;
        colorText.style.transition = '1.5s ease-in-out';
    }, 200);
};


function getRandomColor(rgba, colorBox) { 
    let a = getColor();
    let b = getColor();
    let c = getColor(); 

    let rgbString = `rgba(${a}, ${b}, ${c}, ${rgba})`

   
    let colorInfo = document.querySelector(`.${colorBox}`);
    let color = document.querySelector(`.color-${colorBox}`);
    let rgb = document.querySelector(`.rgb-${colorBox}`);

    if(!colorInfo && !color && !rgb) {
        createElements(colorBox, rgbString);
    }

    else {
        color.style.backgroundColor = rgbString;
        rgb.innerHTML = rgbString;
    }

    showСolorDisplay();

    return `${a}, ${b}, ${c}`;
};

changeButton.addEventListener('click', changeColor);





    