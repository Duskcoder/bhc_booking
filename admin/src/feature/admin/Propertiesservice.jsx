import axios from "axios"
import { Url } from "../../api/Url";
const getTokenFromLocalStorage = localStorage.getItem("admin")
    ? localStorage.getItem("admin")
    : null;


export const auth = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getTokenFromLocalStorage
            ? `Bearer ${getTokenFromLocalStorage}`
            : null,
        Accept: "application/json",
    },
};



export const config = {
    headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: getTokenFromLocalStorage
            ? `Bearer ${getTokenFromLocalStorage}`
            : null,
        Accept: "application/json",
    },
};
export const productCreate = async (data) => {
    try {
        const response = await axios.post(`${Url.BASE_URL}api/v2/create-product`, data, auth)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const productGet = async () => {
    try {
        const response = await axios.get(`${Url.BASE_URL}api/v2/get-product`, config)
        return response.data
    } catch (err) {
        console.log(err)
    }
}


export const productPatch = async (data) => {
    try {
        const response = await axios.patch(`${Url.BASE_URL}api/v2/patch-product/${data.id}`, data?.editeValue, config)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const productDelete = async (data) => {
    try {
        const response = await axios.delete(`${Url.BASE_URL}api/v2/delete-product/${data}`, config)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const productImageDelete = async (data) => {
    try {
        const response = await axios.post(`${Url.BASE_URL}api/v2/deleteImage`, data, config)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const productGetOne = async (data) => {
    try {
        const response = await axios.get(`${Url.BASE_URL}api/v2/get-one-product/${data}`, config)
        return response.data
    } catch (err) {
        console.log(err)
    }
}


