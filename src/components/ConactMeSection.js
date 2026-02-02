import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useState } from "react";

const ConactMeSection = () => {


    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');


    return (
        <FullScreenSection
        isDarkBackground
        backgroundColor = "#391350">

            <VStack w="1024px" paddingTop="20" alignItems= "flex-start">
                <Heading as= "h1" id="contact-me-section" fontSize="40px">
                    Contact Me
                </Heading>

                <Box>
                    <form>
                        <VStack>
                            <label htmlFor="id">name</label>
                            <input id="name"/>
                        </VStack>
                    </form>
                </Box>
            </VStack>

        </FullScreenSection>
    )
}
export default ConactMeSection;