import React from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Header from "../components/Header"

function Contact() {
  return (
    <ChakraProvider>
      <Box backgroundColor="#222222" width="100%" position="fixed" height="100%"></Box>
      <Header name="Contact Details" />
    </ChakraProvider>
  )
}

export default Contact