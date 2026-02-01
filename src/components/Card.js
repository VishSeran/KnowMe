import { Box, Heading, VStack, Collapsible, Text} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            
            >


            <VStack padding={8} textSpacingTrim={10} color="black" align="start">
                <img src={imgSrc} alt="project image" borderRadius = "5" width="100%" height= "100%"/>

                <p fontSize="16px" fontFamily="heading" fontWeight="semibold">{title}</p>

                <Text  w="100%" lineClamp={showMore ? undefined : 3}>{description}</Text>
                
                
                <button
                    size="sm"
                    mt={2}
                    variant="link"
                    onClick={handleShow}
                    transitionDelay = "0.5s"
                    transitionTimingFunction = "ease-in-out"
                >
                   <Text fontWeight= "semibold">{showMore ? "Show less" : "Show more"  } <FontAwesomeIcon style={{ verticalAlign: "center" }} icon={faArrowRight} size="lg"/> </Text> 
                </button>

            </VStack>
        </Box>
    )
}
export default Card;