import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useGetTodoList } from "@/hooks/useTodos";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TodosList = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetTodoList();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F8F9FF]">
      <div className="container max-w-screen-lg mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button>Add Task +</Button>
          <h1 className="text-lg font-bold text-[#67657E]">TODO LIST</h1>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Task List */}
        <div className="bg-[#ECEDF4] p-6 mt-2 rounded-lg">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            {/* Left Side: Checkbox & Task Details */}
            <div className="flex items-center gap-4">
              <Checkbox className="w-6 h-6 scale-110" />
              <div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-gray-800">Learn Next.js</p>
                  <Badge className="bg-purple-500 text-white">High</Badge>
                </div>
                <p className="text-gray-500 text-sm">5:21 AM, 03/10/2025</p>
              </div>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex gap-3">
              <button className="bg-gray-300 hover:bg-gray-400 hover:cursor-pointer p-2 rounded-lg">
                <PencilIcon className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer p-2 rounded-lg">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
