const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 flex flex-col items-center bg-cover bg-center transition-all duration-700 bg-gradient-to-b 
                  from-[#FFFFFF]  
                  to-[#81BFF1]"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4
                     bg-gradient-to-r from-[#010101] via-gray-700 to-[#F96E01] 
                     bg-clip-text text-transparent text-center">
        About Me
      </h2>

      <p className="text-lg sm:text-xl font-semibold mb-10 text-gray-700 text-center">
        User Interface, User Experience, and Video Editing
      </p>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 items-center lg:items-start">

        {/* Profile Image */}
        <img
          src="https://i.ibb.co/fdd9w1YP/render-21.png"
          alt="profile"
          className="rounded-lg w-60 sm:w-72 lg:w-96 mx-auto shadow-lg"
        />

        {/* Text Content */}
        <div className="flex-1 mt-6 lg:mt-0">
          <p className="text-black text-lg leading-relaxed">
            I am a passionate iOS Developer with over 1.7 years of professional experience,
            backed by a strong foundation in problem-solving and competitive programming.
            During my time at Polytechnic, I actively engaged in online coding platforms,
            solving 600+ problems and sharpening my skills.

            <br /><br />
            Currently, I am working at ThirdWeb Solution, contributing to live projects
            while constantly expanding my expertise in iOS development. I’ve developed
            several personal iOS projects using Swift, with a growing focus on writing
            clean, maintainable, and scalable code.

            <br /><br />
            I am deeply committed to knowledge-sharing and have been mentoring juniors
            through our BBPI Programmers Club (BPC), helping them get started with
            programming, solve problems online, and prepare for competitive programming
            contests.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
