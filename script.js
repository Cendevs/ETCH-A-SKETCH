const container = document.querySelector('#container');
const promptBtn = document.querySelector('#prompt');
const colorSwitch = document.querySelector('.switch');



function selectColor(){
    let randomColor = '#' +Math.floor(Math.random() * 1677715).toString(16);
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
    container.innerHTML = "";
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square =>{
    square.classList.remove('.grid-item')
   });
}

promptBtn.addEventListener('click', ()=>{
    newGrid();
    
});

function newGrid(){
    removeGrid();
    value = prompt('How many square do you want to sketch on each side?');
    defGrids(value);
}

promptBtn.textContent ="Create New Grid";
colorSwitch.textContent = "Random Color";

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

defGrids(16);
leavingApixelatedTrail();








 


    






