import { useState } from "react";

export const DayBlock = (props) => {
  const {day} = props
  const localDayText = localStorage.getItem(`${day}TextArea`) ? localStorage.getItem(`${day}TextArea`) : '';
  const [dayText, setDayText] = useState(localDayText);

  function storeDayText(e, day) {
    localStorage.setItem(`${day}TextArea`, e.target.value);
    setDayText(e.target.value);
  }

  return (
    <article className="w-full flex flex-col font-alice">
      <p className="p-2 w-11/12 mx-auto text-lg">{day}</p>
      <textarea placeholder="Add your plans here" name="Day" value={dayText} id="Day" className="p-2 bg-emerald-50 font-alice w-11/12 h-32 mx-auto rounded" onChange={(e) => storeDayText(e, day)}>
      </textarea>
    </article>
  );
};
