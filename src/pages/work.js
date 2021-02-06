import React from "react"
import { ChakraProvider,Heading,Button, Wrap, WrapItem} from "@chakra-ui/react"
import Header from "../Header"

function Work() {
  return (
    <ChakraProvider>
      <Header name="Work Experience"/>
    </ChakraProvider>
  )
}

export default Work