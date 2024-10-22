import React from 'react';

const courses = [
  { 
    title: 'Web Development', 
    description: 'Learn HTML, CSS, JavaScript & more.', 
    image: '/image1.jpg' 
  },
  { 
    title: 'Data Science', 
    description: 'Master data analysis and visualization.', 
    image: '/image2.jpg' 
  },
  { 
    title: 'AI & ML', 
    description: 'Dive into neural networks & AI models.', 
    image: '/image3.jpg' 
  },
  { 
    title: 'App Development', 
    description: 'Create Android & iOS apps.', 
    image: '/image4.jpg' 
  },
  { 
    title: 'Cybersecurity', 
    description: 'Understand threats & protect systems.', 
    image: '/image5.jpg' 
  },
  { 
    title: 'Cloud Computing', 
    description: 'Explore AWS, Azure, and cloud platforms.', 
    image: '/image6.jpg' 
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-2 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-48 w-full overflow-hidden rounded-md mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                {course.title}xl
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
