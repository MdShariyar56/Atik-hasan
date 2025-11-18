import { IoLogoInstagram } from 'react-icons/io';
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import LotteAnimation from "../assets/lotte.json"
import Lottie from 'lottie-react';



const Home = () => {
   
    

    return (
        <section
            id="home"
            className="min-h-screen py-20 p-4 flex flex-col items-center bg-cover bg-center transition-all duration-700  bg-gradient-to-b 
                  from-[#FFFFFF]  
                  to-[#81BFF1]"
           
        >
            <div className="flex flex-col md:flex-row md:space-x-6 items-center max-w-6xl w-full px-4 mt-10">
                <div className="flex-1 lg:px-4 text-center md:text-left mt-20">
                    <h2 className="text-1xl md:text-2xl text-gray-600 font-bold md:py-1">
                        Hey! I'm 
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-semibold py-1 text-black">
                        Atik Hasan
                    </h2>
                          <h2 className="text-2xl md:text-6xl font-semibold py-2 
                                 bg-gradient-to-r from-[#010101] via-[#F96E01] to-[#F96E01] 
                                bg-clip-text text-transparent">
                                iOS Developer
                </h2>

                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <a 
                            href="#"
                            className="text-xl p-2 rounded-full bg-[#F96E01] hover:bg-gray-100 hover:text-pink-600 transition-all duration-300 cursor-pointer"
                        >
                            <IoLogoInstagram />
                        </a>

                        <a 
                            href="#"
                            className="text-xl p-2 rounded-full bg-[#F96E01] hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a 
                            href="#"
                            className="text-xl p-2 rounded-full bg-[#F96E01] hover:bg-gray-100 hover:text-sky-600 transition-all duration-300 cursor-pointer"
                        >
                            <FaBehance />
                        </a>

                        <a 
                            href="#"
                            className="text-xl p-2 rounded-full bg-[#F96E01] hover:bg-gray-100 hover:text-black transition-all duration-300 cursor-pointer"
                        >
                            <FaGithub />
                        </a>
                    </div>


                    {/* Buttons */}
                    <div className="flex flex-nowrap justify-center lg:justify-start gap-3 mt-5">
                        <a href="/assets/CV%20Resume-jkkK23EI.pdf" download="resume.pdf">
                            <button className="btn mt-5 rounded-full text-lg px-6 py-3 sm:px-4 sm:py-4 border-none bg-[#F96E01] hover:bg-blue-600 hover:text-white whitespace-nowrap">
                                Download Resume
                            </button>
                        </a>

                        <a href="/assets/CV%20Resume-jkkK23EI.pdf" download="resume.pdf">
                            <button className="btn mt-5 rounded-full text-lg px-6 py-3 sm:px-4 sm:py-4 border-none bg-[#F96E01] hover:bg-blue-600 hover:text-white whitespace-nowrap">
                                Portfolio
                            </button>
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 mt-8 md:mt-5 flex justify-center md:justify-end">
                    <div className="flex justify-center items-center h-full">
                        <Lottie animationData={LotteAnimation} loop={true} />
                    </div>

                </div>
            </div>

        
            
        </section>




    );
};

export default Home;
