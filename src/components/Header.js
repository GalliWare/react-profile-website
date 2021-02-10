import { Box, Button, Flex, Avatar, ChakraProvider, Spacer } from "@chakra-ui/react"
import Link from "next/link"

function Header() {
  return (
    <ChakraProvider>
      <Flex
        p={["0", "1", "3"]}
        justify="space-between"
        as="nav"
        wrap="wrap"
      >
        <Avatar name="Craig Gallimore" src="/Avatar.png" display={["none", "none", "inherit"]}></Avatar>
        <Spacer />
        <Box display={["none", "none", "inherit"]}>
          <Button size="lg" color="lightgreen" fontWeight="bold" variant="ghost" _hover={{ borderBottom: "8px" }}>
            <Link href="/">
              Home
            </Link>
          </Button>
          <Button size="lg" color="lightgreen" fontWeight="bold" variant="ghost" _hover={{ borderBottom: "8px" }}>
            <Link href="/projects">
              Projects
            </Link>
          </Button>
          <Button size="lg" color="lightgreen" fontWeight="bold" variant="ghost" _hover={{ borderBottom: "8px" }}>
            <Link href="/contact">
              Contact
            </Link>
          </Button>
          <Button size="lg" color="lightgreen" fontWeight="bold" variant="ghost" _hover={{ borderBottom: "8px" }}>
            <Link href="/about">
              About
            </Link>
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default Header