type MainVideoPlayer = {
  videoUrl: string;
  poster?: string;
};

const MainVideoPlayer = ({ videoUrl, poster }: MainVideoPlayer) => {
  return (
    <div className="flex flex-col items-center">
      <video
        className="w-full border border-gray-200 rounded-lg"
        controls
        poster={poster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideoPlayer;
