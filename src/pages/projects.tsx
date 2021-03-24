import React from "react"
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Calculator from "../components/Calculator"
import Counter from "../components/Counter"


function Projects() {
  const projects = [
    <Calculator />,
    <Counter />
  ]
  return (
    <ChakraProvider>
      <Box backgroundColor="#222222" width="100%" position="fixed" height="100%">
        <Header />
        <Flex width="100%" textColor="lightblue" justifyContent="center">
          {projects}
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default Projects