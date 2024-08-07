import { Box } from "@chakra-ui/react"
import StaticPage from "../../../base/layout/StaticPage"
import Hero from "../../widgets/Hero"
import About from "../../widgets/About"
import Pricing from "../../widgets/Pricing"
import ContactForm from "../../widgets/ContactForm"

import { LoginModalProvider } from "../../../auth/widgets/LoginModal"

const HomeScreen = () => {
  return (
    <Box>
      <LoginModalProvider>
        <StaticPage>
          <Hero />
          <About />
          <Pricing />
          <ContactForm />
        </StaticPage>
      </LoginModalProvider>
    </Box>
  )
}

export default HomeScreen
