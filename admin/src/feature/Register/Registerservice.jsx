import axios from "axios";
import { Url } from "../../api/Url";
const getTokenFromLocalStorage = localStorage.getItem("admin")
  ? localStorage.getItem("admin")
  : null;
export const config = {
  headers: {
    // "Content-Type": "multipart/form-data",
    Authorization: getTokenFromLocalStorage
      ? `Bearer ${getTokenFromLocalStorage}`
      : null,
    Accept: "application/json",
  },
};
export const Adminlogin = async (data) => {
  const response = await axios.post(`${Url.BASE_URL}api/v2/admin/login`, data);
  if (response?.data) {

    localStorage.setItem("admin", response?.data?.token)
  }
  return response.data;
};

//get

export const adminGet = async () => {
  try {
    const response = await axios.get(`${Url.BASE_URL}api/v2/admin-user`, config)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

//getOne

export const adminOneGet = async () => {
  try {
    const response = await axios.get(`${Url.BASE_URL}api/v2/admin/getOne`, config)
    return response.data
  } catch (err) {
    console.log(err)
  }
}


// update profile
export const adminUpdateProfile = async (data) => {
  try {
    const response = await axios.patch(`${Url.BASE_URL}api/v2/update-profile`,data, config)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

//update_password
export const adminUpdatePassword = async (data) => {
  try {
    const response = await axios.patch(`${Url.BASE_URL}api/v2/update-password`,data, config)
    return response.data
  } catch (err) {
    console.log(err)
  }
}




















