import React, { useState } from 'react'

// Components
import Bar from './Bar/Bar'

// Hooks
import usePlayer from './usePlayer'
import useData from './useData'

const Player = ({ trackTitle, source }) => {
  const {
    currentPlayTime,
    duration,
    playing,
    setPlaying,
    setCurrentPlayTime
  } = usePlayer()

  // Internal hook for button
  const [play, setPlay] = useState(false)

  // get ID3 v2 data from track
  const { id3Data, rawId3Data } = useData(source)
  console.log('FROM PLAYER ' + id3Data)

  // handle playPause click - this should really be two onclick handlers right?
  function handleClick () {
    playing ? setPlaying(false) : setPlaying(true)
    setPlay(!play)
  }

  // handle stop (Stop calls audio.pause() and returns playTime to 0.00)
  // TODO: Won't currently reset time
  function handleStop () {
    if (currentPlayTime !== 0) {
      setPlaying(false)
      setPlay(false)
      setCurrentPlayTime(0)
    }
  }

  return (
    <div>
      <id3Data track={source} />
      <div className="titleInfo">
        <div className="trackTitle">{trackTitle}</div>
        <div className="trackImage">TRACK IMAGE</div>
      </div>
      <audio id={'PLAYER'}>
        <source src={source} />
      </audio>
      <div className="controls">
        <button className="playPause" onClick={handleClick}>
          {play ? 'PAUSE' : 'PLAY'}
        </button>
        <button className="stop" onClick={handleStop}>
          STAHP
        </button>
      </div>
      <div className="bar">
        <Bar currentPlayTime={currentPlayTime} duration={duration} />
      </div>
    </div>
  )
}

export default Player
