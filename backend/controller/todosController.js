import Todos from "../model/todosModel.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const newTodo = new Todos({
      owner: userId,
      title,
      description,
    });
    await newTodo.save();
    res
      .status(201)
      .json({ message: "To-Do created successfully!", todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await Todos.find({ owner: userId })
      .populate("owner", "firstname")
      .exec();

    if (todos.length === 0) {
      return res.status(404).json({ message: "No task!" });
    }
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
