import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import heroSvg from '../assets/herobg.png';

const Hero = () => {
  return (
    <>
    <section style={{backgroundImage: `url(${heroSvg })`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: "center"}} className="relative w-full mx-auto h-[120vh]">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">

          <div className="w-5 h-5 rounded-full bg-[#915eff] "/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>

        </div>
        <div>
          <h1 className={`${styles.heroSubText} text-white`}>Hi I'm <span style={{textShadow: "rgb(255, 255, 255) 0px 0px 2px, rgb(77, 219, 255) 0px 0px 5px, rgb(77, 213, 255) 0px 0px 10px, rgb(77, 213, 255) 0px 0px 100px, rgb(77, 213, 255) 0px 0px 45px, rgb(77, 213, 255) 0px 0px 1px, rgb(77, 213, 255) 0px 0px 100px",color: "ghostwhite"}} className="text-[#915eff]">Rahul</span></h1>
          <p style={{textShadow: "rgb(255, 255, 255) 0px 0px 2px, rgb(255, 77, 166) 0px 0px 5px, rgb(255, 77, 166) 0px 0px 10px, rgb(255, 77, 166) 0px 0px 100px, rgb(255, 77, 166) 0px 0px 45px, rgb(255, 77, 166) 0px 0px 1px, rgb(255, 77, 166) 0px 0px 100px",color: "ghostwhite"}} className={`${styles.heroSubText} mt-2 text-white-100`}>
            MERN stack developer 
          </p>
        </div>
      </div>
        {/* <ComputersCanvas/> */}
        <div className="absolute bottom-0 h-[50vh] w-full flex justify-center items-center bg-gradient-to-t from-primary to-[#11028600]">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
              <motion.div 
              animate={{y:[0,24,0]}} transition={{duration:1.5,repeat: Infinity,repeatType:'loop'}} 
              className="w-3 h-3 rounded-full bg-secondary mb-1"/>
            </div>
          </a>

        </div>
    </section>
   </>
  )
}

export default Hero