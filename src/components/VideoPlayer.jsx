import ReactPlayer from 'react-player';

function VideoPlayer({ embedUrl}) {
 
    console.log(embedUrl)
    return (
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe width="100%" height="100%" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    );
  }
  
  export default VideoPlayer;
  