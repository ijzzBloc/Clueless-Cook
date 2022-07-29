import {
    fetchData
} from "./main"

let userInput = document.getElementById('search');
let searchSubmit = document.getElementById('search-bttn')
let searchContainer = document.getElementById('searchresult-inner-container')

searchSubmit.addEventListener('click', () => {
    let userInputText = userInput.value;
    if(userInputText !== ""){
        fetchData(userInputText).then((result) => {
            searchContainer.innerHTML = "";
            let recipesResult = result;
            console.log(recipesResult)
            let recipesResultCount = recipesResult.data.hits.length
            if(recipesResultCount >= 1){
                let recipesHTML = ""
                for (let i = 0; i < recipesResultCount; i++) {
                    console.log(recipesResult.data.hits[i].recipe)
                    let recipeObject = recipesResult.data.hits[i].recipe;
                    //Create a new entry
                    recipesHTML+= '<div class="card card-1">\n' +
                        ' <div class="card-header card-image">\n' +
                        '    <img alt="" src='+recipeObject.image +'>\n' +
                        '     </div>\n' +
                        ' <div class="card-body">\n' +
                        '     <p>'+recipeObject.label +'</p>\n' +
                        ' </div>\n' +
                        ' <div class="card-footer">\n' +
                        '     <p>300 calories&nbsp;|&nbsp;10 ingredients</p>\n' +
                        '     <i class="fa-solid fa-clock-rotate-left"></i>\n' +
                        '     <p>&nbsp;&nbsp;20 mins.</p>\n' +
                        ' </div>\n' +
                        ' </div>'
                }
                searchContainer.innerHTML = recipesHTML;

            }
        })
            .catch(reason => {
                alert(reason)
            })
    } else {
        alert('Please fill in a recipe')
    }

})

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
