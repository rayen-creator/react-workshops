import "./App.css";
import { React } from "react";
import { Products } from "./components/Products";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { NavbarComponent } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/">
          <Route  exact path="/products" element={<Products />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
