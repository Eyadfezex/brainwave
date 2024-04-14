import "./App.css";
import { ButtonGradient } from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.js";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
