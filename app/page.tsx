import { AiPanel } from "./components/AiPanel";
import Navbar from "./components/Navbar";
import { TodoContainer } from "./components/TodoContainer";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="flex lg:px-50">
        <TodoContainer />
        <AiPanel />
      </main>
    </div>
  );
};
export default Home;
