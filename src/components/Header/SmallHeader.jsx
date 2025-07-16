export const SmallHeader = () => {
  return (
    <header className="w-full py-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl  flex justify-between items-center mx-auto">
        <div className="flex items-center gap-10">
          <img className="w-18" src="/logo_lg.svg" alt="Logo Listo" />
        </div>

        <div className="flex items-center gap-6">
          <img
            className="w-8 h-8 rounded-full"
            src="https://avatars.githubusercontent.com/u/85702814?v=4"
            alt="Adriano Melo"
          />
        </div>
      </div>
    </header>
  );
};
