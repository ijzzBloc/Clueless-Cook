require('dotenv').config()
import axios from 'axios';

const axios = require('axios').default;
const API = 'https://api.edamam.com/api/recipes/v2'

//****************************************-****************************************//
export async function fetchData(query) {
    try {
        const search = await axios.get(API,
            {
                params:
                    {
                        type: 'public',
                        q: query,
                        app_id: process.env.API_ID,
                        app_key: process.env.API_KEY,
                    }
            }).then((result) => {
            console.log(result.data.hits)
        })
    } catch (e) {
        console.log(e)
    }
}
