import React from 'react';
import Menu from './Menu';
import '../index.css';


function Home() {
    return(
        <div className='flex bg-gray-400'>
            <Menu />
            <h1> 
                Partner Services Needs Assessment
            </h1>
            <div>
                <div>
                    <h2>Project Summary</h2>
                    <p>
                    This NIH-funded project aims to 
                    characterize the needs of health 
                    departments conducting Partner 
                    Services through a national needs assessment, followed by a 
                    reconfiguration of our tool informed by these findings.
                    </p>
                    <p>
                    In 2021, we conducted 15 
                    interviews across 8 public health 
                    departments with Partner Services Staff, IT Staff, Program Directors, and 
                    Informatics Specialists. Explore the key findings from these interviews by 
                    clicking on a topic.
                    </p>
                </div>
                
                <div>
                    Section Selector
                </div>
            </div>
            
        </div>
    );
}

export default Home;