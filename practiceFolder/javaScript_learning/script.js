const createPara= function(){
     const para = document.createElement('p');
     para.textContent=('You Clicked the button!');
     document.body.appendChild(para);
}

const button= document.querySelector('button');
button.addEventListener('click',createPara);