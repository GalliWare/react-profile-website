import { Button } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <ChakraProvider>
      <Box height="50px" width="250px" padding="5px" align="center" margin="10px">
        <Heading size="lg">Basic Counter </Heading>
        <Heading color="white">{count}</Heading>
        <Button
          size="lg"
          color="lightblue"
          fontWeight="bold"
          variant="ghost"
          _hover={{
            borderBottom: "8px"
          }}
          onClick={() => setCount(count - 1)}>
          -
        </Button>
        <Button
          size="lg"
          color="lightblue"
          fontWeight="bold"
          variant="ghost"
          _hover={{
            borderBottom: "8px"
          }}
          onClick={() => setCount(count + 1)}>
          +
        </Button>
      </Box>
    </ChakraProvider >
  )
}

export default Counter
