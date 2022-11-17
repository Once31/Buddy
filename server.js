import express from "express";

const app = express();

import todos from "./routes/todos.js";
import user from "./routes/user.js";

const PORT = process.env.PORT || 3500;

app.get("/todos", todos);
app.get("/user/[0-9]+", user);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
