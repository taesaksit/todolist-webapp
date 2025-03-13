// 1. Third-party libraries
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// 2. Custom hooks
import useToast from "./useToast";

// 4. Type
import { TypeDataAPI } from "@/types/api";
import { TCraeteTodos, TTodos, TUpdateTodos } from "@/types/todos/todos";

// 5. Service
import {
  fetchDeleteTodo,
  fetchPostCreateTodos,
  fetchTotoList,
  fetchUpdateStatus,
  fetchUpdateTodo,
} from "@/services/todos/todos.service";

// 6. Constants
import { queryKey } from "@/constants/query-keys";

export const useGetTodoList = () => {
  const navigate = useNavigate();

  return useQuery<TTodos[], Error>({
    queryKey: [queryKey.GET_TODOS],
    queryFn: async () => {
      const response = await fetchTotoList();
      if (response.status === "success") {
        return response.data;
      } else {
        navigate("/todos");
      }
      throw new Error(response.message || "Failed to fetch todo-list");
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

export const useCreateTodos = () => {
  const queryClient = useQueryClient();
  const { setToastAlert } = useToast();
  return useMutation<TypeDataAPI<[]>, Error, TCraeteTodos>({
    mutationFn: fetchPostCreateTodos,
    onSuccess: (response) => {
      if (response && response.status === "success") {
        queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODOS] });
        setToastAlert({ type: "success", message: response.message });
      } else {
        setToastAlert({ type: "error", message: response.message });
      }
    },
  });
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  const { setToastAlert } = useToast();

  return useMutation<
    TypeDataAPI<[]>,
    Error,
    { id: string; todos: TUpdateTodos }
  >({
    mutationFn: ({ id, todos }) => fetchUpdateStatus(id, todos),
    onSuccess: (response) => {
      if (response.status === "success") {
        queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODOS] });
        setToastAlert({
          type: "success",
          message: "Status updated successfully!",
        });
      } else {
        setToastAlert({ type: "error", message: response.message });
      }
    },
    onError: () => {
      setToastAlert({ type: "error", message: "Failed to update status." });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { setToastAlert } = useToast();

  return useMutation<
    TypeDataAPI<[]>,
    Error,
    { id: string; todo: TUpdateTodos }
  >({
    mutationFn: ({ id, todo }) => fetchUpdateTodo(id, todo),
    onSuccess: (response) => {
      if (response.status === "success") {
        queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODOS] });
        setToastAlert({
          type: "success",
          message: "Task updated successfully!",
        });
      } else {
        setToastAlert({ type: "error", message: response.message });
      }
    },
    onError: () => {
      setToastAlert({ type: "error", message: "Failed to update status." });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { setToastAlert } = useToast();

  return useMutation<TypeDataAPI<[]>, Error, { id: string }>({
    mutationFn: ({ id }) => fetchDeleteTodo(id),
    onSuccess: (response) => {
      if (response.status === "success") {
        queryClient.invalidateQueries({ queryKey: [queryKey.GET_TODOS] });
        setToastAlert({
          type: "success",
          message: "Task deleted successfully!",
        });
      } else {
        setToastAlert({ type: "error", message: response.message });
      }
    },
    onError: () => {
      setToastAlert({ type: "error", message: "Failed to update status." });
    },
  });
};
