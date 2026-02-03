import { useState } from "react";
import "./ContactMeSection.css";


const ContactMeSection = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [message, setMessage] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        alert('form submitted!');
    }

    return (
        <div className="contact-box" id="contact-me-section">
            <div>
                <h1> Contact Me</h1>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-element">
                    <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <label> Name</label>
                </div>

                <div className="form-element">
                    <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label> Email</label>
                </div>

                <div className="form-element">
                    <select required value={enquiry} onChange={(e) => setEnquiry(e.target.value)}>
                        <option value="" disabled>Select enquiry</option>
                        <option value="Freelance project proposal" >Freelance project proposal</option>
                        <option value="Offer job position" >Offer job position</option>
                        <option value="Review" >Review</option>
                        <option value="Other" >Other</option>

                    </select>
                    <label className="select-label"> Type of Enquiry</label>
                </div>

                <div className="form-element">
                    <textarea type="text" id="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
                    <label className="text-label"> Message</label>
                </div>

                <button type="submit"> Submit </button>


            </form>


        </div>


    )
}

export default ContactMeSection;