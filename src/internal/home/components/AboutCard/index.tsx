import { Flex, Heading, Text, Box, Image, Stack } from "@chakra-ui/react"

interface AboutCardProps {
  isEven: boolean
  title: string
  description: string
  imageUrl: string
}

const AboutCard = ({ isEven, imageUrl, title, description }: AboutCardProps) => (
  <Flex
    gap={12}
    w={"full"}
    alignItems={{ base: "center" }}
    direction={{
      base: "column",
      lg: isEven ? "row-reverse" : "row",
    }}
  >
    <Box maxW={300} flex={1} my={"auto"}>
      <Image draggable={false} src={imageUrl} alt={"about-image"} borderRadius={"xl"} />
    </Box>
    <Stack direction={"column"} flex={"1"} px={{ base: "5", lg: "0" }} gap={4}>
      <Heading color={"primary"}>{title}</Heading>
      <Text fontSize={{ base: "lg", lg: "md", "2xl": "lg" }} textAlign={"justify"}>
        {description}
      </Text>
    </Stack>
  </Flex>
)

export default AboutCard
