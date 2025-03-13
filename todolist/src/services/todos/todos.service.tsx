import axiosInstance from "../axios-instance";
import { TypeDataAPI } from "../../types/api";

import { TCraeteTodos, TTodos, TUpdateTodos } from "@/types/todos/todos";

const APIPages = {
  GetTodos: "/todos",
  PostCreateTodos: "/todos",
  UpdateTodos: "/todos",
};

export const fetchTotoList: () => Promise<TypeDataAPI<TTodos[]>> = async () => {
  try {
    const { data } = await axiosInstance.get(APIPages.GetTodos);
    return data ?? { data: [] as TTodos[] };
  } catch (error) {
    return { data: [] as TTodos[] };
  }
};

export const fetchPostCreateTodos: (
  reqData: TCraeteTodos
) => Promise<TypeDataAPI<[]>> = async (reqData) => {
  try {
    const { data } = await axiosInstance.post(
      APIPages.PostCreateTodos,
      reqData
    );
    return data ?? { data: [] as TCraeteTodos[] };
  } catch (error) {
    console.error(error);
    return { data: [] as TCraeteTodos[] };
  }
};

export const fetchUpdateStatus: (
  id: string,
  todos: TUpdateTodos
) => Promise<TypeDataAPI<[]>> = async (id, todos) => {
  try {
    const { data } = await axiosInstance.put(APIPages.UpdateTodos + `/${id}`, {
      todos,
    });
    return data ?? { data: [] };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

export const fetchUpdateTodo: (
  id: string,
  todos: TUpdateTodos
) => Promise<TypeDataAPI<[]>> = async (id, todos) => {
  try {
    const { data } = await axiosInstance.put(APIPages.UpdateTodos + `/${id}`, {
      todos,
    });
    return data ?? { data: [] };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

export const fetchDeleteTodo: (id: string) => Promise<TypeDataAPI<[]>> = async (
  id
) => {
  try {
    const { data } = await axiosInstance.delete(APIPages.UpdateTodos + `/${id}`);
    return data ?? { data: [] };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};
