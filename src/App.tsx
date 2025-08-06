import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import DeletarTema from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listacategorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/categorias/" element={<ListaCategorias />} />
            <Route path="/categorias/:id" element={<FormCategoria />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
            <Route path="/atualizarcategoria/:id" element={<FormCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
