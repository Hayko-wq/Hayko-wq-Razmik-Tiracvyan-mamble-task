import { useState } from "react";
import { ToDoList } from "../../components/todoList";

export const Home = () => {
  const [completed, setCompleted] = useState([]);

  return <ToDoList completed={completed} setCompleted={setCompleted}/>;
};
