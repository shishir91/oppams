import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap justify-center px-60 pt-16 mb-32 container">
        {/* First Section */}
        <div className='flex justify-between'>
          <div className="w-full md:w-1/2 flex justify-start items-center">
            <img src="https://via.placeholder.com/400" alt="Section 1 Image" className="max-w-xs" />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">About Oppams Technology</h2>
              <p>
                At Oppams Technology, we are dedicated to delivering innovative solutions that empower businesses to thrive in the digital world. With a team of highly skilled professionals and a passion for technology, we strive to exceed our clients' expectations by providing cutting-edge software development, digital marketing, and IT consulting services.
              </p>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className='flex justify-between mt-20 mb-20'>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p>
                Our mission is to help businesses harness the power of technology to achieve their goals and stay ahead in today's competitive landscape. We aim to build long-lasting partnerships with our clients, guiding them through every step of their digital transformation journey.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <img src="https://via.placeholder.com/400" alt="Section 2 Image" className="max-w-xs" />
          </div>
        </div>
        {/* Third Section */}
        <div className='flex justify-between'>
          <div className="w-full md:w-1/2 flex justify-start items-center">
            <img src="https://via.placeholder.com/400" alt="Section 3 Image" className="max-w-xs" />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul>
                <li><strong>Expertise:</strong> Our team comprises experienced professionals with a diverse range of skills and expertise in various technologies and industries.</li>
                <li><strong>Innovation:</strong> We are committed to staying at the forefront of technological advancements, continuously exploring new solutions to solve complex business challenges.</li>
                <li><strong>Customer-Centric Approach:</strong> Customer satisfaction is our top priority. We listen to our clients' needs and tailor our solutions to meet their specific requirements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className='flex mt-10 justify-between'>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul>
                <li><strong>Integrity:</strong> Integrity: We conduct business with honesty, transparency, and integrity, building trust with our clients and partners.</li>
                <li><strong>Excellence:</strong>  We strive for excellence in everything we do, setting high standards for quality, performance, and customer service.</li>
                <li><strong>Collaboration:</strong>
                  We believe in the power of collaboration and teamwork, fostering a culture of cooperation and knowledge sharing within our organization and with our clients.</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <img src="https://via.placeholder.com/400" alt="Section 3 Image" className="max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
