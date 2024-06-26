import axios from "axios";
import { Url } from "../../api/Url";
const getTokenFromLocalStorage = localStorage.getItem("admin")
  ? localStorage.getItem("admin")
  : null;

export const config = {
  headers: {
    Authorization: getTokenFromLocalStorage
      ? `Bearer ${getTokenFromLocalStorage}`
      : null,
    Accept: "application/json",
  },
};

export const mainTainenceGet = async () => {
  try {
    const response = await axios.get(`${Url.BASE_URL}api/v2/get-query`, config);
    return response.data;
  } catch (error) {}
};



export const mainTainencePatch= async(data)=>{
    try{
        const response = await axios.patch(`${Url.BASE_URL}api/v2/update-query/${data?.id}`,{status:data?.data},config)
        return response.data

    }catch(error){}
}