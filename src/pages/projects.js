import React from "react"
import { ChakraProvider,Heading,Button, Wrap, WrapItem} from "@chakra-ui/react"
import Header from "../Header"

function Projects() {
  return (
    <ChakraProvider>
      <Header name="Projects"/>
    </ChakraProvider>
  )
}

export default Projects