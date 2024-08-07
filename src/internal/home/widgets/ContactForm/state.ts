import { useToast } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as yup from "yup"

interface ContactFormBody {
  name: string
  email: string
  message: string
}

export const validationSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Please enter a valid email address.").required("Email is required."),
  message: yup.string().required("Message is required."),
})

export const useContactForm = () => {
  const toast = useToast()

  const formik = useFormik<ContactFormBody>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      message: "",
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
          title: "Email sent successfully!",
          description: `Thank you for contacting us. Your data: ${JSON.stringify(values)}`,
          isClosable: true,
          position: "top-right",
        },
        error: {
          title: "Email sending failed!",
          description: "Please try again later.",
          isClosable: true,
          position: "top-right",
        },
        loading: {
          title: "Sending email...",
          description: "Please wait while sending your email.",
          isClosable: true,
          position: "top-right",
        },
      })
    },
  })

  return { formik }
}
