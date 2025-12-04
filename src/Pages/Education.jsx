import React from "react";

const education = [
  {
    degree: "BSC in Engineering",
    institute: "NORTHRRN UNIVERSITY BANGLADESH | NUB",
    year: "2025 - Present",
    details: "Studying Computer Science and Engineering.",
    image: "https://i.ibb.co/kVXfZmpw/Campus-Image.png",
    link: "https://nub.ac.bd/",
  },
  {
    degree: "Diploma in Engineering",
    institute: "BRAHMANBARIYA POLYTECHNIC INSTITUTE | BBPI",
    year: "2024 | Completed",
    details: "Completed my Diploma education with a Computer Science and Technology.",
    image: "https://i.ibb.co/WNqvp5yP/475787058-655704360318836-604595313590966038-n.png",
    link: "https://www.facebook.com/BBPIT",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institute: "BURICHANG MODEL ACADEMY | BMA",
    year: "2017 | Completed",
    details: "Completed my Secondary school education.",
    image: "https://i.ibb.co/whcnYZVN/303606649-585323993281693-3316372704178443699-n-1.png",
    link: "https://bma.edu.bd/",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-300 flex items-center justify-center py-6"
    >
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-3">
          <span className="text-black">
            <i className="fa-solid fa-graduation-cap mr-3"></i>My{" "}
          </span>
          Education
        </h2>

        <p className="text-sm font-semibold text-center mb-6">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        {/* NO SCROLL – Adjusted card height & spacing */}
        <div className="grid grid-cols-1 gap-5">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card lg:card-side bg-gray-200 shadow-lg px-4 lg:py-2 py-4 flex items-center gap-4 lg:gap-8 hover:scale-105 transition-transform"
            >
              <figure className="w-40">
                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={edu.image}
                    alt={edu.institute}
                    className="w-40 h-28 object-cover rounded-md"
                  />
                </a>
              </figure>

              <div className="card-body p-2">
                <h3 className="text-blue-800 text-lg font-bold leading-tight">
                  {edu.degree}
                </h3>

                <a
                  href={edu.link}
                  target="_blank"
                  className="text-gray-700 text-base hover:underline leading-tight"
                >
                  {edu.institute}
                </a>

                <p className="text-green-600 text-base font-semibold">
                  {edu.year}
                </p>

                <p className="text-gray-800 text-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
