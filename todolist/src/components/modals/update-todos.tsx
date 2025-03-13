import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TTodos, TUpdateTodos } from "@/types/todos/todos";
import { useUpdateTodo } from "@/hooks/useTodos";
import { PencilIcon } from "@heroicons/react/24/solid";

interface UpdateTodosProps {
  selectTodo: TTodos; // รับ selectTodo เป็น props
}

export function UpdateTodos({ selectTodo }: UpdateTodosProps) {
  const [title, setTitle] = useState(selectTodo?.title || "");
  const [description, setDescription] = useState(selectTodo?.description || "");
  const [priority, setPriority] = useState(selectTodo?.priority || "high");
  const [showError, setShowError] = useState(false);
  const { mutate: updateTodo } = useUpdateTodo();

  const handleSubmit = () => {
    if (!title) {
      setShowError(true);
      return;
    }

    const updateTask: TUpdateTodos = { title, description, priority };
    updateTodo({ id: selectTodo._id, todo: updateTask });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-gray-300 hover:bg-gray-400 hover:cursor-pointer p-2 rounded-lg">
          <PencilIcon className="w-5 h-5 text-gray-700" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Modify the task details below</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={showError && !title ? "border-2 border-red-400" : ""}
          />
          {showError && !title && (
            <p className="text-xs text-red-400">This field is required</p>
          )}

          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Label>Priority</Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger>
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Update Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
