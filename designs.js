// Select color input
// Select size input
const colorInput=document.getElementById('colorPicker');
const sizeInput=document.getElementById('sizePicker');
const canvas=document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('click', makeGrid);

function makeGrid(event) {
  event.preventDefault()
  canvas.innerHTML=''; //clear canvas
  let r=document.getElementById("inputHeight").value; //grid height
  let c=document.getElementById("inputWidth").value; //grid width
  for(let x=0; x<r; x++){
    let row=document.createElement('TR');
    canvas.appendChild(row);
      for(let y=0; y<c; y++){
      let column=document.createElement('TD');
      row.appendChild(column);
    }
  }
}

//canvas EventListener
canvas.addEventListener('click', function(event){
  let colorPixel=event.target;
  if(colorPixel.tagName=='TD'){
    let color = colorInput.value;
    colorPixel.style.backgroundColor = color;
  }
  });