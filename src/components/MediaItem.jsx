export const MediaItem = ({ media }) => {
  return (
    <div className="relative">
      <img
        className="w-[10px] absolute left-3 top-2"
        src="/logo_sm.svg"
        alt="Logo Listo menor, apenas o L"
      />
      <img className="h-full rounded-sm" src="/totoro.png" alt="" />
    </div>
  );
};
