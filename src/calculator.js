import {calcData} from "./main";

let calcInput = document.getElementById('kcalsearch');
let calcSubmit = document.getElementById('kcal-search-bttn')
let infoContainer = document.getElementById('info-container')
let addbttn = document.getElementById('addbttn')
let servingamount = document.getElementById('servingamount')
let resultstableproducts = document.getElementById('resultstableproducts')
let totaltable = document.getElementById('totaltable')



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
                '<th>Unit</th>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td>' + kcalObject[0].food.label + '</td>\n' +
                '<td>' + kcalObject[0].quantity + '</td>\n' +
                '<td>' + kcalObject[0].measure.label + '</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '</div>'
            infoContainer.innerHTML = kcalHTML;
            let ingredientResult =
                {
                    "food": {
                        "label": kcalObject[0].food.label
                    },
                    "calories": kcalObject[0].food.nutrients.ENERC_KCAL,
                    "fat": kcalObject[0].food.nutrients.FAT,
                    "carbs": kcalObject[0].food.nutrients.FIBTG,
                    "measure": {
                        "label": kcalObject[0].measure.label
                    },
                }
            console.log(ingredientResult)
        })
            .catch(reason => {
                alert(reason)
            })
    } else {
        alert('Please enter a product in searchbar.')
    }
})
let ingredients = [];
let counter = 1;
function doCalc(ingredientResult) {
    if (counter >= 1) {
        addIngredients(ingredientResult, servingamount.value)
    }
    console.log(ingredients);
    counter++;
}

function addIngredients(ingredient, amount) {
    ingredient["amount"] = parseInt(amount);
    ingredients.push(ingredient);
}




addbttn.addEventListener('click', () => {
    doCalc(servingamount);
    resultstableproducts.innerHTML = ''
    let newTableResult = ''
    let ingredientsLabel = ''
    let ingredientsKcal = 0;
    let ingredientsFat = 0;
    let ingredientsCarbs = 0;
    for (let i = 0; i < ingredients.length; i++) {
        let productName = +ingredients[i].label
        let totalKcal = +ingredients[i].amount * +ingredients[i].calories;
        let totalFat = +ingredients[i].amount * +ingredients[i].fat;
        let totalCarbs = +ingredients[i].amount * +ingredients[i].carbs;
        ingredientsLabel = productName
        ingredientsKcal += totalKcal
        ingredientsFat += totalFat
        ingredientsCarbs += totalCarbs

        newTableResult +=
            '<tr>' +
            '    <td>'+productName+'</td>' +
            '    <td>'+totalKcal+'</td>' +
            '    <td>'+totalFat+'</td>' +
            '    <td>'+totalCarbs+'</td>' +
            '</tr>'
    }
    resultstableproducts.innerHTML = newTableResult
    totaltable.innerHTML =
        '<tr>' +
        '    <td>Total:</td>' +
        '    <td>'+ingredientsKcal+'</td>' +
        '    <td>'+ingredientsFat+'</td>' +
        '    <td>'+ingredientsCarbs+'</td>' +
        '</tr>'
});










function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}