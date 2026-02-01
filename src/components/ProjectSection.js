import { Box, Heading, HStack } from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";


const projects = [
    {
        title: "React Space",
        description:
            "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
        getImageSrc: () => require("../assets/profile.jpg"),
    },
    {
        title: "React Infinite Scroll",
        description:
            "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
        getImageSrc: () => require("../assets/profile.jpg"),
    },
    {
        title: "Photo Gallery",
        description:
            "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        getImageSrc: () => require("../assets/profile.jpg"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../assets/profile.jpg"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../assets/profile.jpg"),
    },
];

const ProjectSection = () => {
    return (
        <FullScreenSection
            p={8}
            isDarkBackground={true}
            alignItems ="flex-start"
            backgroundColor="#14532d"
            spacing = {8}>
            
            <Heading as="h1" id="projects-section">Featured Projects</Heading>
            <Box>
                <HStack>
                 {projects.map((project) => (
                    <Card key={project.title}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.getImageSrc()} />
                ))}
            </HStack>
            </Box>
            
               
        
        </FullScreenSection>


    )
}

export default ProjectSection;