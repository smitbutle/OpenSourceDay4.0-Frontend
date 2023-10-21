import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";
import styles from './Hero.module.css'
function HeroText() {
  function goRegister() {
    const register = document.getElementById("snapRegister"); // Change 'targetElement' to the actual ID of your target element

    if (register) {
      register.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-0px pt-50px"
      >
        <div className={styles.logo}>
        <img src="./OSD_triangle.png" alt="logo" />
      </div>
      <div className={styles.celeb}>
        <img src="./p0.png" alt="p0" className={styles.p0}/>
        <img src="./p1.svg" alt="p1" className={styles.p1}/>
        <img src="./p2.png" alt="p2" className={styles.p2}/>
      </div>
      {/* <div className={styles.text}>
        <p>Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop.</p>
      </div> */}
      
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className={"mb-30px w-1/2 <lg:w-1/3 <md:w-1/2 text-20px font-bold text-white leading-tight"+ styles.text}
        
      >
        Open Source Day is a celebration of open-source where Walchand Linux Users' Group conducts a free-of-cost workshop.
      </motion.span>
      <div>
        <button className={styles.button} onClick={goRegister}>Register Now</button>
      </div>
    </motion.div>
  );
}

export default HeroText;