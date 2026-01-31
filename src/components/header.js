import { Box, HStack } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const socials = [

    {

        icon: faEnvelope,
        url: 'mailto: hello@example.com',

    },

    {
        icon: faGithub,
        url: "https://github.com/VishSeran"
    },

    {
        icon: faLinkedin,
        url: "www.linkedin.com/in/seran-vishwa-46b4aa212"
    }
]



const Header = () => {
    return (
        
        <Box
            position="fixed"
            top={0}
            right={0}
            left={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration="0.3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            
            <Box color="White" maxWidth="1280px" margin="5 auto">
                
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center" >

                    <nav>
                        {socials.map((social, index)=> (
                            <a href= {social.url} key={index} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={social.icon} size="lg" />
                            </a>
                        ))}
                    </nav>

                </HStack>
            </Box>

        </Box>

    )
}

export default Header;