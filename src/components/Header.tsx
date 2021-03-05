import { Box, Button, Flex, Avatar, ChakraProvider, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from "next/link"

function Header() {
  const paths = ["/", "/about", "/projects", "/contact"]
  const buttonNames = ["Home", "About", "Projects", "Contact"]
  let buttons = []

  for (let i = 0; i < paths.length; i++) {
    buttons.push(
      <Button
        key={buttonNames[i]}
        size="lg"
        color="lightgreen"
        fontWeight="bold"
        variant="ghost"
        _hover={{ borderBottom: "8px" }}>
        <Link href={paths[i]}>
          {buttonNames[i]}
        </Link>
      </Button>
    )
  }

  return (
    <ChakraProvider>
      <Flex
        p={["0", "1", "3"]}
        justify="space-between"
        as="nav"
        wrap="wrap">
        <Avatar
          name="Craig Gallimore"
          src="/Avatar.png"
          display={["none", "none", "inherit"]}>
        </Avatar>
        <Spacer />
        <Box
          display={["none", "none", "inherit"]}>
          {buttons}
        </Box>
      </Flex>
      <Menu >
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="md"
          variant="outline"
          marginLeft="90%"
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
            <Link href="/about">
              About
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
        </MenuList>
      </Menu>
    </ChakraProvider>
  )
}

export default Header