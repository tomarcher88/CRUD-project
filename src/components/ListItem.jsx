export const ListItem = (props) => {
  const { item, itemObj, complete, handleDelete, handleDone, todo } = props;
  return (
    <li className="mx-4 p-1 flex font-alice" key={item}>
      <p className={`grow ${complete ? "line-through text-red-400" : ""}`}>
        {item}
      </p>
      {todo ? <button onClick={() => handleDone(itemObj)}>✅</button> : null}
      <button onClick={() => handleDelete(itemObj)}>🗑️</button>
    </li>
  );
};
