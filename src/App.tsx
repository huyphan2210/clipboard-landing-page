import "./App.scss";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import KeepTrackSection from "./components/sections/KeepTrackSection/KeepTrackSection";

function App() {

  return (
    <>
      <main>
        <HeroSection></HeroSection>
        <KeepTrackSection></KeepTrackSection>
      </main>
      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/huyphan2210" target="_blank">Huy Phan</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
