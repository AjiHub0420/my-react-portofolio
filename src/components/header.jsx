import { motion } from "framer-motion"

export const Header = () => {
    const headerVarian = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut",
                duration: 1.7
            }
        },
        animate: {
            opacity: 0,
            x: -100
        },

    }
    const navVarian = {
        visible: {
            opacity: 1,
            y: 0,
        },
        animate: {
            opacity: 0,
            y: 100
        }
    }
    const itemVarian = {
        visible: {
            opacity: 1,
            y: 0
        },
        animate: {
            opacity: 0,
            y: 100,
        },
    }

    const btnVariant = {
        hover: {
            scale: 1.1,
            color: '#190f5c',
            textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
        }
    }

    const introNav = (event) => {
        event.preventDefault();
        const targetDiv = document.querySelector('.hero-intro-info');
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }

    const skillNav = (event) => {
        event.preventDefault();
        const targetDiv = document.querySelector('.list-skill');
        targetDiv.scrollIntoView();
    }

    const contactNav = (event) => {
        event.preventDefault();
        const targetDiv = document.querySelector('.mymedsos-info');
        targetDiv.scrollIntoView();
    }



    return (
        <div className="header">
            <div className="header-info">
                <nav>
                    <motion.ul variants={navVarian} initial="animate" animate="visible">
                        <motion.li variants={itemVarian} transition={{ delay: 1.5 }}><a href="#"><img src="./Shapes.png" alt="" /></a></motion.li>
                        <motion.li variants={itemVarian} transition={{ delay: 1.6 }}><a onClick={introNav} href="#"><motion.span variants={btnVariant} whileHover='hover' >Intro</motion.span></a></motion.li>
                        <motion.li variants={itemVarian} transition={{ delay: 1.7 }}><a onClick={skillNav} href="#"><motion.span variants={btnVariant} whileHover='hover' >Skills</motion.span></a></motion.li>
                        <motion.li variants={itemVarian} transition={{ delay: 1.8 }}><a onClick={contactNav} href="#"><motion.span variants={btnVariant} whileHover='hover' >Contact</motion.span></a></motion.li>

                    </motion.ul>
                </nav>
                <motion.h1
                    variants={headerVarian} initial="animate" animate="visible">ACHMAD REZKY AJI NUGROHO</motion.h1>
            </div>
        </div>
    )
}

