type AdVideoPlayer = {
  adUrl: string;
  poster?: string;
};

const AdVideoPlayer = ({ adUrl, poster }: AdVideoPlayer) => {
  return (
    <div className="relative w-2/5 h-fit mx-auto">
      <video
        className="border border-gray-200 rounded-xl relative shadow-xl hover:shadow-none transition duration-300 ease-in-out"
        controls
        autoPlay
        muted
        poster={poster}
      >
        <source src={adUrl} type="video/mp4" />
      </video>
      <div className="absolute top-3 right-3 bg-white text-black px-1 py-[1px] text-xs font-semibold rounded-sm">
        Ad
      </div>
    </div>
  );
};

export default AdVideoPlayer;
