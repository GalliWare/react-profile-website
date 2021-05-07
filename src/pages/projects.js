import React from "react"
import { Flex, Tabs, Tab, TabPanels, TabPanel, TabList, Box } from "@chakra-ui/react"
import Calculator from "../components/projects/Calculator"
import Counter from "../components/projects/Counter"
import Clock from '../components/projects/Clock';


function Projects() {
  const colors = { "headings": "lightgreen" }
  return (
    <Box>
      <Tabs align="center" variant="unstyled" color="lightblue">
        <TabList>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Clocks</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Calculator</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Counter</Tab>
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