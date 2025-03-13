import Todos from "../model/todosModel.js";

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const todos = await Todos.find({ owner: userId })
      .populate("owner", "firstname")
      .sort({ updatedAt: -1 })
      .exec();
    // เรียง priority ตามลำดับที่ต้องการ (high > medium > low)
    todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    if (todos.length === 0) {
      return res.json({
        status: "success",
        message: "No task!",
        data: {},
      });
    }
    res.status(200).json({
      status: "success",
      message: "fetching todo list successfully.",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const userId = req.user.id;
    const newTodo = new Todos({
      owner: userId,
      title,
      description,
      priority,
    });
    await newTodo.save();
    res.json({
      status: "success",
      message: "To-Do created successfully!",
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, priority, status } = req.body.todos;
    const todoExist = await Todos.findOne({ _id: id });
    if (!todoExist) {
      return res.status(404).json({ message: "Todos not found." });
    }
    const updateTodos = await Todos.findByIdAndUpdate(
      id,
      { title, description, priority, status, updatedAt: Date.now() },
      { new: true }
    );

    res.json({
      status: "success",
      message: "",
      data: updateTodos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const todoExist = await Todos.findOne({ _id: id });
    if (!todoExist) {
      return res.status(404).json({ message: "Todos not found." });
    }
    const deleteTodos = await Todos.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: "",
      data: deleteTodos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
