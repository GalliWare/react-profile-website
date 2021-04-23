import { Box, Heading, Circle, Square, CircularProgress, Flex } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState('')
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  useEffect(() => {
    let clockUpdate = setInterval(() => {
      let hourNow = new Date().getHours()
      if (hourNow > 12) { hourNow -= 12; console.log(hourNow) }
      setHour(hourNow)
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
        <Flex direction={"row"}>
          <Heading color="coral">{time.split(":")[0]}:</Heading>
          <Heading color="cyan">{time.split(":")[1]}:</Heading>
          <Heading color="orange">{time.split(":")[2]}</Heading>
        </Flex>
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
              bgGradient="linear(to-l, coral,coral ,transparent, transparent , transparent)"
              position="fixed"
              transform={"rotate(" + ((hour * 30) - 90) + "deg)"}
            />
            <Square
              width="120px"
              height="6px"
              bgGradient="linear(to-l, cyan, cyan, transparent, transparent , transparent)"
              position="fixed"
              transform={"rotate(" + ((minute * 6) - 90) + "deg)"}
            />
            <Square
              width="180px"
              height="3px"
              bgGradient="linear(to-l, orange, orange, transparent, transparent , transparent)"
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
            color="orange"
            value={((second / 60) * 100)}
            position="fixed"
          />
          <CircularProgress
            marginLeft="10px"
            marginTop="10px"
            size="220px"
            thickness="5px"
            trackColor="black"
            color="cyan"
            value={((minute / 60) * 100)}
            position="fixed"
          />
          <CircularProgress
            marginLeft="20px"
            marginTop="20px"
            size="200px"
            thickness="5px"
            trackColor="black"
            color="coral"
            value={((hour / 12) * 100)}
          />
        </Box>
      </Flex>
    </Box >
  )
}

export default Clock
