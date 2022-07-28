import {
    fetchData
} from "./main";


let userInput = document.getElementById('search');
let searchSubmit = document.getElementById('search-bttn')
searchSubmit.addEventListener('click', () => {
    fetchData(userInput.value)
})
