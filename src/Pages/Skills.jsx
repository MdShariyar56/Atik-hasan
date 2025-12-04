import React from 'react';

const skillsData = [
  { name: 'Swift', img: "https://i.ibb.co/ksHvHm8c/Group-1321315949-2.png" },
  { name: 'Xcode', img: "https://i.ibb.co/h1Y9jwhL/Group-1321315937.png" },
  { name: 'RevenueCat', img: "https://i.ibb.co/fdHyvyB6/Group-1321315939.png" },
  { name: 'Python', img: "https://i.ibb.co/RXMXsBN/snakes-423066.png" },
  { name: 'Agora', img: "https://i.ibb.co/cMjp8c0/Group-1321315940.png" },
  { name: 'AppStore', img: "https://i.ibb.co/HLJpXbSX/logos-apple-app-store.png" },
  { name: 'C', img: "https://i.ibb.co/JFpyjWPz/Group-1321315944.png" },
  { name: 'C++', img: "https://i.ibb.co/dJspwRtH/Group-1321315943.png" },
  { name: 'JSON', img: "https://i.ibb.co/4RdnFKqJ/Group-1321315945.png" },
  { name: 'Problem Solving', img: "https://i.ibb.co/pBwz4wd7/image-5.png" },
  { name: 'Algorithm', img: "https://i.ibb.co/fdNR1x2f/image-6.png" },
  { name: 'Data Structure', img: "https://i.ibb.co/GvwFsTyB/image-7.png" },
  { name: 'Teaching', img: "https://i.ibb.co/cSqgkwjs/image-8.png" },
  { name: 'Creativity', img: "https://i.ibb.co/WZyVctM/image-9.png" },
  { name: 'Team Work', img: "https://i.ibb.co/Ng14NtnS/image-10.png" },
  { name: 'Figma', img: "https://i.ibb.co/WvL48x4z/image-11.png" },
  { name: 'Canva', img: "https://i.ibb.co/TM1y9bMR/Group-1321315946.png" },
  { name: 'VS Code', img: "https://i.ibb.co/nsZ2dY0n/Group-1321315947.png" },
  { name: 'Firebase', img: "https://i.ibb.co/DPCXJGcB/Group-1321315948.png" },
  { name: 'Github', img: "https://i.ibb.co/C5CtS8fB/image-13.png" },
  { name: 'TestFlight', img: "https://i.ibb.co/rKrFgzjF/image-14.png" },
  { name: 'App Store Connect', img: "https://i.ibb.co/21Y0KPpk/image-15.png" },
  { name: 'iOS', img: "https://i.ibb.co/Z9Cnk2j/media-16060957.png" },
  { name: 'Postman', img: "https://i.ibb.co/BHm2NgNk/skill-icons-postman.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
     className="min-h-screen py-16 bg-[#0E14E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            My Skills & Tools
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-110 bg-[#03052e] border border-gray-200"
            >
              <img 
                src={skill.img} 
                alt={skill.name} 
                className="h-10 w-10 object-contain mb-3" 
              />
              <h3 className="text-sm font-semibold text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
