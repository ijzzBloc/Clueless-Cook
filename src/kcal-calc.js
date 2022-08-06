import {calcData} from "./main";

let calcInput = document.getElementById('kcalsearch');
let calcSubmit = document.getElementById('kcal-search-bttn')
calcSubmit.addEventListener('click', () => {
    let calcInputText = calcInput.value;
    if (calcInputText !== "") {
        calcData(calcInputText).then((result) => {
            let kcalResult = result;
            console.log(kcalResult.data.parsed)
        })
            .catch(reason => {
                alert(reason)
            })
    } else {
        alert('Please enter a product in searchbar.')
    }
})

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}