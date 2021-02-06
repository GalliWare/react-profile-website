import React from "react"
import { ChakraProvider,Heading,Button, Wrap, WrapItem} from "@chakra-ui/react"
import Header from "../Header"

function App() {
  return (
    <ChakraProvider>
      <Header name="Home"/>
    </ChakraProvider>
  )
}

export default App