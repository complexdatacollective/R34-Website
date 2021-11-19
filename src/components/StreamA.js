import React from 'react';
import Menu from './Menu';
import { motion } from 'framer-motion';
import Blob1 from './Home-Icons/Blob1.svg';
import '../tailwind.output.css';

function StreamA() {
    const fadeLeft = {
        start: { opacity: 0, x: 600 },
        end: { opacity: 1, x: 0 },
      };
    
    return(
        <div className='flex-col bg-gray-200 p-8 h-screen'>
            <Menu />
            <motion.h1 className='text-6xl p-8 pl-12'
            variants={fadeLeft}
            initial="start"
            animate="end"
            transition={{ duration: 1 }}> 
                Data Quality and Utilization
            </motion.h1>
            <div className='flex pt-12 w-screen'>
                <div className='p-12'>
                    <motion.object type='image/svg+xml' 
                    data={Blob1} className='transform scale-100'
                    />
                </div>
                <div className='w-1/3 p-12'>
                    <motion.p className='pt-3 text-lg'
                    variants={fadeLeft}
                    initial="start"
                    animate="end"
                    transition={{ duration: 1 }}>
                    DIS aim to obtain the fullest identifying 
                    information about sexual partners, but there 
                    are no standard protocols which guide partner 
                    elicitation – nor are there standard forms for 
                    recording data.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

export default StreamA;