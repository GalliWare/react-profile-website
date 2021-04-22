import { Box } from '@chakra-ui/layout'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function ContactCard({ method, info }) {
  return (
    <Box padding="2">
      {/* TODO: make contacts dynamic, need to make URLs clickable and email mailto me setup */}
      <Text fontSize="2xl" color="yellow" align="center">{method}:</Text>
      <Text fontSize="2xl" color="white" align="center">  {info}</Text>
    </Box>
  )
}

export default ContactCard