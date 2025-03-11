import axios from 'axios';
import { TypeDataAPI } from '@/types/api';
import { TLogin, TUserData } from '@/types/login/login';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const APIPages = {
    PostRegister: '/register'
}
const { PostRegister } = APIPages;
//! ---------------------------- [POST] ----------------------------
export const fetchPostRegister = async (ReqData: TLogin): Promise<TypeDataAPI<TUserData>> => {
    try {
        console.log(BASE_URL, PostRegister)
        const { data } = await axios.post(`${BASE_URL}${PostRegister}`, ReqData);
        return (
            data ?? { data: {} as TUserData, status: 'error', message: 'No data', }
        )
    } catch (error) {
        console.error("Error API page: ", PostRegister, error);
        return { data: {} as TUserData, status: 'error', message: 'API Error' }
    }

}