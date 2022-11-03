import "./App.css";
import { Header } from "./components/Header";
import { WeekBlock } from "./components/WeekBlock";
import { TodoList } from "./components/TodoList";
import { Celebrations } from "./components/Celebrations";
import { Gratitudes } from "./components/Gratitudes";
import { WatchListContextProvider } from "./context/Context";
import { Footer } from "./components/Footer";

function App() {
  return (
    <WatchListContextProvider>
      <div className="App bg-emerald-100 text-zinc-700">
        <Header />
        <main className="grid md:grid-cols-2 2xl:w-3/4 mx-auto">
          <div>
            <WeekBlock />
          </div>
          <div>
            <TodoList />
            <Celebrations />
            <Gratitudes />
          </div>
        </main>
        <Footer />
      </div>
    </WatchListContextProvider>
  );
}

export default App;
