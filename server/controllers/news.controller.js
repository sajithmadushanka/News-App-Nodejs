const axios  = require("axios");
const API_KEY = process.env.API_KEY

const getNews = async (req,res) => { 
    const text = req.params.stext
    const url = `https://newsapi.org/v2/everything?q=${text}&sortBy=publishedAt&apiKey=${API_KEY}&from=2023-03-09&pageSize=3`

    try {
        const axiosRep = await axios.get(url);
        res.status(200).json( axiosRep.data);
    } catch (error) {
        res.status(400).json({error:"an error occured!"});
    }
 }
 module.exports = {getNews};