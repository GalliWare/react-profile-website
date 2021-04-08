import React from "react"
import { ChakraProvider, Box, Text, Heading, Flex, Spacer, Link } from "@chakra-ui/react"
import Header from "../components/Header"
import JobCard from "../components/JobCard"
import ContactCard from "../components/ContactCard"

function About() {
  let month = () => {
    switch (new Date().getMonth()) {
      case 0:
        return "January"
      case 1:
        return "Febuary"
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
        return "Novemeber"
      case 11:
        return "Decemeber"
      default:
        break;
    }
  }
  const currentDate = month() + " " + new Date().getFullYear()

  return (
    <ChakraProvider>
      <Box
        backgroundColor="#222222"
        color="lightblue"
        width="100%"
        position="fixed"
        height="100%"
        alignContent="center"
      >
        <Header title="About" />
        <Flex direction="row">
          <Flex width="50%" direction="column">
            <Box>
              <Heading
                padding="4"
                fontFamily="verdana"
                fontSize={"5xl"}
                align="center"
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
            </Box>
            <Spacer />
            <Box>
              <Heading align="center">Contact Me</Heading>
              <ContactCard
                method="Email"
                info="craig.gallimore@outlook.com"
              />
              <ContactCard
                method="Github"
                info="https://github.com/GalliWare"
              />
            </Box>
          </Flex>
          <Flex width="50%" direction="column">
            <Box>
              <Heading
                padding="4"
                fontFamily="verdana"
                fontSize={["3xl", "5xl"]}
                align="center"
              > About Me
              </Heading>
              <Text
                marginLeft="5"
                color="white"
                fontSize={["m", "lg"]}
                align="center"
                fontFamily="verdana"
              >
                I am currently studying a Bachelor of Science in Computing,
                with <Link href="https://www.unisa.ac.za/" isExternal>UNISA </Link>,
                to improve my development skills and theoretical knowledge.
              </Text>
              <Text
                marginLeft="5"
                color="white"
                fontSize={["m", "lg"]}
                align="center"
                fontFamily="verdana"
              >
                I made the decision to go back to full time studying, as I really enjoy programing and
                finding a solution to a idea or problem.
              </Text>
              <Text
                marginLeft="5"
                color="white"
                fontSize={["m", "lg"]}
                align="center"
                fontFamily="verdana"
              >
                I found my enjoyment of coding when I was doing a lot of Powershell coding at Jane Street
                and more recently in my free time I start to learn JavaScript and then use the React framework
                to make some basic sites.
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Heading
                padding="4"
                fontFamily="verdana"
                fontSize={["3xl", "5xl"]}
                align="center"
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
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default About