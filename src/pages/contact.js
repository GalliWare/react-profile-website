import React from "react"
import { ChakraProvider,Heading,Button, Wrap, WrapItem} from "@chakra-ui/react"
import Header from "../Header"

function Contact() {
  return (
    <ChakraProvider>
      <Header name="Contact Details"/>
    </ChakraProvider>
  )
}

export default Contact