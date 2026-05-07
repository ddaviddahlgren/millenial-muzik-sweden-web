import { useEffect, useState } from "react"
import useSound from "use-sound"
// Import audio file
// Set up playlist import?
import { TiMediaStopOutline, TiMediaPlayOutline, TiMediaPauseOutline, TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import { iconContext } from "react-icons"

const [isPlaying, setIsPlaying] = useState(false)
const [play, { pause, duration, sound}] = useSound(null) //Add mp3 here

const [currTime, setCurrTime] = useState({ min: "", sec: ""})
const [seconds, setSeconds] = useState()

useEffect(() => {
    const sec = duration / 1000
    const min = Math.floor(sec / 60)
    const secRemain = Math.floor(sec % 60)
    // const minRemain = Math.floor() add this feature
    setCurrTime({ min, sec: secRemain})
}, [duration])

useEffect(() => {
  const interval = setInterval(() => {
    if (sound) {
      setSeconds(sound.seek([]));
      const min = Math.floor(sound.seek([]) / 60);
      const sec = Math.floor(sound.seek([]) % 60);
      setCurrTime({ min, sec });
    }
  }, 1000);
  return () => clearInterval(interval);
}, [sound]);

const playBtn = () => {
    if (isPlaying) {
        pause()
        setIsPlaying(false)
    } else {
        play()
        setIsPlaying(true)
    }
}

export default function MusicPlayer() {
    return(
        <>
        
        </>
    )
} 