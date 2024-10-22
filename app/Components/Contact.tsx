import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
          Contact Us
        </h2>
        <p className="text-lg text-center max-w-xl mx-auto mb-12 text-gray-600">
        If you have any query do not hesitate to contact us.
        </p>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#001845] text-white py-3 rounded-lg hover:bg-[#000056] transition"
          >
            Send Message
          </button>
        </form>

        {/* Google Map Location */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold text-center mb-6">Our Location</h3>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5313906350557!2d67.19876541033442!3d24.845694277846817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309a1285ed8b%3A0xf6996718975e5724!2s89%20Landhi%20Rd%2C%20Sector%2037%20B%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729532634495!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Our Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
