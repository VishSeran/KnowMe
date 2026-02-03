import { useState } from "react";
import "./ContactMeSection.css";

const ContactMeSection = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [message, setMessage] = useState("");

    const enquiryOptions = [
        'Freelance project proposal',
        'Offer job position',
        'Review',
        'Other'
    ];

    return (
        <div className="contact-box" id="contact-me-section">
            <div>
                <h1> Contact Me</h1>
            </div>

            <form className="form">
                <div className="form-element">
                    <input type="text" id="name" required  value={name} onChange={(e) => setName(e.target.value)}/>
                    <label> Name</label>
                </div>

                <div className="form-element">
                    <input type="text" id="email" required  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label> Email</label>
                </div>

                <div className="form-element">
                    <select  required value={enquiry} onChange={(e) =>setEnquiry(e.target.value) }>
                        <option value="" disabled>Select enquiry</option>
                        <option value="Freelance project proposal" >Freelance project proposal</option>
                        <option value="Offer job position" >Offer job position</option>
                        <option value="Review" >Review</option>
                        <option value="Other" >Other</option>

                    </select>
                    <label className="select label"> Type of Enquiry</label>
                </div>



               
            </form>


        </div>


    )
}

export default ContactMeSection;