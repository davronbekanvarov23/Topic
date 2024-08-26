import { Navbar, Hero, Suggestion } from "./components";
import NegaBiz from "./components/NegaBiz";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Suggestion />
      {/* <NegaBiz /> */}
    </div>
  );
}

export default App;
