
import styled  from 'styled-components'
import Lamp from './Lamp.jsx';
import LightSwitch from './LightSwitch.jsx';
import { useState } from 'react';
import banana from 'react';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;



function App() { 
  console.log(useState);
  console.log(banana);
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  const [isLampTwoOn, setIsLampTwoOn] = useState(false);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn = {isLampOneOn} position = 'left'/>
      <Lamp lampOn = {isLampTwoOn} position = 'right'/>
      <LightSwitch
      name = 'one'
      callback = {handleLightSwitchOne}
      switchOn = {isLampOneOn}
      position = 'left'
      />
      <LightSwitch
      name = 'two'
      callback = {handleLightSwitchTwo}
      switchOn = {isLampTwoOn}
      position = 'right'
      />
    </Room>
  )
}

export default App
