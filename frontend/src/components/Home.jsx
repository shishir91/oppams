import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaRocket, FaUserFriends } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import Slide1 from "../images/building1.jpg";
import Slide2 from "../images/building2.jpg";
import Slide3 from "../images/building3.jpg";

const HomePage = () => {
  const slides = [
    {
      image: Slide1,
      text: "Oppams Technology",
      title: "",
      description: "Empowering businesses with innovative solutions",
    },
    {
      image: Slide2,
      text: "Oppams Technology",
      title: "",
      description: "Empowering businesses with innovative solutions",
    },
    {
      image: Slide3,
      text: "Oppams Technology",
      title: "",
      description: "Empowering businesses with innovative solutions",
    },
  ];
  const features = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-6xl text-blue-500" />,
      title: "Cutting-Edge Technologies",
      description:
        "We harness the latest technologies to deliver innovative solutions tailored to your business needs. Our team stays updated with the latest trends and technologies to ensure that your projects are built using the most advanced tools available.",
    },
    {
      id: 2,
      icon: <FaRocket className="text-6xl text-blue-500" />,
      title: "Rapid Development",
      description:
        "Our agile development process ensures swift delivery of high-quality products and services. With our rapid development approach, we prioritize iterative feedback, allowing us to quickly adapt to changes and deliver solutions on time and within budget.",
    },
    {
      id: 3,
      icon: <FaUserFriends className="text-6xl text-blue-500" />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding your unique requirements and providing personalized solutions. Our customer-centric approach ensures that we collaborate closely with you throughout the development process, keeping you involved and informed every step of the way.",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gray-100">
      <ImageSlider props={slides} />
      <div className="bg-white" id="about">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600 uppercase tracking-wide animate-pulse">
              Welcome to OPPAMS Technologies
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Innovative Solutions, Tailored for You
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              At OPPAMS Technologies, we are dedicated to providing cutting-edge
              technological solutions that drive your business forward.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.id} className="relative" data-aos="fade-up">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Explore our areas of expertise and how we can help your business
              succeed.
            </p>
          </div>

          {/* Add expertise sections here */}
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Web Development
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We create modern, responsive, and user-friendly websites
                  tailored to your business needs, ensuring a seamless online
                  experience for your customers.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Mobile App Development
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We specialize in building high-performance, intuitive, and
                  engaging mobile applications for iOS and Android platforms,
                  ensuring a seamless user experience across various devices.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Cloud Services
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our cloud experts help you leverage the power of cloud
                  computing, providing scalable, secure, and cost-effective
                  solutions to meet your business requirements.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Data Analytics
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our data analytics experts help you unlock the power of your
                  data, providing valuable insights and actionable intelligence
                  to drive informed decision-making and business growth.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Machine Learning
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our machine learning experts leverage advanced algorithms and
                  techniques to build intelligent systems that can learn from
                  data, enabling automated decision-making and predictive
                  analytics.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Artificial Intelligence
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our AI experts leverage cutting-edge technologies to develop
                  intelligent systems capable of performing complex tasks,
                  enabling automation, optimization, and intelligent
                  decision-making.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Cybersecurity
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our cybersecurity experts ensure that your digital assets are
                  protected from potential threats and vulnerabilities,
                  providing robust security solutions to safeguard your critical
                  data and infrastructure.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    DevOps and Automation
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our DevOps experts help streamline your software development
                  and deployment processes, ensuring efficient collaboration,
                  continuous integration, and automated delivery pipelines.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Portfolio
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See some of our recent projects and success stories.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    E-commerce Website
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Revolutionize your online shopping experience with our sleek
                    e-commerce platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Mobile Banking App
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Access your finances on the go with our secure and
                    user-friendly mobile banking application.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Cloud Migration
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Seamlessly transition your infrastructure to the cloud for
                    improved scalability and efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Data Analytics Dashboard
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Visualize and analyze your data with our intuitive and
                    customizable analytics dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    AI-Powered Chatbot
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Enhance customer engagement and support with our intelligent
                    chatbot solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Cybersecurity Assessment
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Protect your organization from cyber threats with our
                    comprehensive cybersecurity assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hear what our clients have to say about working with us.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">- John Doe</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">- Jane Smith</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">- Emily Johnson</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">- Michael Brown</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    - Samantha Miller
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="animate-slide-from-right">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-lg font-medium text-gray-900">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in quam vel lectus malesuada convallis. Nullam non
                    enim sit amet odio volutpat gravida sed non neque."
                  </p>
                  <p className="mt-2 text-sm text-gray-500">- David Wilson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
