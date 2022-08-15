import {
    fetchRecipe
} from './main'

getParameter = (recipeID) => {
    address = window.location.search
    parameterList = new URLSearchParams(address)
    return parameterList.get(recipeID)
}
let recipeID = (getParameter('recipeID'))
fetchRecipe(recipeID).then((result) => {
    console.log(result.data.recipe)
    let recipeDetail = result.data.recipe
    let recipeIMG = document.getElementById('recipe-image')
    let ingredients = document.getElementsByClassName('instructions')
    let nutrients = document.getElementById('nutrients-table')
    let labels = document.getElementById('l-box')
    recipeIMG.innerHTML = ""
    let recipesIMGHTML = ""
    recipesIMGHTML +=
        '<div class="recipe-image" id="recipe-image">\n' +
        '<img alt="" src=' + recipeDetail.image + '>\n' +
        '</div>'
    recipeIMG.innerHTML = recipesIMGHTML;
//     let recipeIngredients = result.data.recipe.ingredients
//     console.log(recipeIngredients)
// })





    ingredients.innerHTML = ""
    let recipeIngredients = result.data.recipe.ingredients
    console.log(recipeIngredients)
    let recipeIngredientsCount = result.data.recipe.ingredients
    if (recipeIngredientsCount >= 1) {
        for (let i = 0; i < recipeIngredientsCount; i++) {
            console.log(recipeIngredientsCount[i].ingredients)
            let ingredientsObject = recipeIngredientsCount[i].ingredients;
            console.log(ingredientsObject)
            let ingredientsHTML = ""
            ingredientsHTML +=
                '<li>' + ingredientsObject + '</li>'
            ingredients.innerHTML = ingredientsHTML
        }
    }
})




