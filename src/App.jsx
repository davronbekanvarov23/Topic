import { Navbar, Hero, Suggestion, Results, Grant } from "./components";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Suggestion />
      <Results />
      <Grant />
    </div>
  );
}

export default App;
