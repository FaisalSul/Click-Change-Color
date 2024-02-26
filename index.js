var colorChange = document.querySelector('button');
var colorLift = document.querySelector('.left');
var colorCenter = document.querySelector('.center');
var colorRight = document.querySelector('.right');

colorChange.addEventListener('click', ()=>{
    var prom = prompt("Enter a color you like: ");
    if(prom === null){
        alert('You did not enter a Color');
       
    }else if(prom === ''){
        alert('You did not enter a Color');
    }
    else {
        colorLift.style.backgroundColor = prom;
        colorCenter.style.backgroundColor = prom;
        colorRight.style.backgroundColor = prom;
        }
    
});