
import React from 'react';

const Projects = () => (
  <section className="p-4">
    <h2 className="text-xl font-semibold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-md p-4 rounded-2xl">
        <img src="/vite.svg" alt="Project 1" className="mb-2 w-full"/>
        <h3 className="font-bold">Expense Tracker</h3>
        <p>Manage your daily expenses easily with filtering and charts.</p>
      </div>
      <div className="bg-white shadow-md p-4 rounded-2xl">
        <img src="/vite.svg" alt="Project 2" className="mb-2 w-full"/>
        <h3 className="font-bold">Student Info System</h3>
        <p>Web app for managing student records and reports.</p>
      </div>
    </div>
  </section>
);

export default Projects;
