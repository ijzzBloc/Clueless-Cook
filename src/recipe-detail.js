import {
    fetchRecipe
} from './main'

function getParameter(recipeID) {
    let address = window.location.search
    let parameterList = new URLSearchParams(address)
    return parameterList.get(recipeID)
}

let recipeID = (getParameter('recipeID'))
fetchRecipe(recipeID).then((result) => {
    console.log(result.data.recipe)
    let article = document.getElementById('article')
    let recipeHeader = document.getElementById('details-header')
    let recipeDetail = result.data.recipe
    let recipeIMG = document.getElementById('recipe-image')
    let ingredients = document.getElementById('instructions')
    let nutrients = document.getElementById('nutrients-table')
    let recipeText = document.getElementById('recipe-text')
    let labels = document.getElementById('l-box')
    //Clear recipe html
    recipeHeader.innerHTML = ""
    let recipeHeaderHTML =
        '<h3>' + recipeDetail.label + '</h3>\n' +
        '<p><i class="fa-solid fa-clock-rotate-left"></i>' + recipeDetail.totalTime + 'mins.</p >\n' +
        '<a href=' + recipeDetail.url + 'id="article">Original Article</a>'
    //Replace html with filled whtml
    recipeHeader.innerHTML = recipeHeaderHTML;

    //Clear recipe image
    recipeIMG.innerHTML = ""
    let recipesIMGHTML =
        '<div class="recipe-image" id="recipe-image">\n' +
        '<img alt="" src=' + recipeDetail.image + '>\n' +
        '</div>'
    //Replace image with recipe image
    recipeIMG.innerHTML = recipesIMGHTML;


    //Clear ingredients with filled html
    ingredients.innerHTML = ""
    let ingredientsHTML = "";
    let ingredientsCount = recipeDetail.ingredients.length
    console.log(ingredientsCount)
    if (ingredientsCount >= 1) {
        for (let i = 0; i < ingredientsCount; i++) {
            let ingredientsObject = result.data.recipe.ingredients[i]
            console.log(ingredientsObject)
            ingredientsHTML +=
                '<li>' + ingredientsObject.text + '</li>'
        }
        //add ingredientsHTML
        ingredients.innerHTML = ingredientsHTML
    }

    //Clear nutrients with filled html
    nutrients.innerHTML = "";
    nutrients.innerHTML =
        ' <tr>' +
        ' <td> Energy </td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.ENERC_KCAL.quantity) + ' ' + recipeDetail.totalNutrients.ENERC_KCAL.unit + '</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>Fat</td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.FAT.quantity) + ' ' + recipeDetail.totalNutrients.FAT.unit + '</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>Carbs</td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.CHOCDF.quantity) + ' ' + recipeDetail.totalNutrients.ENERC_KCAL.unit + '</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>Sugar</td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.SUGAR.quantity) + ' ' + recipeDetail.totalNutrients.SUGAR.unit + '</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>Protein</td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.PROCNT.quantity) + ' ' + recipeDetail.totalNutrients.PROCNT.unit + '</td>' +
        ' </tr>' +
        ' <tr>' +
        ' <td>Sodium</td>' +
        ' <td>' + Math.trunc(recipeDetail.totalNutrients.NA.quantity) + ' ' + recipeDetail.totalNutrients.NA.unit + '</td>' +
        '</tr>'

    labels.innerHTML =
        '';
    let healthLabels = '';
    let labelObject = recipeDetail.healthLabels;
    if (labelObject.length >= 1) {
        for (let i = 0; i < labelObject.length; i++) {
            healthLabels += '' +
                ' <div class="l"><p>' +
                labelObject[i] +
                '</p></div>'

        }
        labels.innerHTML = healthLabels;
    }

})


