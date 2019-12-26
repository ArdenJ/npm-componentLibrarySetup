import { useState, useEffect } from 'react'

function usePlayer () {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(null)
  const [currentPlayTime, setCurrentPlayTime] = useState(null)

  useEffect(() => {
    // Object as identified in the DOM
    const audio = document.getElementById('PLAYER')

    // Set state for duration and play time when the event listener below is fired
    const audioData = () => {
      setDuration(audio.duration)
      setCurrentPlayTime(audio.currentTime)
    }
    const setTime = () => setCurrentPlayTime(audio.currentTime)

    // The above-mentioned event listener
    audio.addEventListener('loadeddata', audioData)
    audio.addEventListener('timeupdate', setTime)

    // is audio playing
    playing ? audio.play() : audio.pause()

    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', audioData)
      audio.removeEventListener('timeupdate', setTime)
    }
  })
  return {
    playing,
    setPlaying,
    currentPlayTime,
    setCurrentPlayTime,
    duration
  }
}

export default usePlayer
