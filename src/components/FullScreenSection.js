import { VStack } from "@chakra-ui/react";
import * as React from "react";


const FullScreenSection = ({ children, isDarkBackground, ...boxprops }) => {

    return (
            <VStack 
                backgroundColor={boxprops.backgroundColor}
                color = {isDarkBackground ? "white" : "black"}>

                    <VStack maxWidth= "1280" minHeight= "100vh" h="auto" {...boxprops}>
                        {children}
                    </VStack>

            </VStack>
        )

}
export default FullScreenSection;