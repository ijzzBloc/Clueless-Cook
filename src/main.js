require('dotenv').config()
const axios = require('axios').default;

//****************************************Slider****************************************//
export async function sliderData() {
    try {
        return new Promise(async (resolve, reject) => {
            await axios.get('https://api.edamam.com/api/recipes/v2',
                {
                    params:
                        {
                            type: 'public',
                            q: 'salad',
                            app_id: process.env.API_ID,
                            app_key: process.env.API_KEY,
                            random: 'true',
                            health: 'vegan',
                        }
                }).then((result) => {
                resolve(result)
            })
                .catch((result) => {
                    reject(result)
                })
        })
    } catch (e) {
        console.log(e)
    }
}
//****************************************Search****************************************//
// let mealType = document.getElementById("meal-type");
// let mtOpt = mealType.options[mealType.selectedIndex].value;
// mealType.addEventListener('onchange', function(){
// })
let mealType = document.getElementById("meal-type");
mealType.onchange = function () {
    let mtOpt = mealType.options[mealType.selectedIndex].value;
    console.log(mtOpt)
}
// let cuisine = document.getElementById("cuisine");
// cuisine.onchange = function () {
//     let csOpt = cuisine.options[cuisine.selectedIndex].value;
//     console.log(csOpt)
// }
// let diet = document.getElementById("diet");
// diet.onchange = function () {
//     let dtOpt = diet.options[diet.selectedIndex].value;
//     console.log(dtOpt)
// }

export async function fetchData(query, mtOpt) {
    try {
        return new Promise(async (resolve, reject) => {
            await axios.get('https://api.edamam.com/api/recipes/v2',
                {
                    params:
                        {
                            type: 'public',
                            q: query,
                            app_id: process.env.API_ID,
                            app_key: process.env.API_KEY,
                            mealType: mtOpt,
                        }
                }).then((result) => {
                resolve(result)
            })
                .catch((result) => {
                    reject(result)
                })
        })
    } catch (e) {
        console.log(e)
    }
}
//****************************************Calculator****************************************//
export async function calcData(calcInputText) {
    try {
        return new Promise(async (resolve, reject) => {
            await axios.get('https://api.edamam.com/api/food-database/v2/parser',
                {
                    params:
                        {
                            ingr: calcInputText,
                            app_id: process.env.ID_CALC,
                            app_key: process.env.KEY_CALC,
                        }
                }).then((result) => {
                resolve(result)
            })
                .catch((result) => {
                    reject(result)
                })
        })
    } catch (e) {
        console.log(e)
    }
}
