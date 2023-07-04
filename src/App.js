import "./App.css";
import Body from "./components/Body/Body.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopNow from "./components/ShopNow/ShopNow.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/shop" element={<ShopNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
