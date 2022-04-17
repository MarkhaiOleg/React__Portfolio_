import React from 'react'
import './Services.css'
import '../../App.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react';
import { motion } from 'framer-motion'



const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {
        duration: 1,
        type: 'spring'
    }

    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesone</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1"
                    style={{
                        background: '#ABF1FF94'
                    }}>
                </div>
            </div>

            {/* right side */}

            <div className="cards">

                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        datail={"Figma , Sketch, Photoshop, Abode, Abode xd"}
                    />
                </motion.div>

                {/* second card */}

                <motion.div
                    initial={{ left: '10rem' }}
                    whileInView={{ left: '30rem' }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        datail={"Html , Css, JavaScript, React"}
                    />
                </motion.div>

                {/* 3rd card */}

                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '10rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        datail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>


        </div>
    )
}

export default Services
