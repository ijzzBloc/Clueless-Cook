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

export async function fetchData(query, mtOptValue, csOptValue, dtOptValue, tmOptValue) {
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
                            mealType: mtOptValue,
                            cuisineType: csOptValue,
                            diet: dtOptValue,
                            time: tmOptValue,
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
export async function fetchRecipe(recipeID) {
    try {
        return new Promise(async (resolve, reject) => {
            await axios.get('https://api.edamam.com/api/recipes/v2/' + recipeID,
                {
                    params:
                        {
                            type: 'public',
                            app_id: process.env.API_ID,
                            app_key: process.env.API_KEY,
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
