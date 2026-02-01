import { Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ConactMeSection = () => {


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
                        <fieldset>
                            <label>Name</label>
                        </fieldset>
                    </form>
                </Box>
            </VStack>

        </FullScreenSection>
    )
}
export default ConactMeSection;