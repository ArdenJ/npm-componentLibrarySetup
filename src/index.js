// ENTRY POINT
import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player/Player'

import './styles.css'

function App () {
  return (
    <div className="App">
      <Player
        trackTitle="Track"
        id="PLAYER"
        source={
          'https://www.dropbox.com/s/jnd5r0h0hlcuqxy/DzigaVertov_Performance_221117.mp3?raw=1'
        }
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
