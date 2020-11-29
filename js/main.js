// import ('dotenv').congif();
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

//remember, make a .env file and save your key
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

let res = async () => {
    await axios.get(`${BASE_URL}zip=11102,us&appid=${API_KEY}`,
    {
        "appid": API_KEY
    }).then(res => {
        console.log(res)
    })
}

res()