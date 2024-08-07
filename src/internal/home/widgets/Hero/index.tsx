import { Flex, VStack, Heading, Text, Box, Button, Link, Image } from "@chakra-ui/react"
import { FaPhone } from "react-icons/fa"
import HiglightText from "../../../base/components/HiglightText"
import metricPeople from "../../../../assets/metric-people.svg"

const Hero = () => (
  <Flex
    as="section"
    id="hero"
    justifyContent={{ base: "space-evenly", lg: "space-between" }}
    gap={{ base: 5, lg: 12 }}
    pt={24}
    alignItems="center"
    minH={"100vh"}
    direction={{ base: "column-reverse", lg: "row" }}
  >
    <VStack
      alignItems={{ base: "center", lg: "start" }}
      textAlign={{ base: "center", lg: "left" }}
      gap="3"
      maxW={{ base: "750px", lg: "600px" }}
    >
      <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
        Optimalkan Bisnis Anda Dengan <HiglightText>ERPPro</HiglightText>
      </Heading>
      <Heading fontSize={"3xl"}>
        Solusi <HiglightText>ERP</HiglightText> Terpadu untuk Meningkatkan{" "}
        <HiglightText>Efisiensi dan Produktivitas</HiglightText>
      </Heading>

      <Text textAlign={{ base: "center", lg: "justify" }}>
        Dapatkan kendali penuh atas operasional bisnis Anda dengan ERPPro. Platform ERP berbasis web kami dirancang
        untuk memudahkan manajemen keuangan, sumber daya manusia, produksi, inventaris, dan banyak lagi.
      </Text>
      <Button
        as={Link}
        href="#contact"
        _hover={{ textDecoration: "none" }}
        type="button"
        size="lg"
        rightIcon={<FaPhone />}
      >
        Contact Us
      </Button>
    </VStack>

    <Box maxW={500}>
      <Image src={metricPeople} alt="hero-image" />
    </Box>
  </Flex>
)

export default Hero
