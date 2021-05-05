import React from "react"
import { Text, Heading, Link, Tabs, Tab, TabPanels, TabPanel, TabList, Box } from "@chakra-ui/react"
import JobCard from "../components/JobCard"
import ContactCard from "../components/ContactCard"

function About() {
  let month = () => {
    switch (new Date().getMonth()) {
      case 0:
        return "January"
      case 1:
        return "February"
      case 2:
        return "March"
      case 3:
        return "April"
      case 4:
        return "May"
      case 5:
        return "June"
      case 6:
        return "July"
      case 7:
        return "August"
      case 8:
        return "September"
      case 9:
        return "October"
      case 10:
        return "November"
      case 11:
        return "December"
      default:
        break;
    }
  }
  const currentDate = month() + " " + new Date().getFullYear()
  const colors = { "headings": "lightgreen" }

  return (
    <Box >
      <Tabs align="center" variant="unstyled" color="lightblue">
        <TabList>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            About</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Experience</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Education</Tab>
          <Tab
            _selected={{ borderRadius: "30px", color: "black", bg: "lightblue" }}
            _hover={{ borderRadius: "30px", color: "lightblue", bg: "black" }}
          >
            Contact</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading
              width="75%"
              padding="4"
              fontFamily="verdana"
              fontSize={["3xl", "5xl"]}
              align="center"
              color={colors.headings}
            > About Me
            </Heading>
            <Text
              width="75%"
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
              align="center"
            >
              I am currently studying a Bachelor of Science in Computing,
              with <Link href="https://www.unisa.ac.za/" isExternal>UNISA </Link>,
              to improve my development skills and theoretical knowledge.
            </Text>
            <Text
              width="75%"
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
              align="center"
            >
              I made the decision to go back to full time studying, as I really enjoy programing and
              finding a solution to a idea or problem.
            </Text>
            <Text
              width="75%"
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
              align="center"
            >
              I found my enjoyment of coding when I was doing a lot of Powershell coding at Jane Street.
            </Text>
            <Text
              width="75%"
              marginLeft="5"
              color="white"
              fontSize={["m", "lg"]}
              align="center"
            >
              More recently in my free time I start to learn JavaScript and then use the React framework
              to make some basic sites.
            </Text>
          </TabPanel>
          <TabPanel>
            <Heading
              padding="4"
              fontFamily="verdana"
              fontSize={["3xl", "5xl"]}
              align="center"
              color={colors.headings}
            > Work Experience
            </Heading>
            <JobCard
              company="DigiOutsource"
              jobTitle="IT Support Technician"
              startTime="April 2020"
              endTime="January 2021"
              location="Cape Town"
            />
            <JobCard
              company="Jane Street"
              jobTitle="Windows Administrator"
              startTime="September 2017"
              endTime="July 2019"
              location="London"
            />
            <JobCard
              company="Omni Partners LLP"
              jobTitle="Systems Analyst"
              startTime="June 2017"
              endTime="August 2017"
              location="London"
            />
            <JobCard
              company="DigiOutsource International"
              jobTitle="IT Support Technician"
              startTime="May 2016"
              endTime="June 2017"
              location="London"
            />
            <JobCard
              company="DigiOutsource"
              jobTitle="IT Support Agent"
              startTime="January 2016"
              endTime="May 2016"
              location="Cape Town"
            />
          </TabPanel>
          <TabPanel>
            <Heading
              padding="4"
              fontFamily="verdana"
              fontSize={["3xl", "5xl"]}
              align="center"
              color={colors.headings}
            > Education
            </Heading>
            <JobCard
              company="UNISA"
              jobTitle="Bachelor of Science in Computing"
              startTime="January 2021"
              endTime={currentDate}
              location="Cape Town"
            />
            <JobCard
              company="UNISA"
              jobTitle="Bachelor of Business Administration"
              startTime="January 2011"
              endTime="December 2014"
              location="Cape Town"
            />
            <JobCard
              company="ETA"
              jobTitle="Diploma in Personal Training"
              startTime="January 2009"
              endTime="Decemeber 2010"
              location="Cape Town"
            />
            <JobCard
              company="St Peter's College Johannesburg"
              jobTitle="Matriculation"
              startTime="January 2004"
              endTime="Decemenber 2008"
              location="Johannesburg"
            />
          </TabPanel>
          <TabPanel>
            <Heading
              padding="4"
              fontFamily="verdana"
              fontSize={["3xl", "5xl"]}
              align="center"
              color={colors.headings}
            >Contact Me</Heading>
            <ContactCard
              method="Email"
              info="craig.gallimore@outlook.com"
            />
            <ContactCard
              method="Github"
              info="https://github.com/GalliWare"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default About