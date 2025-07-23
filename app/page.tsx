import DashboardContent from "./components/DashboardContent";
import Navbar from "./components/Navbar";
import QueryClientProviderWrapper from "./data/QueryClientProviderWrapper";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex lg:w-[960px] md:w-[720px] sm:w-[100%] m-auto">
        <DashboardContent />
      </main>
    </>
  );
};

const App = () => (
  <QueryClientProviderWrapper>
    <Home />
  </QueryClientProviderWrapper>
);

export default App;
