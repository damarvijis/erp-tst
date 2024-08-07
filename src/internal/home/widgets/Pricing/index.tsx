import { VStack, Heading, Text, Flex } from "@chakra-ui/react"
import HiglightText from "../../../base/components/HiglightText"
import PricingCard from "../../components/PricingCard"

const PRICING_CONTENT = [
  {
    title: "Starter Plan",
    price: 29,
    features: ["Manajemen Keuangan", "Inventaris Dasar", "Dukungan Email"],
  },
  {
    title: "Business Plan",
    price: 79,
    features: ["Manajemen Keuangan", "Inventaris Dasar", "Dukungan Email", "Manajemen HR", "CRM", "Dukungan 24/7"],
  },
  {
    title: "Enterprise Plan",
    price: 199,
    features: [
      "Manajemen Keuangan",
      "Inventaris Dasar",
      "Dukungan Email",
      "Manajemen HR",
      "CRM",
      "Dukungan 24/7 Prioritas",
      "Manajemen Produksi",
      "Integrasi Lanjutan",
    ],
  },
]

const Pricing = () => (
  <VStack id={"pricing"} as="section" minH={"100vh"} pt={24} gap={12} pb={10}>
    <VStack gap={4}>
      <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} data-aos="fade-left" data-aos-delay="200">
        Paket <HiglightText>Harga</HiglightText>
      </Heading>
      <Text textAlign={"center"}>
        Temukan paket ERPPro yang tepat untuk kebutuhan bisnis Anda. Mulai dari startup yang baru memulai hingga
        perusahaan besar, ERPPro menawarkan berbagai pilihan paket yang fleksibel dan terjangkau untuk memastikan
        kesuksesan Anda.
      </Text>
    </VStack>

    <Flex
      gap={{ base: 15, lg: 20 }}
      w={"full"}
      justifyContent={"center"}
      alignItems={{ base: "center", lg: "start" }}
      direction={{ base: "column", lg: "row" }}
    >
      {PRICING_CONTENT.map((data, index) => (
        <PricingCard {...data} key={index} />
      ))}
    </Flex>
  </VStack>
)

export default Pricing
