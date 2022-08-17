import {calcData} from "./main";

let calcInput = document.getElementById('kcalsearch');
let calcSubmit = document.getElementById('kcal-search-bttn')
let infoContainer = document.getElementById('info-container')
let addBttn = document.getElementById('addbttn')
let servingamount = document.getElementById('servingamount')
let resultstableproducts = document.getElementById('resultstableproducts')
let totaltable = document.getElementById('totaltable')
let ingredients = [];
let test = "";
let foundIngredient = null;
let counter = 0;


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
            foundIngredient = kcalObject[0];
        })
            .catch(reason => {
                alert('Product cannot be found, please try again.')
            })
    } else {
        alert('Please enter a product in searchbar.')
    }
})

addBttn.addEventListener('click', () => {
    if (foundIngredient != null || servingamount.value === '') {
        doCalc(foundIngredient);
        resultstableproducts.innerHTML = ''
        let newTableResult = ''
        let ingredientsLabel = ''
        let ingredientsKcal = 0;
        let ingredientsFat = 0;
        let ingredientsCarbs = 0;
        for (let i = 0; i < ingredients.length; i++) {
            let productName = ingredients[i].food.label
            let totalKcal = ingredients[i].amount * +ingredients[i].food.nutrients.ENERC_KCAL;
            let totalFat = ingredients[i].amount * +ingredients[i].food.nutrients.FAT;
            let totalCarbs = ingredients[i].amount * +ingredients[i].food.nutrients.FIBTG;
            ingredientsLabel = productName
            ingredientsKcal += totalKcal
            ingredientsFat += totalFat
            ingredientsCarbs += totalCarbs
            console.log(test)
            newTableResult +=
                '<tr>' +
                '    <td>' + productName + '</td>' +
                '    <td>' + totalKcal + '</td>' +
                '    <td>' + totalFat + '</td>' +
                '    <td>' + totalCarbs + '</td>' +
                '</tr>'
        }
        resultstableproducts.innerHTML = newTableResult
        totaltable.innerHTML =
            '<tr>' +
            '    <td>Total:</td>' +
            '    <td>' + ingredientsKcal + '</td>' +
            '    <td>' + ingredientsFat + '</td>' +
            '    <td>' + ingredientsCarbs + '</td>' +
            '</tr>'

        foundIngredient = null;
        calcInput.value = '';
        servingamount.value = ''
        infoContainer.innerHTML = '';
    }

});


function doCalc(ingredientResult) {
    if (ingredientResult != null) {
        addIngredients(ingredientResult, servingamount.value)
        console.log(ingredients);
        counter++;

    } else {
        console.log("empty result");
    }

}

function addIngredients(ingredient, amount) {
    ingredient.amount = amount
    ingredients.push(ingredient);
}