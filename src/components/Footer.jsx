export const Footer = () => {
  return (
    <footer className="py-14 font-alice">
        <p className="text-center w-11/12 m-auto">
          If you would like to find out more about me, or see other projects I've made, please see the links below.
        </p>
        <ul className="flex flex-row gap-4 justify-center">
          <li>
            <a
              className="underline text-blue-500"
              href="https://www.tomarcher.uk/"
              target="_blank"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-500"
              href="https://github.com/tomarcher88"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-500"
              href="https://www.linkedin.com/in/tom-archer/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
    </footer>
  );
};
