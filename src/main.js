require('dotenv').config()
import axios from 'axios';
const axios = require('axios').default;

//********************-********************//
export async function fetchData(query) {
    try {
        // const res = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=%22chicken%22&app_id=9401dfa0&app_key=' + process.env.API_KEY + '&random=true')
        const res2 = await axios.get('https://api.edamam.com/api/recipes/v2',
            {
                params:
                    {
                        type: 'public',
                        q: query,
                        app_id: process.env.API_ID,
                        app_key: process.env.API_KEY,
                    }
            }).then((result) => {
            console.log(result)
        })
    } catch (e) {
        console.log(e)
    }
}