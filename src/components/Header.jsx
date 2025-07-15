import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-5 px-14 flex justify-between items-center fixed w-full bg-gradient-to-b from-slate-950 to-transparent">
      <div className="flex items-center gap-10">
        <img className="w-18" src="/logo_lg.svg" alt="Logo Listo" />

        <nav className="flex items-center gap-5">
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
          <a href="" className="text-slate-50/80 text-sm">
            Livros
          </a>
          <a href="" className="text-slate-50/80 text-sm">
            Mangás
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <Search color="#FFF" size={24} />
        </div>

        <img
          className="w-8 h-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/85702814?v=4"
          alt="Adriano Melo"
        />
      </div>
    </header>
  );
};
