const button = document.getElementById("button")

function clickAlert(){
        alert('I was clicked');
    }

function addingEventListener() {
    button.addEventListener('click', clickAlert);

}
    // const input = document.getElementById('input');
    // const button = document.getElementById('button');

   
    // input.addEventListener('click', clickAlert);
    
addingEventListener();
