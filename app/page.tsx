import { AiPanel } from "./components/AiPanel";
import Navbar from "./components/Navbar";
import { TodoContainer } from "./components/TodoContainer";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex lg:w-[960px] md:w-[720px] sm:w-[100%] m-auto">
        <TodoContainer />
        <AiPanel />
      </main>
    </>
  );
};
export default Home;
