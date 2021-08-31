                // Variables and Objects\\
 //slider 
const sliderR = document.querySelector('input[name="sliderR"]');
const sliderG = document.querySelector('input[name="sliderG"]')
const sliderB = document.querySelector('input[name="sliderB"]');



//text box
const inputR = document.querySelector('input#inputR');
const inputG = document.querySelector('input#inputG');
const inputB = document.querySelector('input#inputB');

//color box
const colorBox = document.querySelector('div.container .color-box');

//button
const shuffleBtn = document.querySelectorAll('.button button')[0];
const resetBtn = document.querySelectorAll('.button button')[1];

// Default 
sliderR.value = '0';
sliderG.value = '0'; 
sliderB .value = '0';


colorBox.style.backgroundColor = 'rgb(0,0,0)'

                    // Functions \\
// Slider
sliderR.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputR.value = sliderR.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px 3px rgba(' + r + ',' + g + ',' + b + ',.8)';
    
})
sliderG.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputG.value = sliderG.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
sliderB.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputB.value = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})

// Text Box
inputR.addEventListener('input',function(){
    sliderR.value = this.value;
    if(this.value > 255){
        this.value = 255;
    }else if(this.value < 0)
    {
        this.value = 0;
    }

    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
inputG.addEventListener('input',function(){
    sliderG.value = this.value;
    if(this.value > 255){
        this.value = 255;
    }else if(this.value < 0)
    {
        this.value = 0;
    }

    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
inputB.addEventListener('input',function(){
    sliderB.value = this.value;
    if(this.value > 255){
        this.value = 255;
    }else if(this.value < 0)
    {
        this.value = 0;
    }

    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
// Button

//reset button
shuffleBtn.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    sliderR.value = r;
    sliderG.value = g;
    sliderB.value = b;
    
    inputR.value = r;
    inputG.value = g;
    inputB.value = b;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
resetBtn.addEventListener('click',function(){
    sliderR.value = '0';
    sliderG.value = '0'; 
    sliderB.value = '0';

    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputR.value = '0';
    inputG.value = '0';
    inputB.value = '0';

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
})
