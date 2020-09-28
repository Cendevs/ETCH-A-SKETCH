const container = document.querySelector('#container')

let defGrids = (rows, cols)=>{
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let squares = document.createElement('div');
        squares.innerHTML = (i+1);
        squares.className = 'grid-item';
        container.appendChild(squares) 
    }
}
    
defGrids(6, 6)



