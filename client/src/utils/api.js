import axios from "axios";

const BASE_API = axios.create({baseURL:"http://localhost:5050/api/v1/"});

async function getNews(text){
        console.log("api called")
        try {
            const res = await BASE_API.get("/news/get/"+text);
            
            if(res.data.status === "ok"){
                return {error:false, data: res.data.articles};
            }else{
                return {error: true, data : "Unknown Error!"}
            }
        } catch (error) {
            return {error: true, data:"Error"}
        }
}


export {getNews}