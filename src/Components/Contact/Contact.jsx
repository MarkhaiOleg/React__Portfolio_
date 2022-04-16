import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import '../../App.css'
import { themeContext } from '../../Context'



const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_hszpmlj",
            "template_2s3f0ep",
            form.current,
            "9l3V4zW51bHeIr5R1"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-form">

            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contactin me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--orange)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
