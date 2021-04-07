import React from "react"
import { ChakraProvider, Box, Text, Heading, Flex, Image } from "@chakra-ui/react"
import Header from "../components/Header"

function Index() {
  const textAlignmentValues = ["center", "center", "center", "inherit", "inherit", "inherit"]
  const displayValues = ["inherit", "inherit", "inherit", "none", "none", "none"]
  const textTopValues = ["100%", "80%", "80%", "20%", "20%", "20%"]
  const textLeftValues = ["0", "0", "0", "50%", "50%", "50%"]
  const imgWidthValues = ["100%", "100%", "100%", "50%", "50%", "50%"]
  const imgTopValues = ["0", "0", "0", "7%", "5%", "4%"]

  return (
    <ChakraProvider>
      <Box
        backgroundColor="#222222"
        width="100%"
        position="fixed"
        height="100%"
      >
        <Image
          src="\index.jpg"
          alt="Profile photo"
          position="fixed"
          borderWidth="medium"
          borderRadius="xl"
          width={imgWidthValues}
          marginTop={imgTopValues}
        />
        <Box
          display={displayValues}
          width="100%"
          position="fixed"
          height="100%"
          bgGradient="linear(to-t, #222222, #222222, #222222, transparent , transparent)"
        >
        </Box>
        <Box
          position="fixed"
          marginTop={textTopValues}
          marginLeft={textLeftValues}
        >
          <Flex
            direction="column"
          >
            <Heading
              padding="4"
              fontFamily="verdana"
              color="lightblue"
              fontSize={["3xl", "5xl"]}
              alignContent={textAlignmentValues}
            > Software Developer
            </Heading >
            <Text
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
              alignContent={textAlignmentValues}
            > Welcome to my simple webpage.
            </Text>
            <Text
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
            > You can find more information about me under the about tab
              or if you looking to see some of my small projects you can check out the projects tab.
              Under that tab you will also find some links to my github repo for some larger project that are not running under this site.
            </Text>
            <Text
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
            > Under the contact tab you can find different ways to get in touch.
            </Text>
            <Text></Text>
          </Flex>
        </Box>
        <Header />
      </Box>
    </ChakraProvider >
  )
}

export default Index