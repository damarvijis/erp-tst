import { ReactNode, useEffect, useState } from "react"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Container,
  VStack,
  Collapse,
  Heading,
  Button,
} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useLoginModal } from "../../../auth/widgets/LoginModal"
import { ThemeSwitcher } from "../ThemeSwitcher"

const DefaultMenu = {
  id: "hero",
}

const Menus = [
  { name: "About", id: "about" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
]

const NavLink = ({ children, href, isActive }: { children: ReactNode; href: string; isActive?: boolean }) => (
  <Link
    px={2}
    py={1}
    href={`#${href}`}
    fontWeight={600}
    _hover={{ color: "primary" }}
    borderColor={"primary"}
    sx={
      isActive
        ? {
            color: "primary",
            borderBottom: "2px solid",
          }
        : undefined
    }
  >
    {children}
  </Link>
)

const Navbar = () => {
  const { onOpen: onOpenModal } = useLoginModal()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeSection, setActiveSection] = useState<string | null>("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleSectionChange = () => {
      requestAnimationFrame(() => {
        const offset = 5
        const sections = document.querySelectorAll("section")
        const scrollPos = window.scrollY + offset

        if (scrollPos > offset) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }

        sections.forEach(section => {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.getAttribute("id"))
          }
        })
      })
    }

    window.addEventListener("scroll", handleSectionChange)
    return () => {
      window.removeEventListener("scroll", handleSectionChange)
    }
  }, [])

  const NavLinkList = Menus.map((link, idx) => (
    <NavLink href={link.id} isActive={link.id === activeSection} key={idx}>
      {link.name}
    </NavLink>
  ))

  return (
    <Box w="full" position={"fixed"} top="0" left="0" right="0" py={2} px={4} zIndex={1000}>
      <Container
        maxW={1200}
        mx="auto"
        mt={2}
        backdropFilter={"blur(25px)"}
        transition="all 0.3s ease-in-out"
        borderRadius={"xl"}
        boxShadow={isScrolled ? "lg" : "none"}
      >
        <Flex h={16} maxW={1200} alignItems="center" justifyContent="space-between">
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size="md"
            variant="outline"
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link _hover={{ textDecoration: "none" }} href={`#${DefaultMenu.id}`}>
            <Heading as="h1" size="xl" bgGradient="linear(to-r, blue.300, purple.300)" bgClip="text" fontWeight="bold">
              ERPPro
            </Heading>
          </Link>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <HStack as={"nav"} spacing={4}>
              {NavLinkList}
              <Button variant="outline" onClick={onOpenModal}>
                Login
              </Button>
              <ThemeSwitcher />
            </HStack>
          </Flex>
          <Box alignItems={"center"} display={{ base: "flex", md: "none" }}>
            <ThemeSwitcher />
          </Box>
        </Flex>

        {/* Mobile */}
        <Collapse in={isOpen}>
          <Box
            py={4}
            display={{ md: "none", base: "flex" }}
            transition={"all 0.3s ease-in-out"}
            justifyContent="center"
          >
            <VStack as={"nav"} spacing={4}>
              {NavLinkList}
              <Button variant="outline" onClick={onOpenModal}>
                Login
              </Button>
            </VStack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  )
}

export default Navbar
