const axios = require('axios').default;
//****************************************Slider****************************************//
import {
    sliderData
} from './main'

let slideTrack = document.getElementById('slide-track');
sliderData().then((result) => {
    let slideResult = result;
    console.log(slideResult)
    let slideResultCount = slideResult.data.hits.length
    if (slideResultCount >= 1) {
        let TrackHTML = ""
        for (let i = 0; i < slideResultCount; i++) {
            console.log(slideResult.data.hits[i].recipe)
            let slideObject = slideResult.data.hits[i].recipe;
            //nieuwe entry
            TrackHTML +=
                '<div class="slide">\n' +
                    '<div class="slide-header slide-image">\n' +
                        '<img alt="" src=' + slideObject.image + '>\n' +
                    '</div>\n' +
                    '<div class="slide-body">\n' +
                        '<p>' + slideObject.label +'</p>\n' +
                    '</div>\n' +
                    '<div class="slide-footer">\n' +
                        '<div class="slfdiv">\n' +
                            '<p>' + Math.trunc(slideObject.calories) + '.Kcal&nbsp;|&nbsp;' + slideObject.ingredients.length + '.Ingredients</p>\n' +
                        '</div>\n' +
                        '<div class="slfdiv">\n' +
                            '<p class="slfdiv"><i class="fa-solid fa-clock-rotate-left"></i>' + slideObject.totalTime + '</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>'
        }
        slideTrack.innerHTML = TrackHTML;
    }
})
//****************************************Search****************************************//
import {
    fetchData
} from "./main"

let userInput = document.getElementById('search');
let searchSubmit = document.getElementById('search-bttn')
let searchContainer = document.getElementById('searchresult-inner-container')
searchSubmit.addEventListener('click', () => {
    let userInputText = userInput.value;
    if (userInputText !== "") {
        fetchData(userInputText).then((result) => {
            searchContainer.innerHTML = "";
            let recipesResult = result;
            console.log(recipesResult)
            let recipesResultCount = recipesResult.data.hits.length
            if (recipesResultCount >= 1) {
                let recipesHTML = ""
                for (let i = 0; i < recipesResultCount; i++) {
                    console.log(recipesResult.data.hits[i].recipe)
                    let recipeObject = recipesResult.data.hits[i].recipe;
                    //nieuwe entry
                    recipesHTML +=
                        '<a href="recipe-detail.html" class="card card-1" id="card">\n' +
                        ' <div class="card-header card-image">\n' +
                        '    <img alt="" src=' + recipeObject.image + '>\n' +
                        '     </div>\n' +
                        ' <div class="card-body">\n' +
                        '     <p>' + recipeObject.label + '</p>\n' +
                        ' </div>\n' +
                        ' <div class="card-footer">\n' +
                        '     <p>' + Math.trunc(recipeObject.calories) +'.Kcal&nbsp;|&nbsp;' + recipeObject.ingredients.length + '.Ingredients</p>\n' +
                        '<p><i class="fa-solid fa-clock-rotate-left"></i>&nbsp;' + recipeObject.totalTime + '</p>\n' +
                        ' </div>\n' +
                        ' </a>'
                }
                searchContainer.innerHTML = recipesHTML;
            }
        })
            .catch(reason => {
                alert(reason)
            })
    } else {
        alert('Please enter a query in searchbar.')
    }
})

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
