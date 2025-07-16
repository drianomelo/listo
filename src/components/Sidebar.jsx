import { ArrowLeftCircleIcon, BookCopyIcon, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="min-w-[280px]">
      <nav className="space-y-2">
        <Link to="/" className="flex gap-2 mb-6 items-center p-2 rounded-sm text-[15px] transition-colors duration-300 text-slate-950 hover:bg-slate-200">
          <ArrowLeftCircleIcon size={20} /> Voltar ao Listo
        </Link>

        <Link className="flex items-center gap-2 p-2 rounded-sm font-bold transition-colors duration-300 text-slate-950 hover:bg-slate-200">
          <Video />
          Cinema
        </Link>

        <Link className="opacity-50 flex items-center gap-2 p-2 rounded-sm font-bold transition-colors duration-300 text-slate-950 hover:bg-slate-200">
          <BookCopyIcon />
          Biblioteca
        </Link>
      </nav>
    </aside>
  );
};
