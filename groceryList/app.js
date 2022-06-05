const form = document.querySelector('form');
const products = document.querySelector('#product');
const qtys = document.querySelector('#qty');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const productList = document.querySelector('#list');
    const newlist = document.createElement('li');
    productList.appendChild(newlist);
    newlist.innerText= `${qtys.value} ${products.value}`
    qtys.value =" "
    products.value=' '


})

// const products = form.product.value;
// const qtys = form.qty.value;