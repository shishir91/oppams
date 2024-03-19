import React from "react";
import bgImg from "../bgimg.jpeg";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "Empower your business with custom software solutions tailored to your unique requirements. Our team of experienced developers specializes in creating robust, scalable, and user-friendly applications that streamline processes, increase efficiency, and drive innovation.",
    },
    {
      title: "Web Development",
      description:
        "Build a compelling online presence with our professional web development services. From simple static websites to complex e-commerce platforms, we leverage the latest technologies and best practices to deliver high-performance, responsive websites that engage users and drive conversions.",
    },
    {
      title: "Mobile App Development",
      description:
        "Reach your audience on the go with our mobile app development services. Whether you need a native iOS, Android, or cross-platform app, we have the skills and experience to bring your ideas to life. From concept to launch, we'll work closely with you to create intuitive, feature-rich mobile experiences that delight users and drive business growth.",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online visibility and attract more customers with our digital marketing services. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we'll develop a customized strategy to help you reach your target audience, increase brand awareness, and drive traffic to your website.",
    },
    {
      title: "IT Consulting",
      description:
        "Maximize your technology investments and stay ahead of the competition with our expert IT consulting services. Whether you need guidance on IT strategy, infrastructure design, security, or digital transformation, our team of consultants will provide actionable insights and recommendations to help you achieve your business objectives.",
    },
  ];
  return (
    <div className="services">
      <div className="topdiv">
        <div className="text-7xl font-mono	text font-black">Our Services</div>
        {/* <span>hime</span> */}
      </div>
      <div className="bg-gray-100 p-10">
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
