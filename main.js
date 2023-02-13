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

function getColor() {
    return Math.floor(Math.random()*256);
};


function getRandomColor(rgba, colorBox) { 
    let a = getColor();
    let b = getColor();
    let c = getColor(); 

    let rgbString = `rgba(${a}, ${b}, ${c}, ${rgba})`

   
    let colorInfo = document.querySelector(`.${colorBox}`);
    let color = document.querySelector(`.color-${colorBox}`);
    let rgb = document.querySelector(`.rgb-${colorBox}`);

    colorDisplay.style.display = 'block'; 
    colorText.style.opacity = 0;

    setTimeout(() => {
        colorDisplay.style.opacity = 1;
        colorText.style.opacity = 1;
        colorText.style.transition = '1.5s ease-in-out';
    }, 200);


    if(!colorInfo && !color && !rgb) {
        
        colorInfo = document.createElement('div');
        colorInfo.classList.add('colorInfo', `${colorBox}`);

        let color = document.createElement('div');
        color.classList.add('color', `color-${colorBox}`);

        let rgb = document.createElement('div');
        rgb.classList.add('rgb', `rgb-${colorBox}`);
        color.style.backgroundColor = rgbString;
        rgb.innerHTML = rgbString;

        colorInfo.appendChild(color);
        colorInfo.appendChild(rgb);
        colorDisplay.prepend(colorInfo);
    }

    else {
        color.style.backgroundColor = rgbString;
        rgb.innerHTML = rgbString;
    }


    return `${a}, ${b}, ${c}`;
};

changeButton.addEventListener('click', changeColor);




    