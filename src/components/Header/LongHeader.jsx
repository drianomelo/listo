import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const LongHeader = () => {
  return (
    <header className="py-5 px-14 flex justify-between items-center left-0 fixed w-full bg-gradient-to-b from-slate-950 to-transparent">
      <div className="flex items-center gap-10">
        <img className="w-18" src="/logo_lg.svg" alt="Logo Listo" />

        <nav className="flex items-center gap-5">
          <div className="flex items-center gap-5 border-r border-slate-50/50 pr-5">
            <a href="" className="text-slate-50 text-sm font-bold">
              Início
            </a>
            <a href="" className="text-slate-50/80 text-sm">
              Animes
            </a>
            <a href="" className="text-slate-50/80 text-sm">
              Séries
            </a>
            <a href="" className="text-slate-50/80 text-sm">
              Filmes
            </a>
          </div>

          <a href="" className="text-slate-50/80 text-sm">
            Livros
          </a>
          <a href="" className="text-slate-50/80 text-sm">
            Mangás
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-50">
          <Search size={24} />
        </button>
        <Link to="/create/cinema" className="text-slate-50">
          <Plus size={24} />
        </Link>

        <img
          className="w-8 h-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/85702814?v=4"
          alt="Adriano Melo"
        />
      </div>
    </header>
  );
};
