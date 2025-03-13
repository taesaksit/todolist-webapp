import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  useGetTodoList,
  useUpdateStatus,
  useDeleteTodo,
} from "@/hooks/useTodos";
import { Checkbox } from "@/components/ui/checkbox";
import { CreateTodos } from "@/components/modals/create-todo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import moment from "moment";
import { UpdateTodos } from "@/components/modals/update-todos";
import { TrashIcon } from "@heroicons/react/24/solid";

export const TodosList = () => {
  const { data: todos, isLoading } = useGetTodoList();
  const { mutate: updateStatus } = useUpdateStatus();
  const { mutate: deleteTodo } = useDeleteTodo();
  const [priorityFilter, setPriorityFilter] = useState("all"); // เพิ่ม state สำหรับการกรองตาม priority

  // Filter Priority
  const filteredTodos = Array.isArray(todos)
    ? todos.filter((todo) => {
        const matchesPriority =
          priorityFilter === "all" || todo.priority === priorityFilter;
        return matchesPriority;
      })
    : [];

  // Update Status
  const handleToggleStatus = (todoId: string, currentStatus: string) => {
    const newStatus = currentStatus === "done" ? "pending" : "done"; // Toggle Status
    updateStatus({ id: todoId, todos: { status: newStatus } });
  };

  // Delete Status
  const handleDelete = (todoId: string) => {
    deleteTodo({ id: todoId});
  };

  return (
    <div className="flex flex-col w-full  bg-[#F8F9FF]">
      <div className="container max-w-screen-lg  mx-auto p-6 ipad:h-[92vh] laptop:h-[93vh] tv:h-[94vh]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <CreateTodos />
          <h1 className="text-lg font-bold text-[#67657E]">TODO LIST</h1>
          <Select
            value={priorityFilter}
            onValueChange={(value) => setPriorityFilter(value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Filter Stats */}
        <div className="mt-3 mb-2 flex items-center gap-2 text-sm text-gray-500">
          <span>
            Showing: {filteredTodos?.length || 0} of {todos?.length || 0} tasks
          </span>
          {priorityFilter !== "all" && (
            <Badge variant="outline" className="bg-gray-100">
              Priority: {priorityFilter}
              <button
                className="ml-1 text-xs"
                onClick={() => {
                  setPriorityFilter("all");
                }}
              >
                ✕
              </button>
            </Badge>
          )}
        </div>

        {/* Task List */}
        <div className="bg-[#ECEDF4] p-6 mt-2 rounded-lg h-[80vh] tv:h-[50vh] overflow-y-auto">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : todos?.length === 0 ? (
            <p className="text-center text-gray-500">No tasks found.</p>
          ) : (
            filteredTodos?.map((todo) => (
              <div
                key={todo._id}
                className="bg-white p-4 rounded-lg shadow flex items-center justify-between mt-2"
              >
                {/* Left Side: Checkbox & Task Details */}
                <div className="flex items-center gap-4">
                  <Checkbox
                    className="w-6 h-6 scale-110"
                    checked={todo.status === "done"}
                    onCheckedChange={() =>
                      handleToggleStatus(todo._id, todo.status)
                    }
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <p
                        className={`font-semibold text-gray-800 ${
                          todo.status === "done"
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                      >
                        {todo.title}
                      </p>
                      <Badge
                        className={`${
                          todo.priority === "high"
                            ? "bg-purple-400"
                            : todo.priority === "medium"
                            ? "bg-amber-400"
                            : "bg-gray-400"
                        } text-white`}
                      >
                        {todo.priority}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">
                      {todo.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {moment(todo.updatedAt).format("YYYY-MM-DD")}
                    </p>
                  </div>
                </div>

                {/* Right Side: Action Buttons */}
                <div className="flex gap-3">
                  <UpdateTodos selectTodo={todo} />

                  <button className="bg-red-400 hover:bg-red-600 hover:cursor-pointer p-2 rounded-lg"
                  onClick={()=> handleDelete(todo._id)}
                  >
                    <TrashIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
