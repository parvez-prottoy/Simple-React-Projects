import DigitalClock from "./components/DigitalClock";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <hr className="mt-4" />
        <DigitalClock />
      </main>
    </>
  );
};

export default App;
