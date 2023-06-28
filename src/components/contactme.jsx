
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const ContactMe = () => {
    const [showMedsos, setShowMedsos] = useState(false);

    const contactVarian = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
            delay: 0.3
        },
        hover: {
            scale: 1.1,
            backgroundColor: '#190f5c',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
        }
    }

    const ItemVarian = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0,
        },
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollMedsos = document.querySelector('.mymedsos');

            if (scrollTop > scrollMedsos.offsetTop) {
                setShowMedsos(true);
            } else {
                setShowMedsos(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className="greeting">
                <h1>Terima Kasih</h1>
            </div>
            <div className="mymedsos">
                <div className="mymedsos-info">
                    <h1>Sosial Media</h1>
                    {showMedsos && <motion.p variants={contactVarian} initial='initial' animate='animate' transition='transition' >Anda dapat mencari tentang saya via akun-akun media saya, jika anda tertarik</motion.p>}
                    {showMedsos && <motion.ul variants={contactVarian} initial='initial' animate='animate' transition='transition'>
                        <motion.li variants={ItemVarian} initial='initial' animate='animate' transition={{ delay: 0.5 }}><a href="https://twitter.com/AchmadRezk89958?t=_tCBfEorlk9OHOmm5rhKeQ&s=09"><motion.img whileHover={{ scale: 1.1, transition: { duration: 0.3, repeat: 10 } }} src="./twittericon.svg" alt="" /></a></motion.li>
                        <motion.li variants={ItemVarian} initial='initial' animate='animate' transition={{ delay: 0.6 }}><a href="https://instagram.com/aji_nocks?igshid?=MzNINGNkZWQ4Mg=="><motion.img whileHover={{ scale: 1.1, transition: { duration: 0.3, repeat: 10 } }} src="./instagramicon.svg" alt="" /></a></motion.li>
                        <motion.li variants={ItemVarian} initial='initial' animate='animate' transition={{ delay: 0.7 }}><a href="https://www.facebook.com/rezkynug.nug"><motion.img whileHover={{ scale: 1.1, transition: { duration: 0.3, repeat: 10 } }} src="./facebookicon.svg" alt="" /></a></motion.li>
                    </motion.ul>}


                </div>
            </div>
            <div className="contact-me">
                <h1>Anda Tertarik?</h1>
                <p>Selain via Sosial anda juga dapat menghubungi saya via What's Up saya</p>
                {showMedsos && <motion.button onClick={event => window.location.href = 'https://wa.me/6281325817289'} variants={contactVarian} whileHover='hover'>Contact Me</motion.button>}

            </div>
        </div>
    )
}