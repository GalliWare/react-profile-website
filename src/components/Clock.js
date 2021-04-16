import { Box, Heading, Circle, Square, CircularProgress, Flex } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState('')
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  useEffect(() => {
    let clockUpdate = setInterval(() => {
      setHour(new Date().getHours())
      setMinute(new Date().getMinutes())
      setSecond(new Date().getSeconds())
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(clockUpdate)
  })

  return (
    <Box padding="5px" margin="10px">
      <Heading size="3xl" marginBottom={4} align="center">Basic Clocks </Heading>
      <Flex direction={["column", "row"]}>
        <Heading color="lightpink" marginBottom={4} margin="5px" align="center">{time}</Heading>
        <Box>
          <Circle
            size="200px"
            margin="5px"
            bgGradient="linear(black,black ,transparent, black , black)"
            position="fixed"
          ></Circle>
          <Circle
            size="200px"
            margin="5px"
            bgGradient="linear(to-l,black,black ,transparent, black , black)"
          >
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
        </Box>
        <Box margin="5px">
          <CircularProgress
            size="240px"
            thickness="5px"
            trackColor="black"
            color="lightpink"
            value={((second / 60) * 100)}
            position="fixed"
          />
          <CircularProgress
            marginLeft="10px"
            marginTop="10px"
            size="220px"
            thickness="5px"
            trackColor="black"
            color="lightpink"
            value={((minute / 60) * 100)}
            position="fixed"
          />
          <CircularProgress
            marginLeft="20px"
            marginTop="20px"
            size="200px"
            thickness="5px"
            trackColor="black"
            color="lightpink"
            value={(hour / 12) * 100}
          />
        </Box>
      </Flex>
    </Box >
  )
}

export default Clock
