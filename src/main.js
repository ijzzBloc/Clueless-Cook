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
let mtOpt = document.getElementById("meal-type");
mtOpt.onchange = function () {
    console.log(mtOpt.options[mtOpt.selectedIndex].value)
}
let csOpt = document.getElementById("cuisine");
csOpt.onchange = function () {
    console.log(csOpt.options[csOpt.selectedIndex].value)
}
let dtOpt = document.getElementById("diet");
dtOpt.onchange = function () {
    console.log(dtOpt.options[dtOpt.selectedIndex].value)
}
let tmOpt = document.getElementById("time");
tmOpt.onchange = function () {
    console.log(tmOpt.options[tmOpt.selectedIndex].value)
}
export async function fetchData(query) {
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
                            mealType: mtOpt.value,
                            cuisineType: csOpt.value,
                            diet: dtOpt.value,
                            time: tmOpt.value,
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
