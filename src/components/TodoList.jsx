import { WatchListContext } from "../context/Context";
import { useContext, useState } from "react";
import { ListItem } from "./ListItem";


export const TodoList = () => {
  const [value, setValue] = useState('');
  const { setToDoItem, toDoItem, addItem, handleDone, handleDelete, resetItems } =
    useContext(WatchListContext);

  const handleValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <article className="w-full flex flex-col font-alice">
      <p className="p-2 w-11/12 mx-auto text-lg">To do list</p>
      <form
        className="w-11/12 mx-auto flex"
        onSubmit={(e) => addItem(e, setToDoItem, setValue, value)}
      >
        <input
          type="text"
          placeholder="Add item to list"
          className="grow p-2 m-1 rounded bg-emerald-50"
          value={value}
          onChange={(e) => handleValue(e)}
        />
        <button
          type="submit"
          className="p-2 m-1 bg-emerald-500 rounded shadow shadow-slate-500"
        >
          Todo 🗄️
        </button>
      </form>
      <div className="w-11/12 mx-auto flex flex-col mt-1">
        <ul className="p-2 m-1 bg-emerald-50 rounded w-full list-disc">
          {toDoItem.map((item) => (
            <ListItem
              itemObj={item}
              item={item.text}
              complete={item.isComplete}
              handleDone={() => handleDone(item, setToDoItem)}
              handleDelete={() => handleDelete(item, setToDoItem)}
              key={item.id}
              todo={true}
            />
          ))}
        </ul>
        {toDoItem.length ? (
          <button
            onClick={(e) => resetItems(e, setToDoItem)}
            className="p-2 m-1 bg-emerald-500 rounded shadow shadow-slate-500"
          >
            Clear All ❌
          </button>
        ) : (
          ""
        )}
      </div>
    </article>
  );
};
