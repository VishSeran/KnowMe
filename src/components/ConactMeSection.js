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
    VStack
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useState } from "react";



const ConactMeSection = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#391350">

            <VStack w="1024px" paddingTop="20" alignItems="flex-start">
                <Heading as="h1" id="contact-me-section" fontSize="40px">
                    Contact Me
                </Heading>

                <Box paddingTop={40} >
                    <form>
                        <VStack alignItems="flex-start" margin={5} >
                            <Box fontSize={25}>
                                <label className="contactName" htmlFor="name" >Name</label>
                            </Box>
                            
                            <Input id="name" w="1000px" paddingTop={5} value={name} onChange={(e) => setName(e.target.value)} />
                
                            


                        </VStack>

                        <VStack alignItems="flex-start" margin={5}>
                            <label className="contactName" htmlFor="email">Email</label>
                            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </VStack>

                        <VStack alignItems="flex-start" margin={5}>
                            <label className="contactName" htmlFor="message">Message</label>
                            <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </VStack>
                    </form>
                </Box>
            </VStack>

        </FullScreenSection>
    )
}
export default ConactMeSection;