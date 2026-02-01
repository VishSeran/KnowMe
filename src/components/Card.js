import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, imgSrc }) => {

    const [mouseOn, setMouseOn] = useState(false);

    const handleClick = () => {
        setMouseOn(true);
    }
    return (
        <Box
            color="dark"
            position="relative"
            transitionProperty="transform"
            transitionDelay="0.5s"
            transitionTimingFunction="ease-in-smooth"
            backgroundColor="white" >
            
            
            <VStack padding={8} textSpacingTrim={10} color= "black">
                <img src= {imgSrc} alt="project image" width = "100px" height="100px" />
                <p fontSize= "16px" fontFamily= "heading" fontWeight= "semibold">{title}</p>
                <p fontSize= "12px" >{description}</p>
            </VStack>
        </Box>
    )
}
export default Card;