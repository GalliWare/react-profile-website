import {
  Box, Button, Flex, Avatar, ChakraProvider, Spacer, Menu, MenuButton,
  MenuList, MenuItem, IconButton, Heading
} from "@chakra-ui/react"
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
        color="lightblue"
        fontWeight="bold"
        variant="ghost"
        _hover={{ borderBottom: "8px" }}>
        <Link href={paths[i]}>
          {buttonNames[i]}
        </Link>
      </Button>
    )
  }

  let heading = () => {
    let lowerCaseHeading = window.location.pathname.split("/")[1]
    let firstLetterUpperCaseHeading = lowerCaseHeading.replace(lowerCaseHeading[0], lowerCaseHeading[0].toUpperCase())
    return firstLetterUpperCaseHeading
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
          display={["none", "none", "inherit"]}
          bgColor="lightblue">
        </Avatar>
        <Spacer />
        <Heading color="lightblue">
          {heading()}
        </Heading>
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
          backgroundColor="lightblue"
          display={["inherit", "inherit", "none"]}
        />
        <MenuList backgroundColor="lightblue">
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