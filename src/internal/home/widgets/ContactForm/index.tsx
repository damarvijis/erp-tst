import {
  VStack,
  Heading,
  Text,
  Center,
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react"
import { useContactForm } from "./state"

import HiglightText from "../../../base/components/HiglightText"
import { BsSend } from "react-icons/bs"

const ContactForm = () => {
  const { formik } = useContactForm()

  return (
    <VStack id={"contact"} as="section" minH={"100vh"} pt={24} gap={12} mb={20}>
      <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}>
        Hubungi <HiglightText>Kami</HiglightText>
      </Heading>

      <Center gap={4} flexDirection={"column"} maxW={600}>
        <Text textAlign={"center"}>
          Siap memulai dengan ERPPro atau punya pertanyaan? Kami di sini untuk membantu! Hubungi tim kami dan dapatkan
          dukungan yang Anda butuhkan.
        </Text>

        <Box as="form" display={"flex"} gap={5} flexDirection={"column"} w={"full"} onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
            <FormLabel color="primary" fontWeight={"bold"}>
              Nama
            </FormLabel>
            <Input
              type="text"
              border={"1px solid"}
              _hover={{ border: "1px solid" }}
              _focus={{ border: "1px solid" }}
              placeholder="Damar Jati Sribantolo"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {!!formik.errors.name && formik.touched.name ? (
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your full name.</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
            <FormLabel color="primary" fontWeight={"bold"}>
              Email
            </FormLabel>
            <Input
              type="email"
              border={"1px solid"}
              _hover={{ border: "1px solid" }}
              _focus={{ border: "1px solid" }}
              placeholder="damarjipiz@gmail.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {!!formik.errors.email && formik.touched.email ? (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter a valid email address.</FormHelperText>
            )}
          </FormControl>
          <FormControl w={"full"} isInvalid={!!formik.errors.message && formik.touched.message}>
            <FormLabel color="primary" fontWeight={"bold"}>
              Pesan
            </FormLabel>
            <Textarea
              border={"1px solid"}
              _hover={{ border: "1px solid" }}
              _focus={{ border: "1px solid" }}
              placeholder="Please enter your message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {!!formik.errors.message && formik.touched.message ? (
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            ) : (
              <FormHelperText>
                Please enter your message. Be as detailed as possible to help me understand your inquiry.
              </FormHelperText>
            )}
          </FormControl>

          <Button rightIcon={<BsSend />} type="submit" w={"full"}>
            Send
          </Button>
        </Box>
      </Center>
    </VStack>
  )
}

export default ContactForm
