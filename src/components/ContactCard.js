import { Box } from '@chakra-ui/layout'
import { Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function ContactCard({ method, info }) {
  return (
    <Box padding="2" marginLeft="5%">
      {/* TODO: make contacts dynamic, need to make URLs clickable and email mailto me setup */}
      <Flex direction="row">
        <Text fontFamily="verdana" fontSize="2xl">{method}:</Text>
        <Text fontFamily="verdana" fontSize="2xl" color="white" marginLeft="2%">  {info}</Text>
      </Flex>
    </Box>
  )
}

export default ContactCard