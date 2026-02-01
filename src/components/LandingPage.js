import { VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection"
import profile from "../assets/profile.jpg"

const greeting = "Hello, I am Vishwa!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React";
//const profile = "src\assets\profile2.jpg" 

export const LandingPage =()=>(

    <FullScreenSection 
    justifyContent = "center"
    alignItems ="center"
    isDarkBackground={true}
    backgroundColor="#2A4365">

        <VStack fontFamily= "sans-serif" fontSize={20}>
            <img className="profileImg" src= {profile}  alt="profile"/>
            <p>{greeting}</p>
        </VStack>

        
        <VStack alignItems= "center" fontFamily= "heading" fontSize= "60px" fontWeight= "bold">
            <p>{bio1}</p>
            <p>{bio2}</p>
        </VStack>
            
        


    </FullScreenSection>
)