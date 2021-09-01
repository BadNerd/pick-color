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
function slider(colorInput,colorSLider){
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    colorInput.value = colorSLider.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px 3px rgba(' + r + ',' + g + ',' + b + ',.8)';
}
sliderR.addEventListener('input',function()
{
    slider(inputR,sliderR);
    
})
sliderG.addEventListener('input',function()
{
    slider(inputG,sliderG);
})
sliderB.addEventListener('input',function()
{
    slider(inputB,sliderB);
})

// Text Box
function textbox(slider,input){
    slider.value = input.value;
    if(input.value > 255){
        input.value = 255;
    }else if(input.value < 0)
    {
       input.value = 0;
    }

    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;

    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    colorBox.style.boxShadow = '0 0 4px rgba(' + r + ',' + g + ',' + b + ',.8)';
}
inputR.addEventListener('input',function(){
    textbox(sliderR,inputR);
})
inputG.addEventListener('input',function(){
    textbox(sliderG,inputG);
})
inputB.addEventListener('input',function(){
   textbox(sliderB,inputB);
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
