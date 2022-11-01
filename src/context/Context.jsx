import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [weeklyPlanner, setWeeklyPlanner] = useState();
  const [toDoItem, setToDoItem] = useState([
    {
      text: "Todo item 1",
      isComplete: false,
      id: 12,
    },
    {
      text: "Todo item 2",
      isComplete: false,
      id: 13,
    },
    {
      text: "Todo item 3",
      isComplete: false,
      id: 14,
    },
  ]);
  const [celebrations, setCelebrations] = useState([
    {
      text: "Todo item 1",
      isComplete: false,
    },
    {
      text: "Todo item 2",
      isComplete: false,
    },
    {
      text: "Todo item 3",
      isComplete: false,
    },
  ]);
  const [gratitudes, setGratitudes] = useState([
    {
      text: "Todo item 1",
      isComplete: false,
    },
    {
      text: "Todo item 2",
      isComplete: false,
    },
    {
      text: "Todo item 3",
      isComplete: false,
    },
  ]);

  return (
    <WatchListContext.Provider
      value={{
        weeklyPlanner,
        setWeeklyPlanner,
        toDoItem,
        setToDoItem,
        celebrations,
        setCelebrations,
        gratitudes,
        setGratitudes,
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
