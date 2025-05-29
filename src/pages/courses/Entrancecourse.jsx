import React from 'react';
import Footer from '../../components/Footer';

const EntranceCourse = () => {
  const lectures = [
    {
      title: 'JEE Mains Crash Course',
      description: 'Fast-track your preparation with curated content.',
      price: '₹899',
      originalPrice: '₹1,999',
      image: 'https://img.freepik.com/free-photo/engineering-student-preparing_1098-19759.jpg'
    },
    {
      title: 'NEET Biology Boost',
      description: 'Quick revision for important Biology topics.',
      price: '₹749',
      originalPrice: '₹1,499',
      image: 'https://img.freepik.com/free-photo/student-reading-microscope_23-2148731874.jpg'
    },
    {
      title: 'Maths Problem-Solving Sessions',
      description: 'Practice sessions with IIT alumni.',
      price: '₹999',
      originalPrice: '₹2,199',
      image: 'https://img.freepik.com/free-photo/young-man-solving-math-board_23-2149051480.jpg'
    }
  ];

  return (
    <>
    <div className="px-8 py-20 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Entrance Exam Courses</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {lectures.map((lecture, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={lecture.image} alt={lecture.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{lecture.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{lecture.description}</p>
              <p className="text-lg font-bold text-green-600">{lecture.price} <span className="line-through text-sm text-gray-400">{lecture.originalPrice}</span></p>
              <button className="mt-4 bg-indigo-500 text-white w-full py-2 rounded hover:bg-indigo-600">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EntranceCourse;