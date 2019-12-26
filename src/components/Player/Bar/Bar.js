import React from 'react'

function Bar (props) {
  const { duration, currentPlayTime } = props
  const timePercentage = (currentPlayTime / duration) * 100
  const currentTime = () => {
    if (isNaN(currentPlayTime)) {
      return '000'
    } else {
      return Math.floor((timePercentage / 100) * duration)
    }
  }

  return (
    <div className="bar">
      <div className="time">
        {currentTime()} / {Math.floor(duration)}
      </div>
      <span>{timePercentage}</span>
    </div>
  )
}

export default Bar
