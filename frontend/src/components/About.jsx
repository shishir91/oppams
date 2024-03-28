import React from "react";
import photo from "../images/about1.jpg";
import photo1 from "../images/about01.svg";
import photo2 from "../images/about02.svg";
import photo3 from "../images/about03.svg";
import photo4 from "../images/about04.svg";
import Image from "./Image";

const AboutPage = () => {
  const image = {
    photo,
    text: "About Oppams",
    title: "",
    description: "",
  };
  return (
    <div className="bg-gray-100">
      <Image props={image} />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Section */}
          <div className="flex items-center">
            <img
              src={photo1}
              alt="Section 1 Image"
              className="max-w-xs mx-auto md:ml-0"
            />
          </div>
          <div className="flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">
                About Oppams Technology
              </h2>
              <p>
                At Oppams Technology, we are dedicated to delivering innovative
                solutions that empower businesses to thrive in the digital
                world. With a team of highly skilled professionals and a passion
                for technology, we strive to exceed our clients' expectations by
                providing cutting-edge software development, digital marketing,
                and IT consulting services.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p>
                Our mission is to help businesses harness the power of
                technology to achieve their goals and stay ahead in today's
                competitive landscape. We aim to build long-lasting partnerships
                with our clients, guiding them through every step of their
                digital transformation journey.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={photo2}
              alt="Section 2 Image"
              className="max-w-xs mx-auto md:mr-0"
            />
          </div>

          {/* Third Section */}
          <div className="flex items-center">
            <img
              src={photo3}
              alt="Section 3 Image"
              className="max-w-xs mx-auto md:ml-0"
            />
          </div>
          <div className="flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul>
                <li>
                  <strong>Expertise:</strong> Our team comprises experienced
                  professionals with a diverse range of skills and expertise in
                  various technologies and industries.
                </li>
                <li>
                  <strong>Innovation:</strong> We are committed to staying at
                  the forefront of technological advancements, continuously
                  exploring new solutions to solve complex business challenges.
                </li>
                <li>
                  <strong>Customer-Centric Approach:</strong> Customer
                  satisfaction is our top priority. We listen to our clients'
                  needs and tailor our solutions to meet their specific
                  requirements.
                </li>
              </ul>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul>
                <li>
                  <strong>Integrity:</strong> We conduct business with honesty,
                  transparency, and integrity, building trust with our clients
                  and partners.
                </li>
                <li>
                  <strong>Excellence:</strong> We strive for excellence in
                  everything we do, setting high standards for quality,
                  performance, and customer service.
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe in the power of
                  collaboration and teamwork, fostering a culture of cooperation
                  and knowledge sharing within our organization and with our
                  clients.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={photo4}
              alt="Section 4 Image"
              className="max-w-xs mx-auto md:mr-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
