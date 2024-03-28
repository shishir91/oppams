import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <h2 className='text-xl font-bold text-center mb-8 text-gray-700'>Don’t hesitate to contact us any time for any information.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Address:</strong> Sanagaun, Lalitpur, Nepal</p>
            <p className="mb-2"><strong>Phone:</strong>(+977) 9813555561</p>
            <p className="mb-2"><strong>Email:</strong> oppamstechnologies@gmail.com</p>
            {/* Map (You can replace the URL with your own Google Maps iframe) */}
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.0358224638703!2d67.999896!3d24.4730589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb118a2dc4aead%3A0x23e73a19552c269e!2sOPPAMS%20TECHNOLOGIES!5e0!3m2!1sen!2s!4v1647543988533!5m2!1sen!2s" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
        {/* Message Confirmation (Optional) */}
        {/* <div className="mt-8 bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Thank you for reaching out!</h2>
          <p className="mb-4">We have received your message and will get back to you as soon as possible.</p>
        </div> */}
      </div>
    </div>
  );
}

export default ContactUs;
