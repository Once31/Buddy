import path from "node:path";
import fetch from "node-fetch";

const user = async (req, res) => {
  const userId = path.basename(req.path);

  const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonTodos = await todosData.json();

  const todos = jsonTodos.filter((todo) => todo.userId === parseInt(userId));

  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const jsonUser = await user.json();

  const id = jsonUser.id;
  const name = jsonUser.name;
  const email = jsonUser.email;
  const phone = jsonUser.phone;
  res.json({ id, name, email, phone, todos });
};

export default user;
