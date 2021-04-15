import { Box, Heading, Circle, Square, CircularProgress } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

function Clock() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  useEffect(() => {
    let clockUpdate = setInterval(() => {
      let hour = new Date().getHours()
      let minute = new Date().getMinutes()
      let seconds = new Date().getSeconds()
      setHour(hour)
      setMinute(minute)
      setSecond(seconds)
    }, 1000)

    return () => clearInterval(clockUpdate)
  })

  return (
    <Box height="50px" width="250px" padding="5px" align="center" margin="10px">
      <Heading size="lg" marginBottom={4}>Basic Clocks </Heading>
      <Heading color="lightpink" marginBottom={4}>{(hour + ":" + minute + ":" + second)}</Heading>
      <Circle size="200px">
        <Square
          width="180px"
          height="6px"
          bgGradient="linear(to-l, lightpink,lightpink ,transparent, transparent , transparent)"
          position="fixed"
          transform={"rotate(" + ((hour * 30) - 90) + "deg)"}
        />
        <Square
          width="120px"
          height="6px"
          bgGradient="linear(to-l, lightpink, lightpink, transparent, transparent , transparent)"
          position="fixed"
          transform={"rotate(" + ((minute * 6) - 90) + "deg)"}
        />
        <Square
          width="180px"
          height="3px"
          bgGradient="linear(to-l, lightpink, lightpink, transparent, transparent , transparent)"
          position="fixed"
          transform={"rotate(" + ((second * 6) - 90) + "deg)"}
        />
      </Circle>
      <Box>
        <CircularProgress
          size="240px"
          thickness="5px"
          trackColor="#222222"
          color="lightpink"
          value={((second / 60) * 100)}
          position="fixed"
        />
        <CircularProgress
          marginLeft="10px"
          marginTop="10px"
          size="220px"
          thickness="5px"
          trackColor="#222222"
          color="lightpink"
          value={((minute / 60) * 100)}
          position="fixed"
        />
        <CircularProgress
          marginLeft="20px"
          marginTop="20px"
          size="200px"
          thickness="5px"
          trackColor="#222222"
          color="lightpink"
          value={(hour / 12) * 100}
        />
      </Box>
    </Box >
  )
}

export default Clock
