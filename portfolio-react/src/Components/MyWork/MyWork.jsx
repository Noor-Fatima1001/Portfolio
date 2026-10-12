import React from 'react';
import project_1 from "../../assets/project_1.png"
import project_2 from "../../assets/project_2.png"
import project_3 from "../../assets/project_3.png"
import project_4 from "../../assets/project_4.png"
import project_5 from "../../assets/project_5.png"
import project_6 from "../../assets/project_6.png"
import project_7 from "../../assets/project_7.png"
import project_8 from "../../assets/project_8.png"
import project_9 from "../../assets/project-9.png"
import {motion} from "framer-motion"


const MyWork = () => {
  return (
    <motion.div 
    
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    
     className='bg-black text-white py-20' id='work'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className='text-4xl font-bold text-center mb-12'>My Latest Work</h1>
  
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        

        <a href="https://rock-paper-scissor11.netlify.app" className="project-link">
        <img src={project_1} className="px-10  rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105"   alt="Rock paper scissor game"/>
        </a>
        
        {/* Project 2 */}
  
        <a href="https://amazon1123.netlify.app/" className="project-link">
        <img src={project_2} className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105' alt="Amazon clone" />
        </a>
        
        {/* Project 3 */}
        <a href="https://tic-tac-toe110.netlify.app/" className="project-link">
        < img src={project_3} className="px-10 rounded-lg mb-4 w-50 h-50 object-cover transform transition-transform duration-300 hover:scale-105" alt="Tic Tac Toe Game" />
        </a>
        
        {/* Project 4 */}
    
        <a href="https://weather-app-react11.netlify.app/" className="project-link">
        <img src={project_4} className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105' alt="Weather App" />
        </a>
        
        {/* Project 5 */}
  
        <a href="https://reactfullstackaxiosapi.netlify.app/" className="project-link">
        <img src={project_5} className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105' alt="React Fullstack App" />
     </a>
         {/* project 6*/}
     <a href="https://restaurant1001.netlify.app"
         className="project-link">
        <img src={project_6}  className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105 '  alt="Restaurant" />
        </a>

         {/* project 7*/}
     <a href="https://noorfatimaportfolio.netlify.app"
         className="project-link">
        <img src={project_7}  className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105 '  alt="Portfolio" />
        </a>

            {/* project 8*/}
     <a href="https://estatereact12.netlify.app"
         className="project-link">
        <img src={project_8}  className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105 '  alt="RealEstate" />
        </a>

            {/* project 9*/}
     <a href="https://todo-list535.netlify.app"
         className="project-link">
        <img src={project_9}  className='px-10 rounded-lg mb-4 w-50 h-50 object-cover  transform transition-transform duration-300 hover:scale-105 '  alt="Todo" />
        </a>

          

      </div>

    </motion.div>
  );
};

export default MyWork;
