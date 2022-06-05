
const searchList = document.querySelector('#list');
searchList

const input = document.querySelector('#searchItem');

const form = document.querySelector('#someForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newList = document.createElement('li');
    const newValue = input.value
    newList.innerText= newValue
    searchList.append(newList)
    input.value= " "
})



