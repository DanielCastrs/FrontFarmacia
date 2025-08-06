import { Pill } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-around bg-blue-400 text-white w-1/2 rounded-2xl m-1">
          <Link to="/home" className="flex text-2xl font-bold p-2 w-full">
            <Pill size={40} weight="duotone" className="p-2 " />
            Pharma Dev
          </Link>
          <div className="flex gap-4 p-2 font-serif w-full">
            <Link
              to="/listacategorias"
              className="hover:underline flex items-center center"
            >
              Lista Categorias
            </Link>
            <Link
              to="/cadastrarcategorias"
              className="hover:underline flex items-center"
            >
              Cadastrar Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
