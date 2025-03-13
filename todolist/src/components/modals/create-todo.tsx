import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription, // ✅ เพิ่ม DialogDescription
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
import { TCraeteTodos } from "@/types/todos/todos";
import { useCreateTodos } from "@/hooks/useTodos";

export function CreateTodos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");
  const [showError, setShowError] = useState(false);
  const { mutate: createTodos } = useCreateTodos();
  const handleSubmit = () => {
    if (!title) {
      setShowError(true);
      return;
    }

    const newTask: TCraeteTodos = { title, description, priority };
    createTodos(newTask);
  };

  const clearState = () => {
    setTitle("")
    setDescription("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={clearState}>Add Task +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            Fill out the details below to add a new task.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Task Title */}
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${
                showError && !title ? "border-2 border-red-400" : ""
              }`}
            />
            {showError && !title && (
              <p className="text-xs text-red-400 my-1">
                This field is required
              </p>
            )}
          </div>

          {/* Task Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Task Priority */}
          <div className="grid gap-2">
            <Label>Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger>
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high" className="text-red-500">
                  High
                </SelectItem>
                <SelectItem value="medium" className="text-yellow-500">
                  Medium
                </SelectItem>
                <SelectItem value="low" className="text-green-500">
                  Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit Button */}
        <DialogFooter>
          <Button onClick={handleSubmit}>Add Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
