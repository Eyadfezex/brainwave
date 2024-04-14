import "./App.css";
import { ButtonGradient } from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.js";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline"> Eyad </h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10 " href="*">
          Somthing
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
