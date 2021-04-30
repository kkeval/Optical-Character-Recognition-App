import { useAuth } from "../../contexts/AuthContext";
import { Link as ReLink } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import {
  Box,
  Button,
  Link,
  Text,
  Flex,
  Spacer,
  Heading
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import Profile from "./Profile";

export default function NavBar() {
  const {currentUser} = useAuth();
  return (
    <Flex
      w="100%"
      h="6em"
      mb="40px"
      alignItems="center"
      justifyContent="center"
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />      
      <Heading
       
        as={ReLink}
        to="/"
        style={{ fontFamily: "'Press Start 2P' ",  textDecoration: "none"}}
        ml="20px"
        fontWeight="bold"
        fontSize="45px"
        bgGradient="linear(to-r, #7928CA,#FF0080)"
        bgClip="text"
      >OCR APP
      </Heading>
      <Spacer />
      {!currentUser && (
        <Box>
          <Link style={{ textDecoration: "none" }} as={ReLink} to="/signup">
            <Button colorScheme="light" variant="ghost" mr="2" fontSize="lg">
              Sign Up
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} as={ReLink} to="/login">
            <Button colorScheme="light" variant="ghost" mr="2" fontSize="lg">
              Login
            </Button>
          </Link>
        </Box>
      )}
      {currentUser && (
        <>
          <Text mr="20px" fontSize="sm" color="gray.400">
            {" "}
            {currentUser.email}{" "}
          </Text>
          <Profile />
        </>
      )}
      <ColorModeSwitcher ml="10px" mr="10px" />
    </Flex>
  );
}