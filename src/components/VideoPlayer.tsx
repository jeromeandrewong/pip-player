import React, { useMemo } from "react";
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaMuteButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaFullscreenButton,
} from "media-chrome/dist/react";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const VideoPlayer = () => {
  const { ref, inView, entry } = useInView({
    // when fully in view (0), when fully out of view (1)
    threshold: [0, 0.9, 1],
  });

  const isFloating = useMemo(() => {
    const isIntersecting = entry?.isIntersecting;
    const intersectionRation = entry?.intersectionRatio || 0;

    if (isIntersecting && intersectionRation >= 0.9) {
      return false;
    }

    return true;
  }, [entry]);

  return (
    <div className="w-full space-y-5">
      <h2 className="text-start font-semibold text-primary">
        Try scrolling down!
      </h2>
      <div
        ref={ref}
        className="relative aspect-video overflow-clip rounded-xl bg-slate-500/10"
      >
        <MediaController
          classname={cn(
            `z-10 w-full rounded-xl overflow-clip aspect-video`,
            isFloating
              ? "fixed right-6 bottom-6 w-[700px] animate-videoFadeInPip"
              : "relative animate-videoFadeInPlaceholder",
          )}
        >
          <video src="/handball.mov" slot="media" />
          <MediaControlBar>
            <MediaPlayButton />
            <MediaMuteButton />
            <MediaTimeRange />
            <MediaTimeDisplay />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>
      </div>
    </div>
  );
};

export default VideoPlayer;
