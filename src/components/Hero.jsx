import { PlayCircle, Info } from "lucide-react";

export const Hero = ({ media }) => {
  return (
    <div className="w-full h-full bg-[url(/totoro.png)] bg-no-repeat bg-size-[100%] flex flex-col justify-end">
      <div className="w-full flex items-end justify-between pl-14">
        <div className="flex flex-col max-w-lg">
          <div className="flex items-center gap-2.5 mb-3">
            <img
              className="w-[14px]"
              src="/logo_sm.svg"
              alt="Logo Listo menor, apenas o L"
            />
            <span className="text-slate-50/70 uppercase font-extrabold tracking-[8px] text-sm">
              {media.tipo}
            </span>
          </div>

          <img
            className="w-85 mb-4"
            src="/logo_totoro.png"
            alt="Logo filme meu amigo totoro"
          />

          <span className="text-slate-50 font-bold text-shadow-lg mb-4 text-lg">
            Um {media.tipo} de {media.autor}
          </span>

          <span className="text-slate-50 text-sm font-medium text-shadow-lg mb-5">
            {media.descricao}
          </span>

          <div className="flex items-center gap-4">
            <a
              href=""
              className="bg-slate-50 flex text-slate-900 items-center gap-2 py-2.5 px-6 rounded-sm font-semibold"
            >
              <PlayCircle size={28}/>
              Assistir
            </a>
            <button className="bg-slate-50/20 cursor-pointer text-slate-50 flex items-center gap-2 py-2.5 px-6 rounded-sm font-semibold">
              <Info size={28}/>
              Mais Informações
            </button>
          </div>
        </div>

        <div className="w-24 bg-slate-950/30 flex items-stretch relative pl-3 py-[1px]">
          <div className="w-1 h-full left-0 top-0 bg-violet-600 absolute"></div>
          <span className="bg-green-600 text-slate-50 w-7 h-7 rounded-sm flex items-center justify-center font-extrabold">
            {media.faixa}
          </span>
        </div>
      </div>

      <div className="w-full h-60 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
};
