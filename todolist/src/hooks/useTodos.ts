// 1. Third-party libraries
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// 2. Custom hooks
import useToast from "./useToast";

// 4. Type
import { TypeDataAPI } from "@/types/api";
import { TTodos } from "@/types/todos/todos";

// 5. Service
import { fetchTotoList } from "@/services/todos/todos.service";
// 6. Constants
import { queryKey } from "@/constants/query-keys";

export const useGetTodoList = () => {
  const navigate = useNavigate();

  return useQuery<TTodos[], Error>({
    queryKey: [queryKey.GET_TODOS],
    queryFn: async () => {
      const response = await fetchTotoList();
      if (response.status === "success") {
        console.log(response.data);
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

// export const useCreateUser = () => {
//   const [userList, setUserList] = useAtom(userListAtom);
//   const queryClient = useQueryClient();
//   const { setToastAlert } = useToast();
//   return useMutation<TypeDataAPI<TUserList>, Error, TUpdateUser>({
//     mutationFn: fetchPostCreateUser,
//     onSuccess: (response, variables) => {
//       if (response && response.status === "success") {
//         queryClient.invalidateQueries({ queryKey: [queryKey.CRETE_USER] });
//         setUserList([...userList, variables]);
//         setToastAlert({ type: "success", message: response.message });
//       } else {
//         setToastAlert({ type: "error", message: response.message });
//       }
//     },
//   });
// };

// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();
//   const [userList, setUserList] = useAtom(userListAtom);
//   const { setToastAlert } = useToast();
//   return useMutation<TypeDataAPI<TUserList>, Error, TCreateUser>({
//     mutationFn: fetchPutUpdateUser,
//     onSuccess: (response, variables) => {
//       if (response && response.status === "success") {
//         queryClient.invalidateQueries({ queryKey: [queryKey.UPDATE_USER] });
//         const updatedList = userList.map((user) =>
//           user.employee_id === variables.employee_id ? variables : user
//         );
//         setUserList(updatedList);
//         setToastAlert({ type: "success", message: response.message });
//       } else {
//         setToastAlert({ type: "error", message: response.message });
//       }
//     },
//   });
// };

// export const useDeleteUser = () => {
//   const queryClient = useQueryClient();
//   const [userList, setUserList] = useAtom(userListAtom);
//   const { setToastAlert } = useToast();

//   return useMutation<TypeDataAPI<TUserList>, Error, TDeleteUser>({
//     mutationFn: fetchDeleteUser,
//     onSuccess: (response, variables) => {
//       if (response.status === "success") {
//         queryClient.invalidateQueries({ queryKey: [queryKey.DELETE_USER] });
//         const updatedList = userList.filter(
//           (user) => user.employee_id !== variables.employee_id
//         );
//         setUserList(updatedList);
//         setToastAlert({ type: "success", message: response.message });
//       } else {
//         setToastAlert({ type: "error", message: response.message });
//       }
//     },
//   });
// };
