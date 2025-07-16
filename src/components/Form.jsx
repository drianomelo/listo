import { Camera } from "lucide-react";
import { useState } from "react";

export const Form = ({ handleMedias }) => {
  const [inputs, setInputs] = useState({
    titulo: "",
    tipo: "",
    autor: "",
    status: "",
    descricao: "",
    nota: "",
    faixa: "",
    categoria: "",
    imagem: "",
    logo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleMedias('ADD_MEDIA')
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="font-extrabold text-4xl text-slate-950">Adicionar</h2>
        <p className="text-slate-600">Crie uma nova mídia para o Listo</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="min-w-32 min-h-32 rounded-md overflow-hidden bg-violet-600 relative flex justify-center items-center ">
            <label
              htmlFor="titulo"
              className="absolute w-full text-center text-xs tracking-[2px] uppercase pt-1 pb-0.5 font-extrabold text-slate-50 left-0 top-0 bg-slate-500/60"
            >
              Imagem
            </label>
            <span className="absolute w-12 h-12 bg-slate-500/60 text-slate-50 rounded-full flex items-center justify-center">
              <Camera />
            </span>
          </div>

          <div className="flex flex-col justify-between w-full">
            <div className="relative">
              <label
                htmlFor="titulo"
                className="absolute text-[13px] text-slate-600 left-4 pt-2"
              >
                Título
              </label>
              <input
                type="text"
                name="titulo"
                value={inputs.titulo}
                onChange={handleChange}
                className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="tipo"
                className="absolute text-[13px] text-slate-600 left-4 pt-2"
              >
                Tipo
              </label>

              <select
                className="pt-6 pl-[13px] pb-2 border border-slate-600 rounded-md font-medium w-full"
                name="tipo"
                id="tipo"
                onChange={handleChange}
              >
                <option value="filme">Filme</option>
                <option value="serie">Série</option>
                <option value="anime">Anime</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex flex-col justify-between w-full">
            <div className="relative">
              <label
                htmlFor="autor"
                className="absolute text-[13px] text-slate-600 left-4 pt-2"
              >
                Criado por
              </label>
              <input
                type="text"
                name="autor"
                id="autor"
                onChange={handleChange}
                className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="faixa"
                className="absolute text-[13px] text-slate-600 left-4 pt-2"
              >
                Faixa Etária
              </label>

              <select
                className="pt-6 pl-[13px] pb-2 border border-slate-600 rounded-md font-medium w-full"
                name="faixa"
                id="faixa"
                onChange={handleChange}
              >
                <option value="L">L</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
              </select>
            </div>
          </div>

          <div className="min-w-32 min-h-32 rounded-md overflow-hidden bg-violet-600 relative flex justify-center items-center ">
            <label
              htmlFor="titulo"
              className="absolute w-full text-center text-xs tracking-[2px] uppercase pt-1 pb-0.5 font-extrabold text-slate-50 left-0 top-0 bg-slate-500/60"
            >
              Logo
            </label>
            <span className="absolute w-12 h-12 bg-slate-500/60 text-slate-50 rounded-full flex items-center justify-center">
              <Camera />
            </span>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="relative">
            <label
              htmlFor="status"
              className="absolute text-[13px] text-slate-600 left-4 pt-2"
            >
              Status
            </label>
            <input
              type="text"
              name="status"
              id="status"
              onChange={handleChange}
              className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="nota"
              className="absolute text-[13px] text-slate-600 left-4 pt-2"
            >
              Nota
            </label>
            <input
              type="text"
              name="nota"
              id="nota"
              onChange={handleChange}
              className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="categoria"
              className="absolute text-[13px] text-slate-600 left-4 pt-2"
            >
              Categoria
            </label>
            <input
              type="text"
              name="categoria"
              id="categoria"
              onChange={handleChange}
              className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="relative w-full">
            <label
              htmlFor="descricao"
              className="absolute text-[13px] text-slate-600 left-4 pt-2"
            >
              Descrição
            </label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              onChange={handleChange}
              className="pt-6 px-4 pb-2 border border-slate-600 rounded-md font-medium w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button className="py-3 bg-slate-950 text-slate-50 font-semibold cursor-pointer transition-all duration-300 hover:bg-slate-800">
            Salvar
          </button>
          <button className="py-3 text-slate-950 font-semibold cursor-pointer transition-all duration-300 hover:bg-slate-200">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
