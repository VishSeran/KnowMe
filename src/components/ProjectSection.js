import { Box, Heading} from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";


const projects = [
    {
        title: "Blockchain-Powered Ecosystem for Real Estate Transactions",
        description:
            `Designing a blockchain-powered ecosystem for real estate transactions, Tokenization, Deeds, and Ownership Verification. DeedLink revolutionizes property deed management through blockchain technology, providing a secure, transparent, and efficient platform for real estate transactions.
It integrates smart contracts, microservices, and decentralized storage to create a comprehensive digital property ecosystem.`,
        getImageSrc: () => require("../assets/DeedLink.png"),
        getUrl: "https://github.com/DeedLink"
    },
    {
        title: "Traffic Signal Identifier",
        description:
            `Real-Time Traffic Signal Identification Model – TensorFlow, Python, Keras, OpenCV
Developed a Convolutional Neural Network (CNN) to accurately classify traffic signals into multiple categories in real time. Applied advanced image preprocessing techniques, including grayscale conversion, Gaussian blurring, and edge detection, 
to enhance features and improve model training efficiency and prediction accuracy.`,
        getImageSrc: () => require("../assets/trafic.png"),
        getUrl: "https://github.com/VishSeran/Traffic-Signal-Identifier.git"
    },
    {
        title: "SLSI Vehicle Reservation System",
        description:
            `The SLSI Vehicle Management System is a web-based application designed to 
            automate and streamline the reservation, tracking, and administration of company 
            vehicles by users and administrators. It enables users to securely log in, browse available 
            vehicles, submit reservation requests for specific dates and times, and view or manage their 
            bookings, while the administrative interface supports adding new vehicles, updating vehicle 
            details, approving or rejecting reservations, and organizing vehicle availability efficiently.
            The system reduces manual paperwork, improves operational transparency, and centralizes vehicle 
            data to optimize vehicle utilization and enhance overall resource management.`,

        getImageSrc: () => require("../assets/slsi.PNG"),
        getUrl: "https://github.com/VishSeran/SLSI-Vehicle-Reservation.git"
    },
    {
        title: "Predicting Electrical Energy Output of a Combined Cycle Power Plant",
        description:
            `This project uses machine learning regression techniques to predict the electrical
             energy output (PE) of a Combined Cycle Power Plant based on ambient and exhaust 
             parameters. The dataset includes variables such as ambient temperature, atmospheric 
             pressure, relative humidity, and exhaust vacuum. The goal is to build and evaluate 
             models that accurately forecast the plant’s power output using real-world sensor data.`,
        getImageSrc: () => require("../assets/energy-ai-management-tools.jpeg"),
        getUrl: "https://github.com/VishSeran/ANN-Regression-model-to-predict-the-electrical-energy-output-of-a-Combined-Cycle-Power-Plant.git"
    },
    {
        title: "CNN Fruit Classification Model",
        description:
            `This project implements a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify images of fruits into multiple categories. The model is trained on a labeled dataset of fruit images and demonstrates the full pipeline from data loading and preprocessing to training, evaluation, and visualization.

            `,
        getImageSrc: () => require("../assets/fruits.png"),
        getUrl: "https://github.com/VishSeran/CNN-Fruit-Classification-Model.git"
    },

      {
        title: "E-Commerce Furniture App",
        description:
            `
            This is a project of build of the e-commerce application for android devices. Using flutter and firebase
             as the database and the interfaces of this app looks very professionals 
             gives the user friendly interface 
             for user to engage freely.
            `,
        getImageSrc: () => require("../assets/furniture.jpg"),
        getUrl: "https://github.com/VishSeran/E-Commerce-Furniture-App.git"
    },

    {
        title: "Salary Prediction Model",
        description:
            `This project is a machine learning–based salary prediction model that estimates expected salaries 
            based on different job positions and related features. It was developed using Python with key data 
            science libraries such as Scikit-learn, Pandas, and NumPy for data preprocessing, model training, and evaluation. 
            The workflow includes dataset cleaning, feature selection, model training, and performance tuning to achieve over 95% prediction accuracy. 
            The project demonstrates practical application of supervised learning techniques to solve real-world regression problems and showcases strong 
            skills in data analysis, model optimization, and predictive modeling.
            `,
        getImageSrc: () => require("../assets/salary.png"),
        getUrl: "https://github.com/VishSeran/Salary-Prediction-Model.git"
    },
     {
        title: "Vehicle Management System",
        description:
            `This project is a web-based Vehicle Management System built using the MERN stack 
            (MongoDB, Express.js, React, Node.js) with React and JavaScript for the frontend. 
            It is designed for companies in the automation or industrial sector to efficiently 
            manage and streamline vehicle reservations and related operations through a centralized
             digital platform. The system supports full CRUD functionality for vehicles, reservations,
              and user records, along with core management features that improve tracking, allocation,
               and administrative control. The application focuses on usability, data consistency, and 
               performance, and is currently being further optimized to enhance reliability, scalability, 
               and overall system quality.
            `,
        getImageSrc: () => require("../assets/vehicle management web project.PNG"),
        getUrl: "https://github.com/VishSeran/Vehicle-Management-System.git"
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

            <Box marginTop={5} display="grid" gridTemplateColumns="repeat(3,minmax(0,2fr))"
                gridGap={6}>

                {projects.map((project) => (
                    <Card key={project.title}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.getImageSrc()}
                        url={project.getUrl} />
                ))}

            </Box>



        </FullScreenSection>


    )
}

export default ProjectSection;