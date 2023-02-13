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

// ---- We create html elements: a block in which a randomly generated color
// and its representation in rgba format will be displayed ----- 

function createElements(nameBox, rgbString) {
    let colorInfo = document.createElement('div');
    let rgbBlock = document.createElement('div');

    colorInfo.classList.add('colorInfo', `${nameBox}`);
    rgbBlock.classList.add('rgbBlock');

    let color = document.createElement('div');
    color.classList.add('color', `color-${nameBox}`);

    let rgb = document.createElement('div');
    rgb.classList.add('rgb', `rgb-${nameBox}`);
    color.style.backgroundColor = rgbString;
    rgb.innerHTML = rgbString;

    rgbBlock.appendChild(color);
    rgbBlock.appendChild(rgb);
    colorInfo.appendChild(rgbBlock);
    colorDisplay.prepend(colorInfo);
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

function deleteItem(event) {
    if (colorInfo.classList.contains(`${nameBox}`)) {
        colorDisplay.removeChild(colorInfo);
    }  
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




    