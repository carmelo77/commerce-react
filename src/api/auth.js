import { API_HOST } from "../utils/constants";
import jwtDecode from "jwt-decode";

export const signinApi = async ( form ) => {
    const user = {
        ...form
    }

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }

    try {
        const res = await fetch(`${API_HOST}/login`, params);
        const response = await res.json();
        return response;

    } catch (error) {
        return error;
    }
}


export const registerApi = async ( form ) => {

    const user = {
        ...form,
        email: form.email.toLowerCase(),
        role: 2
    };
    
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    try {
        const res = await fetch(`${API_HOST}/register`, params);
        const response = await res.json();
        return response;
    } catch (error) {
        return error;
    }
}

export const userLogged = async (ID, token) => {
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": token  
        }
    }

    try {
        const res = await fetch(`${API_HOST}/user/${ID}`, params);
        const response = await res.json();
        return response;
    } catch (err) {
        return err;
    }
}

export const isTokenExpired = ( token ) => {
    if( !token ) {
        return true;
    }

    const { exp } = jwtDecode(token);

    if(exp * 1000 < Date.now()) {
        return true; //is Expired
    }

    return false; //not expired

}