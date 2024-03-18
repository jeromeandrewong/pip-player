import { Skeleton } from "@/components/Skeleton";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-5 p-24 font-mono">
      <Introduction />
      <VideoPlayer />
      <HowThisWorks />
      <SkeletonGenerator />
    </main>
  );
}

const Introduction = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-balance text-center text-3xl font-semibold text-secondary">
        Exploring making my own picture-in-picture player
      </h1>
      <div className="space-y-5">
        <div className="space-y-3">
          <h2 className="font-semibold text-primary">Why I built this:</h2>
          <p>
            Haven&rsquo;t we all gotten used to short-form videos and can no
            longer sit through anything more than 3 mins? Yeah me too.
          </p>
          <p>
            Ever since I started using Arc Browser, I&rsquo;ve been really
            enjoying the built-in picture-in-picture player.
          </p>
          <p>
            Curious about how to make something similar, I thought I&rsquo;d
            give it a shot.
          </p>
        </div>
        <h2 className="font-semibold text-primary">
          Why not just use browser&rsquo;s built-in pip?
        </h2>
        <p>
          Can&rsquo;t trigger pip on scoll, only on click or manually selecting
          option by right clicking 🤷‍♂️
        </p>
      </div>
    </div>
  );
};

const HowThisWorks = () => {
  return (
    <div className="w-full space-y-10 text-start">
      <h2 className="font-semibold text-primary">How this works:</h2>
      <div className="space-y-1">
        <h3 className="text-secondary">1. Check if video is in view</h3>
        <p>
          Intersection Observer API: browser API that allows you to monitor when
          an element enters or exits the viewport (the visible portion of a web
          page)
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-secondary">
          2. Position player at bottom right of screen when out of view
        </h3>
        <p>
          Conditionally add `fixed` class to player when out of original
          placeholder view
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-secondary">
          3. Animate player when transitioning between views
        </h3>
        <p>
          Use keyframes and `animate` utility classes to animate player when
          transitioning between views
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-secondary">
          4. Trigger picture-in-picture only when playing
        </h3>
        <p>
          Conditionally trigger picture-in-picture only when player is playing
          by checking`mediapaused` attribute in the `MediaController`
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-secondary">
          5. Close button to close picture-in-picture
        </h3>
        <p>
          Conditionally apply close button only when player is in floating
          state, handle state of player when close button is clicked
        </p>
      </div>
    </div>
  );
};

const SkeletonGenerator = () => {
  return (
    <>
      <div className="w-full rounded-xl border-2  bg-primary p-2 text-center text-black">
        👀 Some skeleton content to make page scrollable
      </div>
      {Array.from({ length: 20 }).map((_, i) => (
        <Skeleton key={i} className="h-20 w-full rounded-xl" />
      ))}
    </>
  );
};
