export const MediaItem = ({ media }) => {
  return (
    <div
      className="relative h-full bg-cover rounded-md"
      style={{ backgroundImage: `url(${media.image})` }}
    >
      <img
        className="w-[10px] absolute left-3 top-2"
        src="/logo_sm.svg"
        alt="Logo Listo menor, apenas o L"
      />
    </div>
  );
};
