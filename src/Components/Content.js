import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Content = () => {
  const [input, setInput] = useState("");

  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      todo: todo,
      completed: false,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const toggleCompleted = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const toggleDelete = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full h-2/4  flex flex-col">
      {/* LEFT SIDE */}
      <div className="w-full h-full  flex justify-center items-center ">
        <div className="flex  items-center gap-3">
          <input
            className="w-44 h-12 "
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button
            className="w-24 h-12 bg-[#9064FD] text-white rounded-md"
            type="button"
            onClick={() => addTodo(input)}
          >
            Add ToDo
          </button>
          {console.log(list)}
        </div>
      </div>

      {/* RIGHT SIDE  */}
      <div className="w-full h-full  flex justify-center items-center">
        <ul className="w-3/4 ">
          {list.map((todo) => {
            return (
              <li
                className=" flex justify-center mt-3 rounded-md bg-[#9064FD] cursor-pointer  text-2xl  gap-5"
                key={todo.id}
              >
                <p
                  className={
                    todo.completed ? "line-through text-white" : "text-white"
                  }
                  onClick={() => toggleCompleted(todo.id)}
                >
                  {todo.todo}
                </p>
                <button
                  onClick={() => toggleDelete(todo.id)}
                  className="text-red-500 cursor-pointer"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
