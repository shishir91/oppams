import React from 'react';

const Career = () => {
    const jobListings = [
        {
            title: 'Frontend Developer',
            location: 'Remote',
            description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces for web applications using modern frontend technologies.',
        },
        {
            title: 'Backend Developer',
            location: 'New York, NY',
            description: 'Join our team as a Backend Developer and contribute to the development of robust and scalable backend systems. Experience with Node.js, Python, or Java is required.',
        },
        {
            title: 'AI Developer',
            location: 'San Francisco, CA',
            description: 'Seeking an experienced AI Developer to work on cutting-edge artificial intelligence projects. Strong background in machine learning and deep learning is required.',
        },
        {
            title: 'AI Developer',
            location: 'San Francisco, CA',
            description: 'Seeking an experienced AI Developer to work on cutting-edge artificial intelligence projects. Strong background in machine learning and deep learning is required.',
        },
        {
            title: 'AI Developer',
            location: 'San Francisco, CA',
            description: 'Seeking an experienced AI Developer to work on cutting-edge artificial intelligence projects. Strong background in machine learning and deep learning is required.',
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">
                            Why Join Our Team?
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            Discover the benefits of building your career with us.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                <div className="mb-4">
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Professional Growth</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        Advance your career with opportunities for skill development and growth within our dynamic team.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                <div className="mb-4">
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Innovative Environment</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        Collaborate with talented individuals in an innovative and supportive environment that fosters creativity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                <div className="mb-4">
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Work-Life Balance</h3>
                                    <p className="mt-1 text-base text-gray-500">
                                        Enjoy a healthy work-life balance with flexible schedules and remote work options.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <a href="#" className="inline-block bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors duration-200">
                                Explore Open Positions
                            </a>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Our Culture
                            </h2>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                                At our company, we believe in creating a supportive and collaborative environment where everyone's voice is heard. Our team is not just a group of individuals; it's a family that works together to achieve our common goals.
                            </p>
                            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                    <div className="mb-4">
                                        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            <span className="font-semibold text-blue-600">Innovation</span>
                                        </h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            We strive to be at the forefront of technology and innovation, always looking for new ways to improve our products and services.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                    <div className="mb-4">
                                        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            <span className="font-semibold text-blue-600">Collaboration</span>
                                        </h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            We believe in the power of teamwork. Our success is built on the collective effort of our team members, who work together to solve problems and achieve our goals.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                    <div className="mb-4">
                                        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            <span className="font-semibold text-blue-600">Growth</span>
                                        </h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            We are committed to the professional development of our team members. We provide opportunities for learning and growth, helping each individual to reach their full potential.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
                                    <div className="mb-4">
                                        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            <span className="font-semibold text-blue-600">Integrity</span>
                                        </h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            We uphold the highest ethical standards in all our actions. We are transparent, honest, and accountable in everything we do.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-xl font-medium leading-6 text-gray-900">
                                    Daily Practices
                                </h3>
                                <p className="mt-4 max-w-2xl text-base text-gray-500 mx-auto">
                                    Our culture is reflected in our daily practices. We hold regular team meetings to discuss progress, challenges, and new ideas. We also encourage open communication, where everyone is encouraged to share their thoughts and ideas. Our workplace is designed to be open and collaborative, with flexible workspaces that promote interaction and teamwork.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="lg:text-center mb-12">
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Join Our Team
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Explore exciting career opportunities with us.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {jobListings.map((job, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">{job.location}</p>
                                <p className="mt-2 text-base text-gray-500">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Career;
