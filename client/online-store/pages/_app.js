import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { isAuthenticated } from '../helpers/User';
import { UserContext } from "../helpers/context";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({
    loggedIn: false,
    name: "",
    email: "",
    cart: [],
    orders: [],
    addresses: []
  });

  useEffect(async() => {
    const token = isAuthenticated();
    if(token){
      const result = await axios.get('http://localhost:5000/api/user/get', {
        headers: {
        "Authorization": "Bearer "+token
      }});
      setUser({
        loggedIn: true,
        name: result.data.user.name,
        email: result.data.user.email,
        cart: [...result.data.user.cart],
        orders: [...result.data.user.orders],
        addresses: [...result.data.user.addresses]
      })
    }

  }, [user.loggedIn, user.name, user.email])

  return(
      <ChakraProvider> 
        <UserContext.Provider value={{user, setUser}}>
        <Layout userState = { user }>
          <Component {...pageProps}/>
        </Layout>
        </UserContext.Provider>
      </ChakraProvider>
  )
}
export default MyApp
