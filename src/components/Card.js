import { Box, Heading, VStack, Collapsible, Text, HStack, Button, Link } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Image } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection";

const Card = ({ title, description, imgSrc, url }) => {

    const [mouseOn, setMouseOn] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setMouseOn(true);
    }
    const handleShow = () => {
        setShowMore(!showMore);
    }

    return (
            <Box className="card"
            color="dark"
            transitionProperty="transform"
            transitionDelay="0.5s"
            transitionTimingFunction="ease-in-smooth"
            backgroundColor="white"
            borderRadius={15}
            marginBottom={5}
            bgSize="cover"
            maxHeight= "auto"
        >
            <VStack padding={0} textSpacingTrim={10} color="black" align="start">
                <Box >
                    <Image src= {imgSrc} fit= "cover" width="400px" height="250px" alt="project image" borderRadius= {15}/>

                </Box>

                <VStack align="start" p={5}>
                    <Text fontSize="20px" fontFamily="heading" fontWeight="semibold">{title}</Text>
                    <Text w="100%" textAlign="justify" lineClamp={showMore ? undefined : 3}>{description}</Text>
                    <HStack w="100%" justify="space-between" >
                        {
                            description.length > 300 && (
                        <button
                            size="sm"
                            mt={2}
                            variant="link"
                            onClick={handleShow}
                            transitionDelay="0.5s"
                            transitionTimingFunction="ease-in-out"
                        >
                            <Text fontWeight="semibold">{showMore ? "Show less" : "Show more"} <FontAwesomeIcon style={{ verticalAlign: "center" }} icon={faArrowRight} size="lg" /> </Text>
                            </button>
                            )
                        }

                        <Link href={url} backgroundColor="#5670B0" padding={2} borderRadius={10} color="white" _hover={{bg:"#6c8cdc"}}>GitHub</Link>
        
                    </HStack>
                </VStack>
            </VStack>
        </Box>
        
    )
}
export default Card;