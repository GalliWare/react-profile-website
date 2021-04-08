import { Box, Heading } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

function JobCard({ company, jobTitle, startTime, endTime, location }) {
  return (
    <Box padding="2" marginLeft="5%">
      {/* TODO: see if we can make the company a link to the companies home page */}
      <Heading fontFamily="verdana" fontSize="3xl">{jobTitle} @{company}</Heading>
      <Text fontFamily="verdana" marginLeft="1%" color="white" fontSize={["m", "lg"]}>from {startTime} to {endTime} in {location}</Text>
      {/* TODO: maybe we can add a description sometime or just remove this comment 
          <Text>{description}</Text> 
        */}
    </Box>
  )
}

export default JobCard