import React from 'react';
import Menu from './Menu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Blob1 from './Home-Icons/Blob1.svg';
import Blob2 from './Home-Icons/Blob2.svg';
import Blob3 from './Home-Icons/Blob3.svg';
import Blob4 from './Home-Icons/Blob4.svg';
import '../tailwind.output.css';


function Home() {
    return(
        <div className='flex-col bg-gray-200 p-8 h-screen'>
            <Menu />
            <motion.h1 className='text-7xl p-8 pl-12 ml-20' 
            whileTap={{ scale: 0.95 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}> 
                Partner Services Needs Assessment
            </motion.h1>
            <div className='flex pt-12 pl-12 ml-20'>
                <div className='flex-col justify-center w-1/3'>
                    <h2 className='text-3xl'>Project Summary</h2>
                    <p className='pt-3 text-lg'>
                    This NIH-funded project aims to 
                    characterize the needs of health 
                    departments conducting Partner 
                    Services through a national needs assessment, followed by a 
                    reconfiguration of our tool informed by these findings.
                    </p>
                    <p className='pt-3 text-lg'>
                    In 2021, we conducted 15 
                    interviews across 8 public health 
                    departments with Partner Services Staff, IT Staff, Program Directors, and 
                    Informatics Specialists. Explore the key findings from these interviews by 
                    clicking on a topic.
                    </p>
                </div>
                
                <div className='grid grid-cols-2 ml-40 mb-10 border-4'>
                    <Link to='/StreamA'>
                        <motion.img src={Blob1} alt='Stream A'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}/>
                    </Link>
                    
                    <motion.img src={Blob2} alt='Stream B'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}/>
                    <motion.img src={Blob3} alt='Stream C'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}/>
                    <motion.img src={Blob4} alt='Stream D'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}/>
                </div>
            </div>
            
            
        </div>
    );
}

export default Home;