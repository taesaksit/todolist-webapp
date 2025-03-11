import axios from 'axios';
import { TypeDataAPI } from '@/types/api';
import { TLogin, TUserData } from '@/types/login/login';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const APIPages = {
    PostLogin: '/login'
}
const { PostLogin } = APIPages;
//! ---------------------------- [POST] ----------------------------
export const fetchPostLogin = async (ReqData: TLogin): Promise<TypeDataAPI<TUserData>> => {
    try {
        console.log(BASE_URL, PostLogin)
        const { data } = await axios.post(`${BASE_URL}${PostLogin}`, ReqData);
        return (
            data ?? { data: {} as TUserData, status: 'error', message: 'No data', }
        )
    } catch (error) {
        console.error("Error API page: ", PostLogin, error);
        return { data: {} as TUserData, status: 'error', message: 'API Error' }
    }

}