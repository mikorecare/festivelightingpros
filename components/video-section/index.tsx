"use client";

import YouTube from "react-youtube";
import { useState } from "react";

export default function VideoSection() {
  const [player, setPlayer] = useState<any>(null);

  const onReady = (event: any) => {
    setPlayer(event.target);
    event.target.playVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-t from-[#101518] to-[#1d3156] overflow-hidden">
      <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[21/7]">
        <YouTube
          videoId="5PG3wFvICKs"
          opts={opts}
          onReady={onReady}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e12]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
