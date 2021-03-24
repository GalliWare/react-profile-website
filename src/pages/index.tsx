import React from "react"
import { ChakraProvider, Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import Header from "../components/Header"

function Index() {
  // TODO: [PS-1] move env data into api.
  // TODO: [PS-2] find better design for the text on large pages. Possible need a page design.
  const textAlignmentValues = ["center", "center", "center", "center", "center", "inherit"]
  const displayValues = ["inherit", "inherit", "inherit", "inherit", "inherit", "none"]
  // TODO: [PS-2] sort out the image sizing
  const imgWidthValues = ["100%", "100%", "100%", "100%", "100%", "50%"]
  const textTopValues = ["100%", "80%", "80%", "80%", "50%", "25%"]
  const textLeftValues = ["0", "0", "0", "0", "50%", "50%"]

  return (
    <ChakraProvider>
      <Box
        backgroundColor="#222222"
        width="100%"
        position="fixed"
        height="100%">
        <Image
          src="/indexImage.jpg"
          width={imgWidthValues}
          position="fixed"
          alt="Profile Photo"
        >
        </Image>
        <Box
          display={displayValues}
          width="100%"
          position="fixed"
          height="100%"
          bgGradient="linear(to-t, #222222, #222222, #222222, transparent , transparent)">
        </Box>
        <Box
          position="fixed"
          marginTop={textTopValues}
          marginLeft={textLeftValues}>
          <Flex
            direction="column"
          >
            <Heading
              padding="4"
              fontFamily="verdana"
              color="lightblue"
              fontSize={["3xl", "5xl"]}
              alignContent={textAlignmentValues}>
              Software Developer
            </Heading >
          </Flex>
        </Box>
        <Header />
      </Box>
    </ChakraProvider>
  )
}

export default Index