import React from "react"
import { ChakraProvider, Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import Header from "../components/Header"

function Index() {
  const heading = process.env.NEXT_PUBLIC_INDEX_HEADING
  const textAlignmentValues = ["center", "center", "center", "center", "center", "inherit"]
  const text = [
    <Text key="p1" as="kbd" color="white" alignContent={textAlignmentValues}>
      {process.env.NEXT_PUBLIC_INDEX_TEXT_P1}
    </Text>,
    <Text key="p2" as="kbd" color="white" alignContent={textAlignmentValues}>
      {process.env.NEXT_PUBLIC_INDEX_TEXT_P2}
    </Text>,
    <Text key="p3" as="kbd" color="white" alignContent={textAlignmentValues}>
      {process.env.NEXT_PUBLIC_INDEX_TEXT_P3}
    </Text>,
    <Text key="p4" as="kbd" color="white" alignContent={textAlignmentValues}>
      {process.env.NEXT_PUBLIC_INDEX_TEXT_P4}
    </Text>,
  ]
  const displayValues = ["inherit", "inherit", "inherit", "inherit", "inherit", "none"]
  const imgWidthValues = ["100%", "100%", "100%", "100%", "100%", "100%"]
  const textTopValues = ["100%", "75%", "75%", "75%", "50%", "33%"]

  return (
    <ChakraProvider>
      <Box
        backgroundColor="#222222" width="100%" position="fixed" height="100%">
        <Image
          src="/indexImage.jpg"
          width={imgWidthValues}
          position="fixed">
        </Image>
        <Box
          display={displayValues}
          width="100%" position="fixed" height="100%"
          bgGradient="linear(to-t, #222222, #222222, #222222, transparent , transparent)">
        </Box>
        <Box
          position="fixed"
          width={imgWidthValues}
          height="100%">
          <Flex
            direction="column"
            marginTop={textTopValues}>
            <Heading
              padding="4" fontFamily="verdana" color="yellow"
              fontSize={["3xl", "5xl"]} alignContent={textAlignmentValues}>
              {heading}
            </Heading >
            {text}
          </Flex>
        </Box>
        <Header />
      </Box>
    </ChakraProvider>
  )
}

export default Index