// fetch("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("RESOLVED!", res);
//     res.json().then(data =>{
//         console.log("Json Done", data)
//     })
// })
// .catch(e=>{
//     console.log("Error!", e)
// })

// axios.get("https://swapi.dev/api/people/1/")
// .then(res=> {
//     console.log("Response", res)
// })

const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/", config );
    let newJoke = document.createElement('li');
    newJoke.textContent = res.data.joke
    jokes.append(newJoke)
}


const button = document.querySelector('#button');
button.addEventListener('click', ()=> {
    getDadJoke()  
})

