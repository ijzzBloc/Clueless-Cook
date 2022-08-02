require('dotenv').config()
const axios = require('axios').default;

//****************************************-****************************************//
let mealType = document.getElementById("meal-type");
let mtOpt = mealType.options[mealType.selectedIndex].value;

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
