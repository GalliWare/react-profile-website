import {
  Box, Button, Flex, Spacer, Menu, MenuButton,
  MenuList, MenuItem, IconButton, Heading, Link
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import link from "next/link"

function Header({ title }) {
  const colour = { heading: "lightblue", color: "Yellow" }
  const paths = ["/", "/about", "/projects"]
  const buttonNames = ["Home", "About", "Projects"]
  let buttons = []

  for (let i = 0; i < paths.length; i++) {
    buttons.push(
      <Button
        key={buttonNames[i]}
        size="lg"
        color={colour.color}
        fontWeight="bold"
        variant="ghost"
        _hover={{ borderBottom: "8px" }}>
        <Link as={link} href={paths[i]}>
          {buttonNames[i]}
        </Link>
      </Button>
    )
  }

  return (
    <Box>
      <Flex
        p={["0", "1", "3"]}
        justify="space-between"
        as="nav"
        wrap="wrap"
        color={colour.color}>
        <Heading
          display={["none", "none", "none", "inherit"]}
        >
          Craig Gallimore
        </Heading>
        <Spacer />
        <Heading
          color={colour.heading}
        >{title}</Heading>
        <Spacer />
        <Box
          display={["none", "none", "inherit"]}>
          {buttons}
        </Box>
        <Menu >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            size="md"
            variant="outline"
            marginLeft="86%"
            icon={<HamburgerIcon />}
            display={["inherit", "inherit", "none"]}
            position="fixed"
          />
          <MenuList>
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
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default Header