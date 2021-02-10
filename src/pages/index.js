import React from "react"
import { ChakraProvider, Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import Header from "../components/Header"

function Index() {
  return (
    <ChakraProvider>
      <Image src="/indexImage.jpg" w={["100%", "100%", "50%"]} mt={["25%", "25%", "0"]} position="fixed" fit={["fill", "fill", "contain"]} borderRadius={["full", "full", "none"]}></Image>
      <Box display={["none", "none", "inherit"]} backgroundColor={["transparent", "transparent", "#222222"]} width="50%" position="fixed" marginLeft="50%" height="100%">
        <Flex direction="column" marginTop="33%" marginLeft="10%">
          <Heading fontFamily="verdana" color="yellow" size="2xl" marginBottom="4">
            Software Developer
          </Heading>
          <Text as="kbd" color="white">
            Welcome to my profile page.
          </Text>
        </Flex>
      </Box>
      <Header name="Home" />
    </ChakraProvider>
  )
}

export default Index