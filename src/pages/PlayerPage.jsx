import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router";
import VideoPlayer from "../components/VideoPlayer";
import VideoDetails from "../components/VideoDetails";
import Comments from "../components/Comments";
import { MyStore } from "../context/MyContext";

function PlayerPage() {
  const { id } = useParams();
  const {videos} = useContext(MyStore);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const foundVideo = videos.find((v) => String(v.id) === id);
        setVideo(foundVideo);    
  }, [id]);

  if (!video) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4">
      <div className="flex-1">
        <VideoPlayer embedUrl={video.embedUrl} />
        <VideoDetails video={video} />
        <Comments />
      </div>

      {/* Optional: Sidebar for related videos */}
      {/* <YouTubeSidebar /> */}
    </div>
  );
}

export default PlayerPage;
