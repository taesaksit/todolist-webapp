import Todos from "../model/todosModel.js";

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;

    const todos = await Todos.find({ owner: userId })
      .populate("owner", "firstname")
      .sort({ 
        status: -1, // เรียงสถานะ (pending ขึ้นก่อน done)
        priority: 1, // เรียงตาม priority (high > medium > low)
        updatedAt: -1 // เรียงตาม updatedAt (ใหม่สุดก่อน)
      })
      .exec();

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
