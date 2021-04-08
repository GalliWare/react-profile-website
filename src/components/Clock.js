import { Box, Heading } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    let timeUpdate = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timeUpdate)
  })

  return (
    <Box height="50px" width="250px" padding="5px" align="center" margin="10px">
      <Heading size="lg" marginBottom={4}>Basic Clock </Heading>
      <Heading color="lightpink" marginBottom={4}>{time}</Heading>
    </Box >
  )
}

export default Clock
