import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-400 text-lg">
          We build modern web experiences using React, Tailwind and clean UI.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="team"
          className="rounded-2xl shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
          <p className="text-gray-400 mb-4">
            We are passionate developers focused on building scalable,
            responsive and beautiful web applications. Our goal is to create
            user-friendly products with clean code and modern design.
          </p>

          <p className="text-gray-400 mb-6">
            This project demonstrates routing, layout structure and reusable
            components in React.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-400">Projects</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-3xl font-bold">20+</h3>
          <p className="text-gray-400">Clients</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-gray-400">Years</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-gray-400">Satisfaction</p>
        </div>
      </div>

    </div>
  );
}

export default About;
