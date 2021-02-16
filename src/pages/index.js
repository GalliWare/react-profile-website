import React from "react"
import { ChakraProvider, Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import Header from "../components/Header"

function Index() {
  return (
    <ChakraProvider>
      <Box backgroundColor="#222222" width="100%" position="fixed" height="100%"></Box>
      <Image src="/indexImage.jpg" width={["100%", "100%", "100%", "100%", "50%"]} position="fixed"></Image>
      <Box display={["inherit", "inherit", "inherit", "inherit", "none"]} width="100%" position="fixed" height="100%" bgGradient="linear(to-t, #222222, #222222, #222222, transparent , transparent)"></Box>
      <Box display={["none", "none", "none", "none", "inherit"]} width="50%" position="fixed" height="150%" bgGradient="linear(to-l, #222222, #222222, #222222, #222222, #222222, transparent, transparent, transparent)" transform="rotate(12deg)" marginLeft="20%" marginTop="-10%"></Box>
      <Box position="fixed" width={["100%", "100%", "100%", "100%", "50%"]} marginLeft={["0", "0", "0", "0", "45%"]} height="100%">
        <Flex direction="column" marginTop={["100%", "75%", "75%", "75%", "33%"]}>
          <Heading padding="4" fontFamily="verdana" color="yellow" fontSize={["3xl", "5xl"]}>
            Software Developer
          </Heading >
          <Text as="kbd" color="white" padding="4" >
            Welcome to my profile page.
          </Text>
        </Flex></Box>
      <Header name="Home" />
    </ChakraProvider>
  )
}

export default Index