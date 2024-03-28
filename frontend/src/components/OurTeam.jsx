import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import photo from "../images/team.jpg";
import Image from "./Image";

const OurTeam = () => {
  const image = {
    photo,
    text: "Our Team",
    title: "",
    description: "",
  };
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
    {
      name: "Michael Johnson",
      position: "Lead Developer",
      bio: "Michael is an experienced software engineer with a focus on full-stack web development. He is dedicated to delivering high-quality code and innovative solutions to meet our clients' needs.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Jessica Adams",
      position: "UI/UX Designer",
      bio: "Jessica is a talented designer with a passion for creating beautiful and user-friendly interfaces. She combines creativity with user research to design engaging experiences that delight our clients and their users.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Image props={image} />

      <div className="container mx-auto py-10">
        <center className="font-bold text-5xl mb-8">Meet Our Team</center>
        <p className="text-xl text-center text-gray-600 mb-12">
          At Oppams Technology, we believe in assembling a diverse and talented
          team of individuals who share our passion for innovation and
          excellence. Meet the minds behind our success.
        </p>
        <div className="flex flex-wrap justify-center px-8 mb-32">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white rounded-lg shadow-2xl m-2"
            >
              <div className="flex flex-col items-center pb-6 pt-6">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={member.image}
                  alt={member.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {member.name}
                </h5>
                <span className="text-sm text-gray-600">{member.position}</span>
                <p className="text-sm text-gray-700 mt-2 px-6">{member.bio}</p>
                <div className="flex mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full hover:bg-orange-700"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg p-8 b-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Values</h2>
          <p className="text-lg text-gray-700">
            At Oppams Technology, we are committed to excellence in everything
            we do. We prioritize integrity, innovation, and customer
            satisfaction above all else. Our team thrives on collaboration,
            diversity, and continuous improvement, ensuring that we deliver
            cutting-edge solutions and unparalleled service to our clients. With
            a focus on creativity, professionalism, and ethical conduct, we
            strive to make a positive impact on the world through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
