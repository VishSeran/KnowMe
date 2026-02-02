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
import { Form } from "react-router-dom";




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
                        <VStack alignItems="flex-start" padding={5}>
                            <Box fontSize={25} paddingBlock={0}>
                                <label className="contactName" htmlFor="name" >Name</label>
                            </Box>
                            <Input id="name" type="text" w="1000px" fontSize={25} height="50px" value={name} onChange={(e) => setName(e.target.value)} />
                        </VStack>

                        <VStack alignItems="flex-start" padding={5}>
                            <Box fontSize={25} paddingBlock={0}>
                                <label className="contactName" htmlFor="email" >Email</label>
                            </Box>
                            <Input type="text" id="email" w="1000px" fontSize={25} height="50px" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </VStack>

                        <VStack alignItems="flex-start" padding={5}>
                            <Box fontSize={25} paddingBlock={0}>
                                <label className="contactName" htmlFor="message" >Message</label>
                            </Box>
                            <Input fontSize={25} type="text" id="message" w="1000px" height="100px" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </VStack>
                    </form>
                </Box>

                <Box>
                    <button type="submit">Submit</button>
                </Box>

                


            </VStack>

        </FullScreenSection>
    )
}
export default ConactMeSection;