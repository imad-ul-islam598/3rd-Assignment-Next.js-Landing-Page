import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-100 to-indigo-200"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          About Us
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
        Our mission is to provide high-quality and easily accessible education that fulfills the expectations of learners. 
        We create active and engaging courses on our site that aim to help learners attain their objectives.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-800 text-center mb-4">
              Quality Education
            </h3>
            <p className="text-center text-justify text-gray-600">
            We make sure to include courses designed by specialists, which provide information, 
            and skills that are practical and critical for your success. You don't need to worry about Good Quality Education.
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-800 text-center mb-4">
              Expert Guidance
            </h3>
            <p className="text-center text-justify text-gray-600">
            Gain insights from the knowledgeable instructors who incorporate real-world
             practices in all the courses they offer. They will guide you their best industry level experience.
            </p> 
          </div>

          <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-800 text-center mb-4">
              Learning Resources
            </h3>
            <p className="text-center text-justify text-gray-600">
            Utilize other resources such as videos, quizzes, and other downloadable materials 
            in order to enrich your understanding of the related Course. You can easily Download all the learning materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
