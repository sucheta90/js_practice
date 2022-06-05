const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const heading = document.querySelectorAll('span');
// i = 0;
// while (i < heading.length){
//     console.log(heading[i].innerText)
//     i++
// }
// console.log(heading)
// for (let head of heading) {
//     for(let color of colors){
//         head.style.color = (color)
        
//     }
// }
length = 7
for (let i =0; i<length; i++){
    heading[i].style.color= colors[i]
}
