import express from "express";
const app = express();

app.use(express.json());

import todos from "./routes/todos.js";
import user from "./routes/user.js";

const PORT = process.env.PORT || 3500;

app.use("/todos", todos);
app.use("/user", user);

app.all("*", (req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
