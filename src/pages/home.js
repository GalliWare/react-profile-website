import React from "react"
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react"

function Home() {
  const textAlignmentValues = ["center", "center", "center", "center", "center", "center"]
  const displayValues = ["inherit", "inherit", "inherit", "none", "none", "none"]
  const textTopValues = ["100%", "80%", "80%", "20%", "20%", "20%"]
  const textLeftValues = ["0", "0", "0", "50%", "50%", "50%"]
  const imgWidthValues = ["100%", "100%", "100%", "50%", "50%", "50%"]
  const imgTopValues = ["0", "0", "0", "7%", "6%", "0%"]
  const colors = { "heading": "lightblue", "text": "white" }

  return (
    <Box>
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
        bgGradient={[
          "linear(to-t, #222222, #222222, #222222, transparent , transparent)",
          "linear(to-t, #222222, #222222, #222222, transparent, transparent, transparent , transparent)",
        ]}
      >
      </Box>
      <Box
        position="fixed"
        marginTop={textTopValues}
        marginLeft={textLeftValues}
      >
        <Flex
          direction="column"
          align="start"
        >
          <Heading
            padding="4"
            color={colors.heading}
            fontSize={["3xl", "5xl"]}
            alignContent={textAlignmentValues}
          > Software Developer
          </Heading >
          <Text
            marginLeft="5"
            color={colors.text}
            fontSize={["m", "lg"]}
            alignContent={textAlignmentValues}
          > Welcome to my simple webpage. (Still a work in progress)
          </Text>
          <Text
            marginLeft="5"
            color={colors.text}
            fontSize={["m", "lg"]}
          > You can find more information about me under
            the About tab.
          </Text>
          <Text
            marginLeft="5"
            color={colors.text}
            fontSize={["m", "lg"]}
          >
            If you looking to see some of my small projects, you can check out
            the Projects tab.
          </Text>
        </Flex>
      </Box>
    </Box >
  )
}

export default Home