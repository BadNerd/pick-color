// Variables and Objects
const sliderR = document.querySelector('input[name="sliderR"]');
const sliderG = document.querySelector('input[name="sliderG"]')
const sliderB = document.querySelector('input[name="sliderB"]');

const inputR = document.querySelector('input#inputR');
const inputG = document.querySelector('input#inputG');
const inputB = document.querySelector('input#inputB');


const colorBox = document.querySelector('div.container .color-box');

// Slider
sliderR.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputR.value = sliderR.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sliderG.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputG.value = sliderG.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sliderB.addEventListener('input',function()
{
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    inputB.value = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
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
})
inputG.addEventListener('input',function(){
    sliderG.value = this.value;
    if(this.value > 255){
        this.value = 255;
    }else if(this.value < 0)
    {
        this.value = 0;
    }
})
inputB.addEventListener('input',function(){
    sliderB.value = this.value;
    if(this.value > 255){
        this.value = 255;
    }else if(this.value < 0)
    {
        this.value = 0;
    }
})