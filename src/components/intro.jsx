import { useEffect, useState } from "react"
import { motion } from "framer-motion"
export const Intro = () => {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = document.querySelector('.hero-intro');
            console.log(scrollThreshold.offsetTop);

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
        <div className="hero-intro">
            <div className="hero-intro-info">
                <h3>Siapa Saya?</h3>
                {showDiv && <motion.img initial={{ x: -100 }} animate={{ x: 0 }} transition={{ type: 'spring', duration: 1, delay: 0.5 }} src="./profile.jpg" alt="" />}
                {showDiv && <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ type: 'spring', duration: 1.5, delay: 0.10 }}>Nama saya Achmad Rezky Aji Nugroho, saya adalah mahasiswa Universitas Dian Nuswantoro Semarang, Jurusan Sistem Informasi, ini adalah portofolio sederhana saya yang saya buat menggunakan framework react untuk mendftar sebagai front-end developer</motion.p>}
            </div>
        </div>
    )
}