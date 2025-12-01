import { pool } from "../../config/db";

// Record<string, unkown> = {key: value}
const createTodo = async (payload: Record<string, unknown>) => {
  const { user_id, title } = payload;
  const result = await pool.query(
    `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
    [user_id, title]
  );

  return result;
};

const getTodos = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result;
};

const getSingleTodo = async (id: string) => {
  const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
  return result;
};

const updateTodo = async (payload: Record<string, unknown>, id: string) => {
  const { title, completed } = payload;
  const result = await pool.query(
    "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
    [title, completed, id]
  );
  return result;
};

const deleteTodo = async (id: string) => {
  const result = await pool.query("DELETE FROM todos WHERE id=$1 RETURNING *", [
    id,
  ]);
  return result;
};

export const todoServices = {
  createTodo,
  getTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
