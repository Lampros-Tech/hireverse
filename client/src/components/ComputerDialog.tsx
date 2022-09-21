import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { useAppSelector, useAppDispatch } from '../hooks'
import { closeComputerDialog } from '../stores/ComputerStore'

import Video from './Video'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 5px 0px 10px 10px;
`
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  border-radius: 16px;
  padding: 0px;
  color: #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #0000006f;

  .close {
    color:black;
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

const VideoGrid = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));

  .video-container {
    position: relative;
    background: black;
    border-radius: 8px;
    overflow: hidden;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      object-fit: contain;
    }

    .player-name {
      position: absolute;
      bottom: 16px;
      left: 16px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      text-shadow: 0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);
      white-space: nowrap;
    }
  }
`

function VideoContainer({ playerName, stream }) {
  return (
    <div className="video-container">
      <Video srcObject={stream} autoPlay></Video>
      {playerName && <div className="player-name">{playerName}</div>}
    </div>
  )
}

export default function ComputerDialog() {
  const dispatch = useAppDispatch()
  const playerNameMap = useAppSelector((state) => state.user.playerNameMap)
  const shareScreenManager = useAppSelector((state) => state.computer.shareScreenManager)
  const myStream = useAppSelector((state) => state.computer.myStream)
  const peerStreams = useAppSelector((state) => state.computer.peerStreams)
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('in');
    
    if (event.key === 'Escape') {
      // move focus back to the game
      console.log('in');
      
      inputRef.current?.blur()
      dispatch(closeComputerDialog())
    }
  }

  return (
    <Backdrop>
      <Wrapper>
        <IconButton
          aria-label="close dialog"
          className="close"
          onClick={() => dispatch(closeComputerDialog())}
        >
          <CloseIcon />
        </IconButton>

        <iframe src="https://demo.dehitas.xyz/"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="100%" 
            scrolling="auto">
        </iframe>

        {/* <div className="toolbar">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (shareScreenManager?.myStream) {
                shareScreenManager?.stopScreenShare()
              } else {
                shareScreenManager?.startScreenShare()
              }
            }}
          >
            {shareScreenManager?.myStream ? 'Stop sharing' : 'Share Screen -'}
          </Button>
        </div>

        <VideoGrid>
          {myStream && <VideoContainer stream={myStream} playerName="You" />}

          {[...peerStreams.entries()].map(([id, { stream }]) => {
            const playerName = playerNameMap.get(id)
            return <VideoContainer key={id} playerName={playerName} stream={stream} />
          })}
        </VideoGrid> */}
      </Wrapper>
    </Backdrop>
  )
}
