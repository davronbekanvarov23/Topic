import {
  Navbar,
  Hero,
  Suggestion,
  Results,
  Grant,
  Helping,
  Register,
  About,
  Questions,
  Footer,
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
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
