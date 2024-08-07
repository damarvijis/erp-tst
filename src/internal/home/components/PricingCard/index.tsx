import { Box, Center, Text, Stack, List, ListItem, ListIcon, Button } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useLoginModal } from "../../../auth/widgets/LoginModal"

interface PricingCardProps {
  title: string
  price: number
  features: string[]
}

const PricingCard = ({ title, price, features }: PricingCardProps) => {
  const { onOpen } = useLoginModal()

  return (
    <Center py={6}>
      <Box maxW={500} w={"full"} bg={"white"} boxShadow={"2xl"} rounded={"xl"} overflow={"hidden"}>
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text fontSize={"sm"} fontWeight={500} bg={"blue.50"} p={2} px={3} color={"primary"} rounded={"full"}>
            {title}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"} color={"gray.700"}>$</Text>
            <Text fontSize={"6xl"} color={"gray.700"} fontWeight={800}>
              {price}
            </Text>
            <Text color={"gray.500"}>/month</Text>
          </Stack>
        </Stack>

        <Box px={6} py={10}>
          <List spacing={3}>
            {features.map((feature, index) => (
              <ListItem key={index} color={"gray.700"}>
                <ListIcon as={CheckIcon} color="blue.400" />
                {feature}
              </ListItem>
            ))}
          </List>

          <Button mt={10} w={"full"} rounded={"xl"} onClick={onOpen}>
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

export default PricingCard
