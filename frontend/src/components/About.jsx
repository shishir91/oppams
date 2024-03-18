import React from 'react'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      description: 'Team Member 1 description goes here. This might include their role, skills, experience, etc.',
      imageUrl: 'https://placehold.co/500x500/006bcc/ffffff?text=Team%20Member%201',
    },
    {
      id: 2,
      name: 'Team Member 2',
      description: 'Team Member 2 description goes here. This might include their role, skills, experience, etc.',
      imageUrl: 'https://placehold.co/500x500/006bcc/ffffff?text=Team%20Member%202',
    },
    // Add more team members as needed
  ]

  return (
    <div>
      <div className="mx-auto my-5 container p-5">
        <div className="w-full my-6 text-black">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <p className="mt-2 text-sm">
            OPPAMS Technologies is a leading provider of cutting-edge technologies and services, offering scalable
            solutions for businesses of all sizes. We built our solutions by closely listening to our potential clientele
            and understanding their expectations with our product.
          </p>
          <img
            src="https://placehold.co/550x300/006bcc/ffffff?text=About%20Us%20Image"
            alt="About Us"
            className="content-center mt-4 rounded-md"
          />
        </div>
        <div className="w-full my-6 text-black">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="mt-4 flex flex-wrap">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <div className="shadow-lg bg-white max-w-sm rounded overflow-hidden">
                  <img src={member.imageUrl} alt={`${member.name} Image`} className="w-full" />
                  <div className="px-6 py-4 text-black">
                    <div className="font-bold text-xl mb-2">{member.name}</div>
                    <p className="text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span>:::::::</span>
      <section className="text-black py-20 px-6">
        <div className="mx-auto container max-w-7xl">
          <h2 className="underline text-5xl font-bold mb-10">About OPPAMS Technologies</h2>
          <p className="mb-8 text-xl">
            OPPAMS Technologies is a cutting-edge company geared towards providing diverse technological solutions across
            different sectors. Our commitment is to transform and revolutionize tech service delivery through consistent
            innovation.
          </p>
          <img
            src="https://placehold.co/1000x600/006bcc/ffffff?text=People%20Working%20at%20OPPAMS"
            alt="People Working at OPPAMS Technologies"
            className="object-cover w-full h-64 mb-8 rounded-lg"
          />
          <div className="sm:grid-cols-2 mb-8 grid grid-cols-1 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-3">Our Mission</h3>
              <p className="text-lg">
                To prioritize service delivery, maintain a consistent innovative edge, and build lasting relationships
                with our clients.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Our Vision</h3>
              <p className="text-lg">
                To become the go-to company for technological solutions, making significant impact across all sectors
                globally.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">Meet Our Team</h2>
          <div className="sm:grid-cols-2 md:grid-cols-3 mb-8 grid grid-cols-1 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="mb-8">
                <img
                  src={member.imageUrl}
                  alt={`${member.name} Image`}
                  className="object-cover w-full h-64 mb-3 rounded-lg"
                />
                <h3 className="text-2xl mb-2 font-bold">{member.name}</h3>
                <p className="text-lg">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About