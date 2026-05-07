import { useEffect, useState } from "react";
import useSound from "use-sound";
// Import audio file
// Set up playlist import?
import {
  TiMediaStopOutline,
  TiMediaPlayOutline,
  TiMediaPauseOutline,
  TiChevronRightOutline,
  TiChevronLeftOutline,
} from "react-icons/ti";

SONG_SRC = null;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({ min: "0", sec: "00" });
  const [totatl0ime, setTotalTime] = useState({ min: "0", sec: "00" });
  const [seconds, setSeconds] = useState(0);
  
  const [play, { pause, stop, duration, sound }] = useSound(SONG_SRC); //Add mp3 here

  useEffect(() => {
    if (duration) {
        const sec = duration / 1000
        setTotalTime({
            min: Math.floor(sec / 60),
            sec: String(Math.floor(sec % 60)).padStart(2, "0")
        })
    }
  }, [duration])

  useEffect(() => {
    const interval = setInterval(() => {
        if (sound) {
            const pos = sound.seek([])
            setSeconds(pos)
            setCurrTime({
                min: Math.floor(pos / 60),
                sec: String(Math.floor(pos % 60)).padStart(2, "0")
            })
        }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

  const handlePlayPause = () => {
    if (isPlaying) {
        pause()
        setIsPlaying(false)
    } else {
        play()
        setIsPlaying(true)
    }
  }

  const handleStop = () => {
    stop()
    setIsPlaying(false)
    setSeconds(0)
    setCurrTime({ min: "0", sec: "00"})
  }

  return (
    <div className="musicPlayerContainer">
      <h2>Now Playing</h2>
      <div className="titleTimeContainer">
        <h3>Artist Name</h3>
        <p>Track Title</p>

        <div className="timeMeter">
          <p>{currTime.min}:{currTime.sec}</p>
          <p>{totalTime.min}:{totalTime.sec}</p>
        </div>

        <input
          type="range"
          min="0"
          max={duration ? duration / 1000 : 0}
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound?.seek([Number(e.target.value)])
            setSeconds(Number(e.target.value))
          }}
        />

        <div className="controls">
          <button><TiChevronLeftOutline /></button>
          <button onClick={handleStop}><TiMediaStopOutline /></button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <TiMediaPauseOutline /> : <TiMediaPlayOutline />}
          </button>
          <button><TiChevronRightOutline /></button>
        </div>
      </div>
    </div>
  );
}
