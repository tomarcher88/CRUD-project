import { WatchListContext } from "../context/Context";
import { useContext, useState } from "react";
import { ListItem } from "./ListItem";

export const Celebrations = () => {
  const { celebrations, addItem, handleDone, handleDelete, setCelebrations, resetItems } =
    useContext(WatchListContext);
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <article className="w-full flex flex-col font-alice">
      <p className="p-2 w-11/12 mx-auto text-lg">Celebrations</p>
      <form
        action=""
        className="w-11/12 mx-auto flex"
        onSubmit={(e) => addItem(e, setCelebrations, setValue, value)}
      >
        <input
          type="text"
          placeholder="What are you celebrating today?"
          className="grow p-2 m-1 rounded bg-emerald-50"
          value={value}
          onChange={(e) => handleValue(e)}
        />
        <button
          type="submit"
          className="p-2 m-1 bg-emerald-500 rounded shadow shadow-slate-500"
        >
          Celebrate! 🎉
        </button>
      </form>
      <div className="w-11/12 mx-auto flex flex-col mt-1">
        <ul className="p-2 m-1 bg-emerald-50 rounded w-full list-disc">
          {celebrations.map((item) => (
            <ListItem
              itemObj={item}
              item={item.text}
              complete={item.isComplete}
              handleDone={() => handleDone(item, setCelebrations)}
              handleDelete={() => handleDelete(item, setCelebrations)}
              key={item.id}
              todo={false}
            />
          ))}
        </ul>
        {celebrations.length ? (
          <button
            onClick={(e) => resetItems(e, setCelebrations)}
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
