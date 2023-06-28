import { useEffect, useState } from "react"
import { motion } from "framer-motion";
export const SkillList = () => {
    const [showDiv, setShowDiv] = useState(false);
    const ItemVarian = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = document.querySelector('.hero-skill');

            if (scrollTop > scrollThreshold.offsetTop) {
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="hero-skill">
            <div className="list-skill">

                {showDiv && <motion.div variants={ItemVarian} initial='initial' animate='animate' transition={{ duration: 0.8, delay: 0.5 }} className="skill-item">
                    <img src="./myskill1.png" alt="" />
                    <p>Saya menguasai bahasa pemrograman dasar seperti, HTML,CSS,Javascript.</p>
                </motion.div>}

                {showDiv && <motion.div variants={ItemVarian} initial='initial' animate='animate' transition={{ duration: 0.8, delay: 0.6 }} className="skill-item">
                    <img src="./myskill2.png" alt="" />
                    <p>Saya juga menguasai framework-framework seperti bootstrap dan react</p>
                </motion.div>}

                {showDiv && <motion.div variants={ItemVarian} initial='initial' animate='animate' transition={{ duration: 0.8, delay: 0.7 }} className="skill-item">
                    <img src="./myskill3.png" alt="" />
                    <p>Selain itu saya juga dapat bekerja secara tim maupun individu</p>
                </motion.div>}

            </div>
        </div>
    )
}