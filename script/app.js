$(document).ready(function() {

  //get elements using jquery
  const userGrid = $('.grid-user');
  const computerGrid = $('.grid-computer');
  const dock = $('.ship-dock');
  const ship = $('.ship');
  const destroyer = $('.destroyer');
  const submarine = $('.submarine');
  const crusier = $('.crusier');
  const battleship = $('.battleship');
  const carrier = $('.carrier');

  //defining our elements 

  const userSqr = [];
  const computerSqr = [];
  const width = 10


  //reseting the game

  //making a droppable ui
  $('.ship').draggable();
 // $('#usergrid').droppable();

 //creating grid
  
 const createGrid = function (grid, sqr, width) {
  for (let i = 0; i < width * width; i++){
    const cell = document.createElement('div');
    grid.append(cell);
    cell.dataset.id = i;
    cell.dataset.class = 'grid'
    sqr.push(cell);
  }
}
  createGrid(userGrid, userSqr, width)
  createGrid(computerGrid, computerSqr, width)


  // rotating ships button......

  const rotateShip = function() {
    const rotateButton = $('#rotate')
    let degree = 0;
    rotateButton.on('click', function() {
      if (degree === 0) {
        submarine.addClass('rotate');
        degree = 90;
      } else if (degree === 90) {
      submarine.removeClass('rotate');
      degree = 0
    }
    
  })
}

})