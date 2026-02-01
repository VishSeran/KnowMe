import { Box, Heading, Text, VStack, Collapsible } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, imgSrc }) => {

    const [mouseOn, setMouseOn] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setMouseOn(true);
    }

    const handleShow = () => {
        setShowMore(!showMore);
    }
    return (
        <Box
            color="dark"
            position="relative"
            transitionProperty="transform"
            transitionDelay="0.5s"
            transitionTimingFunction="ease-in-smooth"
            backgroundColor="white"
            borderRadius={10}
            marginBottom={5}
            maxHeight="">


            <VStack padding={8} textSpacingTrim={10} color="black">
                <img src={imgSrc} alt="project image" width="100px" height="100px" />
                <p fontSize="16px" fontFamily="heading" fontWeight="semibold">{title}</p>
                <Text fontSize= "18px" noOf>{description}</Text>
                
                
                <button
                    size="sm"
                    mt={2}
                    variant="link"
                    onClick={handleShow}
                >
                    {showMore ? "Show less" : "Show more"}
                </button>

            </VStack>
        </Box>
    )
}
export default Card;