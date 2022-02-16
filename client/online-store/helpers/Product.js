import axios from "axios";

const config = {
    header: {
    "content-type": "Application/json"
}}

export const getAllProds = async() => {
    const data = await axios.get("http://localhost:5000/api/product/all");
    return data.data;
}

// const seekData = async () => {
//     const prods = await axios.get("http://localhost:5000/api/product/all")
//     console.log(prods.data);
// }

export const getOneProd = async(id) => { 
    const data = await axios.get("http://localhost:5000/api/product/get/"+id);
    return data.data;
}