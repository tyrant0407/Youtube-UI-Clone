function VideoDetails({ video }) {
    return (
      <div className="mt-4">
        {/* Title */}
        <h1 className="text-xl font-bold text-white">{video.title}</h1>
  
        {/* Views + Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-3">
          <span className="text-sm text-gray-500">{video.views}</span>
  
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
              <i className="ri-thumb-up-line"></i> Like
            </button>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
              <i className="ri-thumb-down-line"></i> Dislike
            </button>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
              <i className="ri-share-forward-line"></i> Share
            </button>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
              <i className="ri-download-line"></i> Download
            </button>
          </div>
        </div>
  
        {/* Channel Info */}
        <div className="flex items-start gap-3 mt-4">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" // replace with your channel image
            alt="channel"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-white">{video.channel}</p>
            <p className="text-xs text-gray-500">1.5M subscribers</p>
            <p className="mt-2 text-sm text-gray-500">{video.description}</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
            Subscribe
          </button>
        </div>
      </div>
    );
  }
  
  export default VideoDetails;
  