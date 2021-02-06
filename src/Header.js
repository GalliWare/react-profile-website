import {Box, Button, Flex, Spacer, Heading} from "@chakra-ui/react"
import Link from "next/link"

function Header(props) {
  return(
      <Flex p="5" bg="green.100">
        <Heading textColor="Black">{props.name}</Heading>
        <Spacer />
        <Box>
          <Button bg="green.700" variant="solid"  size="lg" color="white" mr="3">
            <Link href="/">
              Home
            </Link>
          </Button>
          <Button bg="green.700" variant="solid" size="lg" color="white" mr="3">
            <Link href="/work">
              Work Experience
            </Link>
          </Button>
          <Button bg="green.700" variant="solid" size="lg" color="white" mr="3">
            <Link href="/projects">
              Projects
            </Link>
          </Button>
          <Button bg="green.700" variant="solid" size="lg" color="white" mr="3">
            <Link href="/about">
              About
            </Link>
          </Button>
          <Button bg="green.700" variant="solid" size="lg" color="white">
            <Link href="/contact">
              Contact
            </Link>
          </Button>
        </Box>
      </Flex>
  )
}

export default Header