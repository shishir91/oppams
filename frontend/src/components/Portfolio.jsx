import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Design",
      date: "January 2024",
      client: "ABC Company",
      image: "https://via.placeholder.com/500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia euismod magna, sit amet commodo ligula vestibulum at.",
    },
    {
      title: "Mobile App Development",
      category: "Mobile Apps",
      date: "February 2024",
      client: "XYZ Corporation",
      image: "https://via.placeholder.com/500",
      description:
        "Sed tempor felis in justo pellentesque, id cursus mi hendrerit. Nam eget fringilla velit.",
    },
    {
      title: "Brand Identity Redesign",
      category: "Graphic Design",
      date: "March 2024",
      client: "Acme Co.",
      image: "https://via.placeholder.com/500",
      description:
        "Vivamus vitae nisl et dui lacinia feugiat. In hac habitasse platea dictumst.",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      date: "April 2024",
      client: "123 Enterprises",
      image: "https://via.placeholder.com/500",
      description:
        "Fusce consectetur odio in tempus aliquam. Integer non urna vel nibh vulputate tristique.",
    },
    {
      title: "Content Management System",
      category: "Software Development",
      date: "May 2024",
      client: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/500",
      description:
        "Duis eget orci id elit efficitur sollicitudin. Phasellus eget posuere turpis, at accumsan sem.",
    },
    {
      title: "Product Photography",
      category: "Photography",
      date: "June 2024",
      client: "Fashion Trends Inc.",
      image: "https://via.placeholder.com/500",
      description:
        "Pellentesque scelerisque justo a nulla tincidunt commodo. Ut mattis posuere neque, at eleifend nisi efficitur vitae.",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
        {/* Filters */}
        <div className="mb-8 flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-4">
            All
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-4">
            Web Design
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-4">
            Mobile Apps
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
            Graphic Design
          </button>
        </div>
        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt="Project 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                {/* Project details */}
                <div className="mt-4">
                  <p>
                    <strong>Category:</strong> {project.category}
                  </p>
                  <p>
                    <strong>Date:</strong> {project.date}
                  </p>
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
