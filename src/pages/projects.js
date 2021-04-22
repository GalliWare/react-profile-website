import React from "react"
import { ChakraProvider, Flex, Tabs, Tab, TabPanels, TabPanel, TabList, Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Calculator from "../components/Calculator"
import Counter from "../components/Counter"
import Clock from '../components/Clock';


function Projects() {
  const colors = { "headings": "lightgreen" }
  return (
    <Box>
      <Tabs align="center" variant="unstyled" color="lightblue">
        <TabList>
          <Tab _selected={{ color: "black", bg: "lightblue" }} _hover={{ borderBottom: "8px" }}>Clocks</Tab>
          <Tab _selected={{ color: "black", bg: "lightblue" }} _hover={{ borderBottom: "8px" }}>Calculator</Tab>
          <Tab _selected={{ color: "black", bg: "lightblue" }} _hover={{ borderBottom: "8px" }}>Counter</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex width="100%" textColor={colors.headings} justifyContent="center">
              <Clock />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor={colors.headings} justifyContent="center">
              <Calculator />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor={colors.headings} justifyContent="center">
              <Counter />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Projects