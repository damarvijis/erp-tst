import { VStack, Heading, Stack } from "@chakra-ui/react"
import AboutCard from "../../components/AboutCard"
import HiglightText from "../../../base/components/HiglightText"
import aboutSupport from "../../../../assets/about-support.svg"
import aboutSolution from "../../../../assets/about-solution.svg"
import aboutEasyToUse from "../../../../assets/about-good-ux.svg"

const ABOUT_CONTENT = [
  {
    imageUrl: aboutSolution,
    title: "Solusi Komprehensif untuk Bisnis Anda",
    description:
      "ERPPro adalah sistem ERP berbasis web yang menawarkan solusi komprehensif untuk berbagai kebutuhan bisnis Anda. Dengan ERPPro, Anda dapat mengintegrasikan semua proses bisnis dalam satu platform yang mudah digunakan, memungkinkan Anda untuk mengelola operasi harian dengan lebih efisien dan efektif.",
  },
  {
    imageUrl: aboutEasyToUse,
    title: "Kemudahan Penggunaan",
    description:
      "Dengan antarmuka yang intuitif dan fitur-fitur yang user-friendly, ERPPro memudahkan Anda dan tim untuk mengadopsi sistem ini tanpa hambatan. Kami memastikan bahwa setiap fungsi dirancang untuk meningkatkan produktivitas dan mengurangi kompleksitas dalam manajemen bisnis.",
  },
  {
    imageUrl: aboutSupport,
    title: "Dukungan dan Teknologi Terkini",
    description:
      "Kami berkomitmen untuk membantu bisnis Anda mencapai kinerja terbaik dengan teknologi terkini dan dukungan yang andal. Tim support kami siap membantu Anda 24/7 untuk memastikan bahwa Anda mendapatkan pengalaman terbaik dalam menggunakan ERPPro.",
  },
]

const About = () => (
  <VStack id={"about"} as="section" minH={"100vh"} pt={24} gap={12} pb={10}>
    <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} data-aos="fade-left" data-aos-delay="200">
      Kenapa <HiglightText>ERPPro?</HiglightText>
    </Heading>

    <Stack gap={{ base: 16, lg: 24 }} wrap={"wrap"} w={"full"} mx={"auto"} direction={"row"}>
      {ABOUT_CONTENT.map((val, index) => (
        <AboutCard {...val} isEven={index % 2 === 0} key={index} />
      ))}
    </Stack>
  </VStack>
)

export default About
