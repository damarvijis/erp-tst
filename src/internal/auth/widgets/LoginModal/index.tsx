import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { ReactNode, createContext, useContext } from "react"

import LoginForm from "../LoginForm"
import HiglightText from "../../../base/components/HiglightText"

interface ModalProviderProps {
  children: ReactNode
}

const LoginModalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
})

export const useLoginModal = () => useContext(LoginModalContext)

export const LoginModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <LoginModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
      <Modal onClose={onClose} size={"sm"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <HiglightText>Login Form</HiglightText>
          </ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </LoginModalContext.Provider>
  )
}
