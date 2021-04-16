import React from "react"
import { ChakraProvider, Flex, Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react"
import Header from "../components/Header"
import Calculator from "../components/Calculator"
import Counter from "../components/Counter"
import Clock from '../components/Clock';


function Projects() {
  return (
    <ChakraProvider>
      <Header title="Projects" />
      <Tabs align="center">
        <TabList>
          <Tab>Clocks</Tab>
          <Tab>Calculator</Tab>
          <Tab>Counter</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex width="100%" textColor="yellow" justifyContent="center">
              <Clock />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor="yellow" justifyContent="center">
              <Calculator />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex width="100%" textColor="yellow" justifyContent="center">
              <Counter />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </ChakraProvider>
  )
}

export default Projects