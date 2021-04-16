import { Box, Heading } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

function JobCard({ company, jobTitle, startTime, endTime, location }) {
  return (
    <Box padding="2" color="white">
      {/* TODO: see if we can make the company a link to the companies home page */}
      <Heading fontSize="3xl" color="lightblue" align="center">{jobTitle}</Heading>
      <Text fontSize="xl" marginLeft="2" align="center"> @{company}</Text>
      <Text marginLeft="2%" align="center">from {startTime} to {endTime} in {location}</Text>
      {/* TODO: maybe we can add a description sometime or just remove this comment 
          <Text>{description}</Text> 
        */}
    </Box>
  )
}

export default JobCard