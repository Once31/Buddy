import fetch from "node-fetch";

const userController = async (req, res) => {
  const userId = req.params.id;

  const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonTodos = await todosData.json();

  const todos = jsonTodos.filter((data) => {
    return data.userId === parseInt(userId);
  });

  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const jsonUser = await userData.json();
  console.log(userId);

  const id = jsonUser.id;
  const name = jsonUser.name;
  const email = jsonUser.email;
  const phone = jsonUser.phone;

  res.json({ id, name, email, phone, todos });
};

export default userController;
