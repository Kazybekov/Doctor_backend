const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//app.use(bodyParser);

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/doctor", async (req, res) => {
  try {

    const email=req.body.email
    const degree=req.body.degree

    console.log(email)
    console.log(degree)

    const newTodo = await pool.query(
      "INSERT INTO doctor (email,degree) VALUES($1,$2)  RETURNING *",[email,degree]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get( "/doctor" , async (req, res) => {
  try {
    const listdoctor = await pool.query("SELECT * FROM doctor");
    res.json(listdoctor.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM doctor WHERE email = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/doctor/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const { degree } = req.body;

    console.log(id)
    console.log(degree)

    const updateTodo = await pool.query(
      "UPDATE doctor SET degree = $2 WHERE email = $1",
      [id, degree]
    );

    res.json("Doctor was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// //delete a todo
//
app.delete("/doctor/:email", async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email)
    const deleteTodo = await pool.query("DELETE FROM doctor WHERE email = $1", [
      email
    ]);
    res.json("Doctor  was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
