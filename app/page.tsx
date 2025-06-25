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
        <div className="flex-[1]">
          <AiPanel />
        </div>
        <div className="flex-[3]">
          <TodoContainer />
        </div>
      </main>
    </div>
  );
};
export default Home;
