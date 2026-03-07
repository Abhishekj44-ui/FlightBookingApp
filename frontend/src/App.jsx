
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Flights from "./pages/Flights";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/flights" element = {<Flights />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
