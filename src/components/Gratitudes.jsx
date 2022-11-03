import { WatchListContext } from "../context/Context";
import { useContext, useState } from "react";
import { ListItem } from "./ListItem";

export const Gratitudes = () => {
  const { gratitudes, addItem, handleDone, handleDelete, setGratitudes, resetItems } =
    useContext(WatchListContext);
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <article className="w-full flex flex-col font-alice">
      <p className="p-2 w-11/12 mx-auto text-lg">Gratitudes</p>
      <form
        action=""
        className="w-11/12 mx-auto flex"
        onSubmit={(e) => addItem(e, setGratitudes, setValue, value)}
      >
        <input
          type="text"
          placeholder="I am grateful for..."
          className="grow p-2 m-1 rounded bg-emerald-50"
          value={value}
          onChange={(e) => handleValue(e)}
        />
        <button
          type="submit"
          className="p-2 m-1 bg-emerald-500 rounded shadow shadow-slate-500"
        >
          Gratitude 🙏
        </button>
      </form>
      <div className="w-11/12 mx-auto flex flex-col mt-1">
        <ul className="p-2 m-1 bg-emerald-50 rounded w-full list-disc">
          {gratitudes.map((item) => (
            <ListItem
              itemObj={item}
              item={item.text}
              complete={item.isComplete}
              handleDone={() => handleDone(item, setGratitudes)}
              handleDelete={() => handleDelete(item, setGratitudes)}
              key={item.id}
              todo={false}
            />
          ))}
        </ul>
        {gratitudes.length ? (
          <button
            onClick={(e) => resetItems(e, setGratitudes)}
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
