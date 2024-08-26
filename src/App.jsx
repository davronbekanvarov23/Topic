import {
  Navbar,
  Hero,
  Suggestion,
  Results,
  Grant,
  Helping,
  Register,
} from "./components";

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
      <Helping />
      <Register />
    </div>
  );
}

export default App;
