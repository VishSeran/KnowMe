import { Box, Heading, VStack, Collapsible, Text, HStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
            borderRadius={15}
            marginBottom={5}

        >


            <VStack padding={0} textSpacingTrim={10} color="black" align="start">

                <Box borderRadius={10} >
                    <img src={imgSrc} alt="project image"  width="100%" height="100%" />
                </Box>
                

                <VStack align= "start" p={5}>
                    <Text fontSize="20px" fontFamily="heading" fontWeight="semibold">{title}</Text>

                    <Text w="100%" textAlign= "justify" lineClamp={showMore ? undefined : 3}>{description}</Text>

                    <HStack w="100%" justify="space-between" >
                        <button
                        size="sm"
                        mt={2}
                        variant="link"
                        onClick={handleShow}
                        transitionDelay="0.5s"
                        transitionTimingFunction="ease-in-out"
                    >
                        <Text fontWeight="semibold">{showMore ? "Show less"  : "Show more"} <FontAwesomeIcon style={{ verticalAlign: "center" }} icon={faArrowRight} size="lg" /> </Text>
                    </button>

                    <button>Github Repo</button>
                    </HStack>
                    

                    
                </VStack>



            </VStack>
        </Box>
    )
}
export default Card;