import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { BiCheckboxChecked } from "react-icons/bi";

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
            className="w-44 h-12 rounded-2xl outline-none focus:border-2 focus:border-[#9064FD] pl-4 bg-[#3b329a] text-xl text-white"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button
            className="w-24 h-12 bg-[#9064FD] text-white rounded-2xl font-bold hover:scale-105"
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
                className={`flex justify-between px-5  mt-3 rounded-md bg-[#9064FD] cursor-pointer  text-base sm:text-xl lg:text-2xl h-12 items-center ${
                  todo.completed ? "bg-green-500 text-white" : "text-white"
                } `}
                key={todo.id}
              >
                <p>{todo.todo}</p>
                <div className="flex  gap-2">
                  <button
                    onClick={() => toggleCompleted(todo.id)}
                    className="text-green-500 cursor-pointer"
                  >
                    <BiCheckboxChecked size={25} />
                  </button>
                  <button
                    onClick={() => toggleDelete(todo.id)}
                    className="text-red-500 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
