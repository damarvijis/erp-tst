import { ReactNode } from "react"
import { Container } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"

type StaticPageProps = {
  children: ReactNode
}

const StaticPage = ({ children }: StaticPageProps) => {
  return (
    <Container maxW={1200} minH={"100vh"} mx={"auto"} overflow={"hidden"}>
      <Navbar />
      {children}
    </Container>
  )
}

export default StaticPage
