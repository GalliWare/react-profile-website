import React from "react"
import { ChakraProvider, Flex, Tabs, Tab, TabPanels, TabPanel, TabList, extendTheme, Heading } from "@chakra-ui/react"
import About from "./about"
import Home from "./home"
import Projects from "./projects"


function App() {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })
  const displayValues = ["none", "none", "none", "inherit", "inherit", "inherit"]
  return (
    <ChakraProvider theme={theme}>
      <Heading position="fixed" color="yellow" display={displayValues}>Craig Gallimore</Heading>
      <Tabs align="end" variant="unstyled" color="yellow">
        <TabList>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "yellow" }}
            _hover={{ borderRadius: "30px", color: "yellow", bg: "black" }}
          >
            Home</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "yellow" }}
            _hover={{ borderRadius: "30px", color: "yellow", bg: "black" }}
          >
            About</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "yellow" }}
            _hover={{ borderRadius: "30px", color: "yellow", bg: "black" }}
          >
            Projects</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor="yellow" justifyContent="center">
              <About />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor="yellow" justifyContent="center">
              <Projects />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </ChakraProvider>
  )
}

export default App