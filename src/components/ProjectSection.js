import { Box, Heading, HStack } from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";


const projects = [
    {
        title: "Blockchain-Powered Ecosystem for Real Estate Transactions",
        description:
            `Designing a blockchain-powered ecosystem for real estate transactions, Tokenization, Deeds, and Ownership Verification. DeedLink revolutionizes property deed management through blockchain technology, providing a secure, transparent, and efficient platform for real estate transactions.
It integrates smart contracts, microservices, and decentralized storage to create a comprehensive digital property ecosystem.`,
        getImageSrc: () => require("../assets/DeedLink.png"),
    },
    {
        title: "Traffic Signal Identifier",
        description:
            `Real-Time Traffic Signal Identification Model – TensorFlow, Python, Keras, OpenCV
Developed a Convolutional Neural Network (CNN) to accurately classify traffic signals into multiple categories in real time. Applied advanced image preprocessing techniques, including grayscale conversion, Gaussian blurring, and edge detection, 
to enhance features and improve model training efficiency and prediction accuracy.`,
        getImageSrc: () => require("../assets/trafic.jpg"),
    },
    {
        title: "Photo Gallery",
        description:
            "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        getImageSrc: () => require("../assets/DeedLink.png"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../assets/DeedLink.png"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../assets/DeedLink.png"),
    },
];

const ProjectSection = () => {
    return (
        <FullScreenSection
            p={8}
            isDarkBackground={true}
            alignItems="flex-start"
            backgroundColor="#14532d"
            h="auto"
        >

            <Heading as="h1" id="projects-section" fontSize={30} fontFamily="ui-monospace" letterSpacing="5px">Featured Projects</Heading>

            <Box marginTop={1} display="grid" gridTemplateColumns="repeat(2,minmax(0,2fr))"
                gridGap={6}>

                {projects.map((project) => (
                    <Card key={project.title}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.getImageSrc()} />
                ))}

            </Box>



        </FullScreenSection>


    )
}

export default ProjectSection;