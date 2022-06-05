const heading = document.querySelector('h1')
const button = document.querySelector('button');
button.addEventListener('click', () => {
   
    const newColor = randColors()
  
    document.body.style.backgroundColor= newColor;
    heading.innerText= newColor;
    
    
})
// const body = document.querySelector('body')

    //  body.style.backgroundColor= ()
    //  heading.innerText=`${r},${g},${b}`

    


const randColors=()=> {
    const r = Math.floor(Math.random()*255); 
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
