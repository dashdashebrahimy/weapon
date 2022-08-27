let images = document.querySelectorAll('.image-items');
let imgran = document.querySelectorAll('.img-cpu');

for(let i = 0 ; i <= images.length - 1; i++ ){
     images[i].addEventListener('click',()=>{
     hiddenselect(i);
     randcpu = Math.floor(Math.random()*10/4);
     imgran[randcpu].classList.remove("hidden");
     gamecheck(i,randcpu);
})
}
function hiddenselect(i){  
        for(let j = 0 ; j <= images.length-1; j++){
            if(i!==j){
                 images[j].classList.add("hidden"); 
            }
        }
     }
     
     document.querySelector('button').addEventListener('click', refreshFunction = ()=>{
        for(let i=0;i<= images.length -1 ; i++){
            images[i].classList.remove('hidden');
            imgran[i].classList.add("hidden");
        }
     })
     document.querySelector('button').addEventListener('click',refreshFunction);
     document.addEventListener('keydown',(e)=>{
        if(e.key == 'z' ){
            refreshFunction();
        }
     })
function gamecheck(user,cpuguess){
    const userpint = document.querySelector('#user-point');
    const cpupoint = document.querySelector('#cpu-point');
   if(user !== cpuguess){
      if(user==0){
        if(cpuguess == 1){
            document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) +1;
        }
        else{
            document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) +1;
        }
      }
      else if(user==1){
        if(cpuguess==0){
            document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) +1;
        }
        else{
            document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) +1;
        }
      }
      else{
        if(cpuguess==0){
            document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) +1;
        }
        else{
            document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) +1;
        }
      }
   }
}