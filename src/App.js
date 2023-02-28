import "./App.css";
import { React } from "react";
import { Products } from "./components/Products";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { NavbarComponent } from "./components/Navbar";
import { Detail_produit } from "./components/Detail-produit";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="">
          <Route path="/products" element={<Products />}></Route>
          <Route path="/detailproduit/:name" element={<Detail_produit />}></Route>

        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
