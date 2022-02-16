import axios from "axios"
import { isAuthenticated } from "./User";

export const toCart = async(data) => {
    const token = isAuthenticated();
    const cart = await axios.put("http://localhost:5000/api/user/toCart",
        {pid: data},
        {
            headers : {
                "Authorization": "Bearer "+token
        }
    })

    return cart;

}