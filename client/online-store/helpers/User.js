import axios from 'axios';

const config = {
    header: {
        "Content-type": "application/json"
    }
}

//setting jwt token in client to authorise user requests
export const authenticate = token => {
    localStorage.setItem("token", JSON.stringify(token));
}

//removing auth token from client
export const deAuthenticate = () => {
    localStorage.removeItem("token");
}

//checking is user is authenticated
export const isAuthenticated = () => {
    if(typeof window === 'undefined'){
        return false;
    }

    if(localStorage.getItem("token")){
        return JSON.parse(localStorage.getItem("token"));
    }else return false;
}

//call to server to create new user 
export const signup = async(data) => {
    return await axios.post('http://localhost:5000/api/user/signup',
    data,config)
}

//verifying user login credentials with user
export const signin = async(data) => {
    return await axios.post('http://localhost:5000/api/user/login',
    data, config)
}

//signing out user
export const signout = () => {
    if(isAuthenticated()){
        deAuthenticate();
    }
}
