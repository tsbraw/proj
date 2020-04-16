var select = document.querySelector('select');
var para = document.querySelector('p');
var bg = document.getElementById('bg');

select.addEventListener('change',theTheme);

function theTheme() {
    var choice = select.value;
    if (choice === "gloaming city") {
        para.textContent = '夕阳无限好，只是近黄昏';
        para.style.color = 'lightsalmon';
        bg.style.backgroundImage = 'url(images/cit.jpeg)';
    } else if (choice === "city light") {
        para.textContent = '明月别枝惊鹊，清风半夜鸣蝉';
        para.style.color = 'steelblue';
        bg.style.backgroundImage = 'url(images/cwl.jpeg)';
    } else if (choice === "cute dogs") {
        para.textContent = '犬上阶眠知地湿，鸟临窗语报天晴';
        para.style.color = 'wheat';
        bg.style.backgroundImage = 'url(images/dogs.jpg)';
    } else if (choice === "icehouse") {
        para.textContent = '结庐在人境，而无车马喧';
        para.style.color = 'darkgray';
        bg.style.backgroundImage = 'url(images/iceland.jpg)';
    } else {
        para.textContent = '';
    }
    setThemeOver();
}

function setThemeOver() {
    select.disabled = true;
    select.style.backgroundColor = 'darkgray';
    gameButton = document.createElement('button');
    gameButton.textContent = '玩个小游戏';
    document.body.appendChild(gameButton);
    gameButton.addEventListener('click',gameStart);
}

function gameStart() {
    
}