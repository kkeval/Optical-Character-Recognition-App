import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { Card } from "../login/Card";
import SignUpForm from "./SignUpForm";
import { Link as ReLink } from "react-router-dom";

const SignUp = () => (
  <Box  maxW={{base:"90%",md:"450px"}} mx="auto">
    
    <Heading textAlign="center"  fontSize={{base:"30px",md:"40px"}} fontWeight="extrabold" >
      Sign Up Here
    </Heading>
    <Box as={ReLink}
        to="/login">
        <Text
        
          mt="2"
          mb="5"
          fontSize={{base:"sm",md:"18px"}}
          textAlign="center"
          color={useColorModeValue("blue.500", "blue.200")}
          maxW="100%"
          fontWeight="medium"
        >
          Already have an account?
        </Text>
      </Box>
    
    <Card boxShadow="dark-lg">
      <SignUpForm />
    </Card>
  </Box>
);

export default SignUp;
