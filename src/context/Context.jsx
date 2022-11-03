import { createContext, useState, useEffect } from "react";
import { stringify, v4 as uuidv4 } from "uuid";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [weeklyPlanner, setWeeklyPlanner] = useState();
  const [toDoItem, setToDoItem] = useState(
    localStorage.getItem("toDoItems")
      ? JSON.parse(localStorage.getItem("toDoItems"))
      : [
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
        ]
  );
  const [celebrations, setCelebrations] = useState(
    localStorage.getItem("celebrationItems")
      ? JSON.parse(localStorage.getItem("celebrationItems"))
      : [
          {
            text: "Celebration item 1",
            isComplete: false,
            id: 22,
          },
          {
            text: "Celebration item 2",
            isComplete: false,
            id: 23,
          },
          {
            text: "Celebration item 3",
            isComplete: false,
            id: 24,
          },
        ]
  );
  const [gratitudes, setGratitudes] = useState(
    localStorage.getItem("gratitudeItems")
      ? JSON.parse(localStorage.getItem("gratitudeItems"))
      : [
          {
            text: "Gratitudes item 1",
            isComplete: false,
            id: 33,
          },
          {
            text: "Gratitudes item 2",
            isComplete: false,
            id: 34,
          },
          {
            text: "Gratitudes item 3",
            isComplete: false,
            id: 35,
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify([...toDoItem]));
  }, [toDoItem]);
  useEffect(() => {
    localStorage.setItem("celebrationItems", JSON.stringify([...celebrations]));
  }, [celebrations]);
  useEffect(() => {
    localStorage.setItem("gratitudeItems", JSON.stringify([...gratitudes]));
  }, [gratitudes]);

  const resetItems = (e, valueSetter) => {
    e.preventDefault()
    valueSetter([])
  }

  const addItem = (e, valueSetter, valueReset, value) => {
    e.preventDefault();
    valueSetter((prev) => [
      ...prev,
      { text: value, isComplete: false, id: uuidv4() },
    ]);
    valueReset("");
    console.log("running");
  };

  const handleDone = (item, valueSetter) => {
    valueSetter((prev) =>
      prev.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, isComplete: !obj.isComplete };
        }
        return obj;
      })
    );
  };
  const handleDelete = (item, valueSetter) => {
    console.log(item, valueSetter);
    valueSetter((prev) =>
      prev.filter((obj) => {
        return obj.id !== item.id;
      })
    );
  };

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
        addItem,
        handleDone,
        handleDelete,
        resetItems
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
