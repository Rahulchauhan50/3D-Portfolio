import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Best_student from '../assets/Best_student.jpeg'
import Nsit from '../assets/Nsit.jpeg'


const Awards = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] justify-between`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Awards.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      <motion.div
    className='bg-black-200 p-10 rounded-3xl xl:w-[60%]  w-full'
  >
    <img className="w-full" src={Best_student} />
   
  </motion.div>
  <motion.div
    className='bg-black-200 p-10 rounded-3xl xl:w-[35%] md:w-full w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
      I received the award for "Student of the Month" for exceptional performance in web and software development, as well as overall excellence. I won this award by solving complex problems.
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> DSDC
          </p>
        </div>

        <img
          src='https://media.licdn.com/dms/image/C5103AQFXEu4schLQ6w/profile-displayphoto-shrink_800_800/0/1581133129980?e=2147483647&v=beta&t=IL1MkHydusDW8nlzhJTIVi9uUReXORB4dIVxflb4A10'
          alt=''
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
      </div>
      <div className={` pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      <motion.div
        className='bg-black-200 p-10 rounded-3xl xl:w-[35%]'>
        <img className="" src={Nsit} />
      </motion.div>
      <motion.div
    className='bg-black-200 p-10 rounded-3xl xl:w-[60%] md:w-full w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
      I was honored with an award by <span className="font-bold underline">Netaji Subhas University of Techonoly</span> for my role as a mentor for the children of Jansharnam NGO during Kirti 2022, an event organized by NSUT. This recognition was a result of my dedication and guidance to the children, showcasing my commitment to their growth and development.
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> Kirti 2022, NSUT
          </p>
        </div>

        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/220px-Netaji_Subhas_University_of_Technology.svg.png'
          alt=''
          className='w-10 h-10 rounded-full object-cover bg-white'
        />
      </div>
    </div>
  </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Awards, "");