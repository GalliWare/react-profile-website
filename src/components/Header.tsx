import { Box, Button, Flex, Avatar, ChakraProvider, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
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
      <Menu display={["inherit", "inherit", "none"]} padding="5">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="md"
          variant="outline"
          marginLeft="99%"
          icon={<HamburgerIcon />}
          backgroundColor="lightgreen"
          display={["inherit", "inherit", "none"]}
        />
        <MenuList backgroundColor="lightgreen">
          <MenuItem >
            <Link href="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href="/projects">
              Projects
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href="/contact">
              Contact
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href="/about">
              About
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  )
}

export default Header