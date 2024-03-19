import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const OurTeam = () => {
  const team = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      bio: "John is the visionary leader behind Oppams Technology. With over 15 years of experience in the technology industry, he has a proven track record of driving business growth and innovation. John is passionate about leveraging technology to solve complex challenges and empower businesses to succeed in the digital age.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      bio: "As the Chief Technology Officer, Jane leads our talented team of developers and engineers. With a background in computer science and expertise in emerging technologies, she is responsible for driving our technical strategy and ensuring the delivery of high-quality solutions that exceed our clients' expectations.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "David Johnson",
      position: "Head of Design",
      bio: "David is a creative powerhouse with a keen eye for design and aesthetics. With a background in graphic design and user experience, he leads our design team in creating visually stunning and intuitive interfaces that enhance user engagement and satisfaction.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Emily Brown",
      position: "Marketing Manager",
      bio: "Emily is a results-driven marketing professional with a passion for digital strategy and brand development. With expertise in SEO, content marketing, and social media management, she leads our marketing efforts to increase brand awareness, drive traffic, and generate leads.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <center className="font-bold text-5xl">Meet Our Team</center>
        <div className="flex flex-wrap justify-center px-60 pt-16 mb-32 container">
          {team.map((team, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 m-2"
            >
              <div className="flex flex-col items-center pb-10 pt-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={team.image}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {team.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {team.position}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="mr-1 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="ml-1 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
