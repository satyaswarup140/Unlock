// Write your code here
import React, {useState} from 'react'
import {Container, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const toggleLock = () => {
    setIsLocked(!isLocked)
  }

  return (
    <Container>
      <Image
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <Text>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Text>
      <Button onClick={toggleLock}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </Container>
  )
}

export default Unlock
