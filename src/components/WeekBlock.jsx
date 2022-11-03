import { DayBlock } from './DayBlock'
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayBlocks = daysOfTheWeek.map((day) => <DayBlock day={day} key={day} />);
export const WeekBlock = () => {
  return (
    <article className="row-span-full">
      {dayBlocks}
    </article>
  );
};
