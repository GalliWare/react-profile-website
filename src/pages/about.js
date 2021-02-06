import React from "react"
import { ChakraProvider,Heading,Button, Wrap, WrapItem} from "@chakra-ui/react"
import Header from "../Header"

function About() {
  return (
    <ChakraProvider>
      <Header name="About Me"/>
    </ChakraProvider>
  )
}

export default About