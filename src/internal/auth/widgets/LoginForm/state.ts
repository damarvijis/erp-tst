import { useToast } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as yup from "yup"

interface LoginFormBody {
  username: string
  password: string
}

export const validationSchema = yup.object({
  username: yup.string().required("Username is required."),
  password: yup.string().required("Password is required."),
})

export const useLoginForm = () => {
  const toast = useToast()

  const formik = useFormik<LoginFormBody>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, helper) => {
      const examplePromise = new Promise(resolve => {
        setTimeout(() => {
          helper.resetForm()
          resolve(200)
        }, 3000)
      })

      toast.promise(examplePromise, {
        success: {
          title: "Login successfully!",
          description: `Your data: ${JSON.stringify(values)}`,
          isClosable: true,
          position: "top-right",
        },
        error: {
          title: "Login failed!",
          description: "Please try again.",
          isClosable: true,
          position: "top-right",
        },
        loading: {
          title: "Authenticating...",
          description: "Please wait while authenticating your data.",
          isClosable: true,
          position: "top-right",
        },
      })
    },
  })

  return { formik }
}
