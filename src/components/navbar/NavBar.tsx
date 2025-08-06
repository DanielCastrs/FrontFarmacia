import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-blue-400">
        <Link to="/home" className="text-2xl font-bold p-2">
          Pharma Dev
        </Link>
        <div className="flex gap-4 p-2">
          <Link to="/listacategorias" className="hover:underline">
            Lista Categorias
          </Link>
          <Link to="/cadastrarcategorias" className="hover:underline">
            Cadastrar Categorias
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
