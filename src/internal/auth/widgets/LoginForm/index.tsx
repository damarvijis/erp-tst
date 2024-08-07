import { VStack, Box, FormControl, Button, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { useLoginForm } from "./state"

import { BsSend } from "react-icons/bs"

const LoginForm = () => {
  const { formik } = useLoginForm()

  return (
    <VStack gap={12} mb={10} w="full">
      <Box
        as="form"
        display={"flex"}
        gap={5}
        flexDirection={"column"}
        maxW={600}
        w={"full"}
        onSubmit={formik.handleSubmit}
      >
        <FormControl isInvalid={!!formik.errors.username && formik.touched.username}>
          <FormLabel color="primary" fontWeight={"bold"}>
            Username
          </FormLabel>
          <Input
            type="text"
            border={"1px solid"}
            _hover={{ border: "1px solid" }}
            _focus={{ border: "1px solid" }}
            placeholder="Username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {!!formik.errors.username && formik.touched.username ? (
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          ) : (
            <FormHelperText>Please enter your username.</FormHelperText>
          )}
        </FormControl>
        <FormControl isInvalid={!!formik.errors.password && formik.touched.password}>
          <FormLabel color="primary" fontWeight={"bold"}>
            Password
          </FormLabel>
          <Input
            type="password"
            border={"1px solid"}
            _hover={{ border: "1px solid" }}
            _focus={{ border: "1px solid" }}
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {!!formik.errors.password && formik.touched.password ? (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          ) : (
            <FormHelperText>Please enter a valid password.</FormHelperText>
          )}
        </FormControl>

        <Button rightIcon={<BsSend />} type="submit" w={"full"}>
          Send
        </Button>
      </Box>
    </VStack>
  )
}

export default LoginForm
