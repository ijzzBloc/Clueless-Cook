import {calcData} from "./main";

let calcInput = document.getElementById('kcalsearch');
let calcSubmit = document.getElementById('kcal-search-bttn')
let infoContainer = document.getElementById('info-container')
calcSubmit.addEventListener('click', () => {
    let calcInputText = calcInput.value;
    if (calcInputText !== "") {
        calcData(calcInputText).then((result) => {
            infoContainer.innerHTML = "";
            let kcalResult = result;
            console.log(kcalResult.data.parsed)
            let kcalHTML = ""
            let kcalObject = kcalResult.data.parsed;
            kcalHTML +=
                '<div id="info">\n' +
                    '<table class="resultstable">\n' +
                        '<tr>\n' +
                            '<th>Product</th>\n' +
                            '<th>Quantity</th>\n' +
                            '<th>Label</th>\n' +
                        '</tr>\n' +
                        '<tr>\n' +
                            '<td>Mars</td>\n' +
                            '<td>60</td>\n' +
                            '<td>Gram</td>\n' +
                        '</tr>\n' +
                    '</table>\n' +
                '</div>'
            infoContainer.innerHTML = kcalHTML;
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