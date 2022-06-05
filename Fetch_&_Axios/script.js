const input = document.querySelector('#tvShow')
input.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchItem = input.value
    console.log(searchItem)   
})