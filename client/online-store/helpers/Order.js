import axios from 'axios'
import { isAuthenticated } from './User'

export const createOrder = async (orderData) => {
    console.log(orderData)
    const token = isAuthenticated()
    const order = await axios.put("http://localhost:5000/api/order/create",
    orderData,
    {
        headers: {
            "Authorization": "Bearer "+token
        }
    })

    return order.data;
}