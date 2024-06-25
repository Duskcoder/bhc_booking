import axios from "axios";
import { Url } from "../../api/Url";
export const Adminlogin = async (data) => {
  const response = await axios.post(`${Url.BASE_URL}api/v2/admin/login`, data);
  if (response?.data) {

    localStorage.setItem("admin", response?.data?.token)
  }
  return response.data;
};



















