import React from "react"
import { ChakraProvider, Box, Text, Heading, Flex, Image, Link } from "@chakra-ui/react"
import Header from "../components/Header"
import link from "next/link"

function Index() {
  const textAlignmentValues = ["center", "center", "center", "inherit", "inherit", "inherit"]
  const displayValues = ["inherit", "inherit", "inherit", "none", "none", "none"]
  const textTopValues = ["100%", "80%", "80%", "20%", "20%", "20%"]
  const textLeftValues = ["0", "0", "0", "50%", "50%", "50%"]
  const imgWidthValues = ["100%", "100%", "100%", "50%", "50%", "50%"]
  const imgTopValues = ["0", "0", "0", "7%", "6%", "6%"]

  return (
    <ChakraProvider>
      <Box
        backgroundColor="#222222"
        width="100%"
        position="fixed"
        height="100%"
        color="white"
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
              color="lightblue"
              fontSize={["3xl", "5xl"]}
              alignContent={textAlignmentValues}
            > Software Developer
            </Heading >
            <Text
              marginLeft="5"
              fontSize={["m", "lg"]}
              alignContent={textAlignmentValues}
            > Welcome to my simple webpage. (Still a work in progress)
            </Text>
            <Text
              marginLeft="5"
              fontSize={["m", "lg"]}
            > You can find more information about me under
              the <Link as={link} href="/about">About</Link> tab.
            </Text>
            <Text
              marginLeft="5"
              fontSize={["m", "lg"]}
            >
              If you looking to see some of my small projects, you can check out
              the <Link as={link} href="/projects">Projects</Link> tab.
              Under that tab you will also find some links to repos for projects that are maybe not
              currently up and running or that are not web projects..
            </Text>
          </Flex>
        </Box>
        <Header title="Home" />
      </Box>
    </ChakraProvider >
  )
}

export default Index