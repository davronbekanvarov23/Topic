import {
  Navbar,
  Hero,
  Suggestion,
  Results,
  Grant,
  Helping,
  Register,
  About,
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
      <About />
    </div>
  );
}

export default App;
