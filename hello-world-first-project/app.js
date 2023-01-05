function newbutton(){
    var descl = document.getElementById('desc-left')
    let newElement = document.createElement('input'); 
    newElement.className='input';
    descl.appendChild(newElement);
    }

function createButtons(){
    var descr = document.getElementById('desc-right')
    let createButton = document.createElement('button'); 
    createButton.className='nbtn';
    createButton.textContent='(￢‿￢ )';
    descr.appendChild(createButton);
}

function resetValues(){
  let inputs = document.getElementsByTagName('input');
  for (let input of inputs)
    input.value = '';
}


function output(){
    const inputs = document.getElementsByTagName('input');
    for (let input of inputs) {
        if (input.value){ 
            alert(input.value);}
    }
}





