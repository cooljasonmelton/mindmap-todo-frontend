import { AiPanel } from "./components/AiPanel";
import Navbar from "./components/Navbar";
import { TodoContainer } from "./components/TodoContainer";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="flex">
        <AiPanel />
        <TodoContainer />
      </main>
    </div>
  );
};
export default Home;
