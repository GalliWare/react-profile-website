import { Box, Heading, Flex } from '@chakra-ui/layout'
import { Text, Link } from '@chakra-ui/react'

function JobCard({ company, jobTitle, startTime, endTime, location }) {
  return (
    <Box padding="2" color="white">
      {/* TODO: see if we can make the company a link to the companies home page */}
      <Flex direction="row">
        <Heading fontSize="3xl" color="lightblue">{jobTitle}</Heading>
        <Text fontSize="xl" marginLeft="2"> @{company}</Text>
      </Flex>
      <Text marginLeft="2%">from {startTime} to {endTime} in {location}</Text>
      {/* TODO: maybe we can add a description sometime or just remove this comment 
          <Text>{description}</Text> 
        */}
    </Box>
  )
}

export default JobCard