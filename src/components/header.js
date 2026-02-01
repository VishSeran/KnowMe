import { Box, HStack } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [

    {

        icon: faEnvelope,
        url: 'mailto: vishwa.sovis@gmail.com',

    },

    {
        icon: faGithub,
        url: "https://github.com/VishSeran"
    },

    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/seran-vishwa-46b4aa212"
    }
];

const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    
};



const Header = () => {
    return (

        <Box
            position="fixed"
            height= "55px"
            top={0}
            right={0}
            left={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration="0.3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            zIndex= "100"
        >

            <Box color="White" maxWidth="1280px" margin="0 auto">

                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center" >

                    <nav>
                        {socials.map((social, index) => (
                            <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={social.icon} size="lg" />
                            </a>
                        ))}
                    </nav>

                    <nav>
                        <HStack spaceX={8} align= "end">
                            <a href = "#projects"  onClick={()=> handleClick("projects")} className="buttonHover">Projects</a>
                            <a href="/#contact-me" onClick={()=> handleClick("contact-me")} className="buttonHover">Contact Me</a>
                        </HStack>
                    </nav>


                </HStack>
            </Box>

        </Box>

    )
}

export default Header;