import { Button } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <Box padding="5px" align="center" margin="10px">
      <Heading size="3xl" marginBottom={4}>Basic Counter </Heading>
      <Heading color="red" marginBottom={2}>{count}</Heading>
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
        onClick={() => setCount(0)}>
        reset
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
  )
}

export default Counter
