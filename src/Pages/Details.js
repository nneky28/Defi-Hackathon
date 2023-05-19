import React,{useContext} from 'react'
import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  Button,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Progress,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Stack,
  FormLabel,
  Center,

} from "@chakra-ui/react";
import NavBar from "../Layouts/NavBar";
import Footer from '../Layouts/Footer';
import TeamCard from "../Components/TeamCard";
import CustomCard from "../Components/CustomCard"
import ImageSlider from '../Components/Slider';
import { Link } from "react-router-dom";
import { UserContext } from '../Routes/UserContext';


export default function Details() {
  const { userType,updateUserType } = useContext(UserContext);
  console.log("User",userType)

  const [size, setSize] = React.useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  const persons = [
    {
      img: "jessica.png",
      name: "Jessica Wong",
      role: "Lead Engineer",
      desc: "Jessica Wong, the lead engineer atRoboWorks, has over 10 years of experience designing and building robotic systems. She holds a bachelor's degree in mechanical engineering from MIT and a master's degree in robotics from Carnegie Mellon University. Before joining RoboWorks, she worked at Boston Dynamics and developed some of the company's most advanced robots, including the Atlas humanoid robot and the Spot quadruped robot."
    },
    {
      img: "patel.png",
      name: "Micheal Patel",
      role: "Software developer",
      desc: "Michael Patel, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications."
    },
    {
      img: "kim.png",
      name: "Sarah Kim",
      role: "Mechanical Designer",
      desc: "Sarah Kim, the mechanical designer at RoboWorks, has a background in industrial design and mechanical engineering. She holds a bachelor's degree in mechanical engineering from Georgia Tech and a master's degree in industrial design from the Rhode Island School of Design. She previously worked at IDEO and designed products for clients in various industries, including healthcare and consumer electronics.David Lee, the electrical engineer at RoboWorks, has a degree in electrical engineering from the University of California, Berkeley. He has experience in designing and building custom electronics systems for robotics and automation applications. Prior to joining RoboWorks, he worked at Tesla and contributed to the development of the company's electric vehicle powertrain.Together, the team at RoboWorks brings a diverse set of skills and experiences to the table, enabling them to design and build cutting-edge robotics solutions for a wide range of industries."
    },
    {
      img: "lee.png",
      name: "David Lee",
      role: "Electrical Engineer",
      desc: "David Lee, the electrical engineer at RoboWorks, has a degree in electrical engineering from the University of California, Berkeley. He has experience in designing and building custom electronics systems for robotics and automation applications. Prior to joining RoboWorks, he worked at Tesla and contributed to the development of the company's electric vehicle powertrain.Together, the team at RoboWorks brings a diverse set of skills and experiences to the table, enabling them to design and build cutting-edge robotics solutions for a wide range of industries."
    },
    {
      img: "emily.png",
      name: "Emily Chen",
      role: "Project Manager",
      desc: "Emily Chen, the project manager at RoboWorks, has a degree in engineering management from the University of California, Berkeley. She has experience managing large-scale engineering projects and brings a strong track record of delivering projects on time and within budget. Before joining RoboWorks, she worked at Boeing and managed several aircraft development projects."
    },

    {
      img: "rodri.png",
      name: "Juan Rodriguez",
      role: "Control System Engineer",
      desc: "Juan Rodriguez, the control systems engineer at RoboWorks, holds a master's degree in electrical engineering from Stanford University. He has expertise in control systems theory and has previously worked at NASA's Jet Propulsion Laboratory, where he contributed to the development of autonomous control systems for space exploration missions."
    },
  ]



  return (

    <Box h="auto" bgGradient='linear(to top left, #191E31 50%,#8054DE 200%)' color='#fffff' overflow={'hidden'} w='auto' >
      <NavBar />
      <Flex gap={{ base: 12, md: 20 }} ms={{ base: "24px", md: '50px' }}>
        <Heading fontSize={'36px'} color='white'>RoboWorks</Heading>

{
  userType==="Investor" ?
  <Button   onClick={() => handleSizeClick(size)}
    m={2}
      style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
    >
      Donate
  </Button>:
  <Link to={'/withdraw'}>
          <Button bg={'#8054DE'}>{userType==="Investor"?"Donate":"Withdraw"}</Button>
        </Link>
}
        
      </Flex>
      <Box w={'93%'} mt={8} ms={{ base: "24px", md: '50px' }} borderRadius='lg' borderColor={'#F8F8FA'}>
        <ImageSlider />
      </Box>

      <Box p={{ base: "10px", md: '30px' }} ms={{ base: "5px", md: '20px' }}>
        <Tabs variant='unstyled' size={{ base: 'sm', md: 'sm' }}>
          <TabList mb={5}
            color={'gray'}
            gap={{ base: 0, md: '5.2%' }}
            display="flex"
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Project Overview</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Team members</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Reward/incentives</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Contact information</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Community</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Update</Tab>
            <Tab _selected={{ color: '#FFFFFF', fontSize: 'bold' }}>Security</Tab>
          </TabList>
          <TabPanels color='white'>
            <TabPanel>
              <Flex justify={'space-between'} direction={["column", "row"]}>
                <Box w={{ base: '100%', md: '40%' }}>
                  <Text fontSize={'sm'} lineHeight={8}>
                    RoboWorks is a tech start-up that designs and builds robots for a variety of industries, including manufacturing, construction, and logistics. The company's mission is to help businesses increase efficiency, reduce costs, and improve safety by leveraging robotic technology. RoboWorks offers a range of robotic solutions, from robotic arms and automated machinery to mobile robots and drones. Each solution is tailored to the
                    specific needs of the customer, taking into account factors like production volume, safety requirements, and environmental conditions. RoboWorks is committed to staying at the forefront of robotics technology, continuously researching and developing new solutions to meet the evolving needs of their customers.
                  </Text>
                </Box>
                <Box w={{ base: '100%', md: '40%' }} borderWidth='0.1px' borderRadius='lg' borderColor={'#F8F8FA'} p={'33px'}>
                  <Box >
                    <Progress mb={"10px"} mt={"10px"} value={80} size='lg' borderRadius="11px" bg='#CFBFB2' color='#F17105'
                      colorScheme='orange'
                    />
                    <Text>65%  fundraising goal met </Text>
                  </Box>
                  <Flex justify={'space-between'} mt={"25px"}>
                    <Box>
                      <Text color={'#FFC798'} fontSize={'sm'}>Fundraising goal</Text>
                      <Heading mt={"5px"} fontSize={'26px'} >$190,204,512</Heading>
                    </Box>
                    <Box borderLeft={'1px solid white'} />

                    <Box>
                      <Text color={'#FFC798'} fontSize={'sm'}>Total raised</Text>
                      <Heading mt={"5px"} fontSize={'26px'}>$150,204,512</Heading>
                    </Box>
                  </Flex>
                  <Box borderBottom={'1px solid white'} mt={12} />

                  <Flex justify={'space-between'} mt={10}>
                    <Text color={'#FFC798'} fontSize={'sm'}>Starting date</Text>
                    <Text> June 9, 2023</Text>
                  </Flex>
                  <Flex justify={'space-between'} mt={2}>
                    <Text color={'#FFC798'} fontSize={'sm'}>Completion date</Text>
                    <Text> June 9, 2025</Text>
                  </Flex>
                  <Flex justify={'space-between'} mt={2}>
                    <Text color={'#FFC798'} fontSize={'sm'}>Numbers of backers</Text>
                    <Text>11,372</Text>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 2]} direction={["column", "row"]} spacing={{ base: 0, md: 12 }} >

                {
                  persons.map((item, key) => (
                    <TeamCard
                      key={key}
                      {...item}
                    />
                  ))
                }
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <CustomCard
                img="award.png"
                title={'As a tech start-up, RoboWorks can offer various rewards and incentives to its investors. Here are a few options:'}
                list1={"Equity: One of the most common incentives for investors is equity in the company. By offering equity, investors become part owners of the company and can share in its success through dividends and capital gains."}
                list2={'Early Access to Products: Investors can be given early access to RoboWorks products before they are available to the general public. This can be a valuable incentive, especially for investors who are interested in using the products themselves or have connections in industries where the products could be useful.'}
                list3={'Discounts on Products or Services: Investors can be given discounts on RoboWorks products or services as a way of showing appreciation for their support. This can also help incentivize them to continue investing in the company.'}
                list4={'Exclusive Events or Access: Investors can be given exclusive access to events or opportunities related to RoboWorks. This could include things like VIP tours of the company facilities or invitations to exclusive industry events where they can network and learn more about the latest trends and developments.'}
                list5={'Recognition and Branding: Investors can be recognized and given branding opportunities to show their support for RoboWorks. This could include things like having their names listed on the company website or being featured in marketing materials.Ultimately, the rewards and incentives offered to investors will depend on the goals and needs of the company, as well as the interests and priorities of the investors themselves. Its important to find a balance that is mutually beneficial and helps build a strong relationship between the company and its investors.'}
              />
            </TabPanel>

            <TabPanel>
              <Text>Contact Information</Text>
            </TabPanel>
            <TabPanel>
              <Text>Community</Text>
            </TabPanel>

            <TabPanel>
              <CustomCard
                img="update.png"
                title={'The following are the updates investors should take note of:'}
                list1={"Product Development: RoboWorks provide regular updates on the development of its robotic products, including any new features or capabilities that have been added."}
                list2={'Sales and Revenue: RoboWorks provide updates on its sales and revenue growth, including any major customer wins or partnerships that have been secured. This can help investors understand the company\'s financial performance and growth potential.'}
                list3={'Partnerships and Collaborations: RoboWorks provide updates on any partnerships or collaborations it has established with other companies or organizations. This will help investors understand the company\'s strategic positioning and potential for future growth.'}
                list4={'Key Hires and Talent Acquisition: RoboWorks provide updates on any new key hires or talent acquisitions, including executives, engineers, or other key staff members. This will help investors understand the company\'s leadership and technical capabilities'}
                list5={'Regulatory and Legal Developments: RoboWorks provide updates on any regulatory or legal developments that may impact the company\'s operations or growth potential. This will help investors understand the risks associated with investing in the company and how the company is managing these risks.'}
              />
            </TabPanel>

            <TabPanel>
              <CustomCard
                img="secure.png"
                title={'The following are the security measures put in place by Roboworks'}
                list1={"Secure Data Storage: RoboWorks should ensure that sensitive investor information such as personal details, investment amounts, and transaction records are securely stored using encryption and access controls. This will help prevent data breaches and unauthorized access."}
                list2={'Two-Factor Authentication: RoboWorks can require two-factor authentication for all investor accounts to ensure that only authorized users can access their accounts. This can involve a combination of passwords, security questions, and verification codes sent to mobile devices.'}
                list3={'Regular Security Audits: RoboWorks can conduct regular security audits to identify and address potential vulnerabilities in their systems and processes. This will help ensure that the company is staying up to date with the latest security threats and taking appropriate measures to protect investor data. '}
                list4={'Transparency: RoboWorks can be transparent with investors about the security measures they have in place, how they handle sensitive information, and what steps they are taking to address any security concerns..'}
                list5={'Insurance: RoboWorks can obtain insurance to protect against losses due to cyber attacks or other security breaches. This can provide an added layer of protection for investors and help demonstrate the company\'s commitment to security.'}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>Donate</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Stack spacing={4}>
                <FormLabel fontSize={"20px"} mt={5}>
                  Amount
                </FormLabel>
                <Input
                  type="default"
                  placeholder="0.0"
                  bg={"white"}
                  color={"black"}
                  _placeholder={{ color: "black" }}
                  h={14}
                  textAlign="left"
                />
              </Stack>
            </Center>
            <Center>
              <Link to="/DonateThanks">
              <Button
                style={{ backgroundColor: "rgb(128, 84, 222)", color: "white" }}
                mt={"10px"}
              >
                Donate
              </Button>
              </Link>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Footer />
    </Box>


  )
}
