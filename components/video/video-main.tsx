type MainVideoPlayer = {
  videoUrl: string;
  thumbnail?: string;
};

const MainVideoPlayer = ({ videoUrl, thumbnail }: MainVideoPlayer) => {
  return (
    <div className="flex flex-col items-center">
      <video className="w-full border border-gray-200 rounded-lg" controls>
        <div className="video-thumbnail" data-thumbnail={thumbnail}></div>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideoPlayer;
