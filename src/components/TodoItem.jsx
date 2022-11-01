export const TodoItem = (props) => {

  const { todo, todoObj, complete, handleDelete, handleDone } = props;
  return (
    <li className={`mx-4 p-1 flex ${complete ? 'line-through' : ''}`} key={todo}>
      <p className="grow">{todo}</p>
      <button onClick={() => handleDone(todoObj)}>✅</button>
      <button onClick={() => handleDelete(todoObj)}>🗑️</button>
    </li>
  );
};
