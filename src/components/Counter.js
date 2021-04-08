import { Button } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <Box height="50px" width="250px" padding="5px" align="center" margin="10px">
      <Heading size="lg" marginBottom={4}>Basic Counter </Heading>
      <Heading color="lightpink" marginBottom={2}>{count}</Heading>
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
  )
}

export default Counter
