import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [player, setPlayer] = useState();
  useEffect(() => {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.setAttribute("onload", "onYouTubeIframeReady()");
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      setPlayer(
        new YT.Player("player", {
          videoId: "pmbSKoaxEho",
          autoplay: true,
          playerVars: {
            controls: 0,
            disablekb: 1,
          },
          events: {
            onReady: onPlayerReady,
          },
        })
      );
    };

    function onPlayerReady(event) {
      event.target.playVideo();
    }
  }, []);

  const playVid = () => {
    console.log(player);
    player.playVideo();
  };

  const pauseVid = () => {
    player.pauseVideo();
  };

  const muteVid = () => {
    player.mute();
  };

  const unMuteVid = () => {
    player.unMute();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div id="player">
        <iframe
          title="p"
          id="player"
          width="560"
          height="615"
          src="https://www.youtube.com/embed/pmbSKoaxEho?autoplay=0&showinfo=0&controls=0"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <br />
      </div>
      <div>
        <button onClick={unMuteVid}>Unmute</button>
        <button onClick={muteVid}>Mute</button>
        <button onClick={pauseVid}>Pause</button>
        <button onClick={playVid}>Play</button>
      </div>
    </div>
  );
}
