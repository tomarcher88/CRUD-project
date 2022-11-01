export const Celebrations = () => {
  const [value, setValue] = useState("");
  const { toDoItem, setToDoItem } = useContext(WatchListContext);
  const { celebrations, setCelebrations } = useContext(WatchListContext);

  const addTodo = (e) => {
    e.preventDefault();
    setToDoItem((prev) => [
      ...prev,
      { text: value, isComplete: false, id: uuidv4() },
    ]);
    setValue("");
    console.log("running");
  };

  const handleDone = (todo) => {
    setToDoItem((prev) =>
      prev.map((obj) => {
        if (obj.id === todo.id) {
          return { ...obj, isComplete: !obj.isComplete };
        }
        return obj;
      })
    );
  };
  const handleDelete = (todo) => {
    setToDoItem((prev) =>
      prev.filter((obj) => {
        return obj.id !== todo.id;
      })
    );
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };


  return (
    <article className="w-full flex flex-col">
      <p className="p-2 w-11/12 mx-auto">To do list</p>
      <form
        action=""
        className="w-11/12 mx-auto flex"
        onSubmit={(e) => addTodo(e)}
      >
        <input
          type="text"
          placeholder="Add item to list"
          className="grow p-2 m-1 rounded bg-emerald-50"
          value={value}
          onChange={(e) => handleValue(e)}
        />
        <button type="submit" className="p-2 m-1 bg-emerald-500 rounded">
          Add Task
        </button>
      </form>
      <div className="w-11/12 mx-auto flex mt-1">
        <ul className="p-2 m-1 bg-emerald-50 rounded w-full list-disc">
          {celebrations.map((todo) => (
            <TodoItem
              todoObj={todo}
              todo={todo.text}
              complete={todo.isComplete}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};
