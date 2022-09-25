import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { IRoomData } from '../../../types/Rooms'
import { useAppSelector } from '../hooks'

import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'
import logo from '../images/logo.png'

const CreateRoomFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
    align-items: center;
  justify-content: center;

`
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px 0;
align-items: center;
justify-content: center;

img {
  border-radius: 8px;
  height: 120px;
}
`
const CustomRoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .tip {
    font-size: 18px;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  width: 100%;

  .back-button {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    align-self: left;
  }

  h1 {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`

const Title = styled.h1`
  font-size: 24px;
  color: #eee;
  text-align: center;
`
const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`

  



const Wrapper = styled.div`
  background: #222639;
  border-radius: 16px;
  padding: 36px 60px;
  box-shadow: 0px 0px 5px #0000006f;
`


export const CreateRoomForm = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('username')
  console.log("code in room...." + username);
  // let Room = false
  // if(username){
  //   Room = true
  // }

  const [values, setValues] = useState<IRoomData>({
    name: username + "'s office",
    description: 'Dehitas office of ' + username + ' !',
    password: null,
    autoDispose: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [nameFieldEmpty, setNameFieldEmpty] = useState('')
  const [descriptionFieldEmpty, setDescriptionFieldEmpty] = useState("")
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)

  const handleChange = (prop: keyof IRoomData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const isValidName = values.name !== ''
    // const isValidDescription = values.description !== ''

    // if (isValidName === nameFieldEmpty) setNameFieldEmpty(!nameFieldEmpty)
    // if (isValidDescription === descriptionFieldEmpty)
    //   setDescriptionFieldEmpty(!descriptionFieldEmpty)

    // create custom room if name and description are not empty
    // if (isValidName && isValidDescription && lobbyJoined) {
    //   console.log(
    //     values
    //   );
      
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .createCustom(values)
        .then(() => bootstrap.launchGame())
        .catch((error) => console.error(error))
    
  }

  return (
    <Backdrop>
    <Wrapper>

    <CreateRoomFormWrapper onSubmit={handleSubmit}>


      {/* <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        autoFocus
        error={nameFieldEmpty}
        helperText={nameFieldEmpty && 'Name is required'}
        onChange={handleChange('name')}
      />

      <TextField
        label="Description"
        variant="outlined"
        color="secondary"
        error={descriptionFieldEmpty}
        helperText={descriptionFieldEmpty && 'Description is required'}
        multiline
        rows={4}
        onChange={handleChange('description')}
      />
 */}
     <CustomRoomWrapper>
              <TitleWrapper>
              <Title>

              Welcome to DOffice
              </Title>
          <Content>
              <img src={logo} alt="logo" />
          </Content>
          </TitleWrapper>

          </CustomRoomWrapper>

      <TextField
        type={showPassword ? 'text' : 'password'}
        label="Password (optional)"
        onChange={handleChange('password')}
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="secondary" type="submit">
        Create
      </Button>
    </CreateRoomFormWrapper>
    </Wrapper>
    </Backdrop>

  )
}
