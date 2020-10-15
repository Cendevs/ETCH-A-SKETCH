const container = document.querySelector('#container');
const promptBtn = document.querySelector('#prompt');
const colorSwitch = document.querySelector('.switch');
const resetBtn = document.querySelector('#reset')



function selectColor(){
    let max = 0xffffff;
        
    
    let randomColor = '#' +Math.round(Math.random() * max).toString(16);
    return randomColor;
}


let defGrids = (value)=>{
    let values = value * value;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for(let i = 0; i < values; i++){
        const square = document.createElement('div');
        container.appendChild(square)
        square.classList.add('grid-item');

}
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square =>{
    square.addEventListener('mouseover', ()=>{
    square.style.backgroundColor = 'var(--pen-color)'

})
})
}

function removeGrid(){
    container.textContent = "";
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square =>{
    square.classList.remove('.grid-item')
   });
}

promptBtn.addEventListener('click', (e)=>{
    removeGrid();
    newGrid();
    
});

function newGrid(){
    value = prompt('How many square do you want to sketch on each side?');
    defGrids(value);
}

promptBtn.textContent ="Create New Grid";
colorSwitch.textContent = "Random Color";
resetBtn.textContent = "Rest";

function leavingApixelatedTrail(){
    colorSwitch.onclick = () => {
        const squares = document.querySelectorAll('.grid-item');
        squares.forEach(square =>{
        square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = selectColor();
    });
    })
    } 
}

function reset(){
    resetBtn.onclick = ()=>{
       const squares = document.querySelectorAll('.grid-item');
       squares.forEach(square =>{
           square.style.backgroundColor = "antiquewhite";
       });
};
};
reset();


defGrids(16);
leavingApixelatedTrail();









 


    






