import axiosInstance from "../axios-instance";
import { TypeDataAPI } from "../../types/api";

import { TTodos } from "@/types/todos/todos";

const APIPages = {
    GetTodos: '/todos',
    PostCreateUser: '/manage-user/create-user',
    PutUpdateUser: '/manage-user/update-user',
    PutDeleteUser: '/manage-user/delete-user'
}

export const fetchTotoList: () => Promise<TypeDataAPI<TTodos[]>> = async () => {
    try {
        const { data } = await axiosInstance.get(APIPages.GetTodos);
        return data ?? { data: [] as TTodos[] };

    } catch (error) {
        return { data: [] as TTodos[] };
    }
};

// export const fetchPostCreateUser: (reqData: TCreateUser) => Promise<TypeDataAPI<TUserList>> = async (reqData) => {
//     try {
//         const { data } = await axiosInstance.post(APIPages.PostCreateUser, reqData);
//         return data ?? { data: [] as TUserList[] };

//     } catch (error) {
//         console.error('Error fetching user list: ', error);
//         return { data: [] as TUserList[] };
//     }
// };

// export const fetchPutUpdateUser: (reqData: TUpdateUser) => Promise<TypeDataAPI<TUserList>> = async (reqData) => {
//     try {
//         const { data } = await axiosInstance.put(APIPages.PutUpdateUser, reqData);
//         return data ?? { data: [] as TUserList[] };

//     } catch (error) {
//         console.error('Error updating user: ', error);
//         return { data: [] as TUserList[] };
//     }
// };

// export const fetchDeleteUser: (reqData: TDeleteUser) => Promise<TypeDataAPI<TUserList>> = async (reqData) => {
//     try {
//         const { data } = await axiosInstance.put(APIPages.PutDeleteUser, reqData);
//         return data ?? { data: [] as TUserList[] };

//     } catch (error) {
//         console.error('Error deleting user: ', error);
//         return { data: [] as TUserList[] };
//     }
// };