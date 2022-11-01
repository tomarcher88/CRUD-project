export const DayBlock = (props) => {
  const {day} = props
  return (
    <article className="w-full flex flex-col">
      <p className="p-2 w-11/12 mx-auto">{day}</p>
      <textarea name="Day" id="Day" className="p-2 bg-emerald-50 font-yellowtail w-11/12 h-32 mx-auto rounded">
      </textarea>
    </article>
  );
};
