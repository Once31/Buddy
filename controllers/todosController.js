import fetch from "node-fetch";

const todosController = async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const jsonData = await response.json();
  const data = jsonData.map((data) => {
    const id = data.id;
    const title = data.title;
    const completed = data.completed;
    return { id, title, completed };
  });
  res.json(data);
};

export default todosController;
