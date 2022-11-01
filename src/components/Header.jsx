import { getMonth } from '../helpers/helpers'

export const Header = () => {
  return (
    <header className="sm:flex flex-row-reverse place-content-between w-full lg:w-3/4 mx-auto pt-4">
      <p className="m-4 text-right font-yellowtail text-lg lg:text-xl">{getMonth()}</p>
      <h1 className="m-4 font-yellowtail text-4xl lg:text-5xl">Weekly Planner</h1>
    </header>
  );
}