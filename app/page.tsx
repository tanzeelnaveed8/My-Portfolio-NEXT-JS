"use client"; // Add this line at the top of your file

import Head from 'next/head';
import Navbar from '@/app/components/navbar';

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Tanzeel Khan Portfolio</title>
      </Head>
      <Navbar />
      <main className="container">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Profile Image */}
          <img
            src="/profile.jpg" // Ensure your image is in the public folder
            alt="Tanzeel Naveed Khan"
            className="w-52 h-62 rounded-full mb-4 shadow-lg" // Adjusted height to 52 for better aspect ratio
          />
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-xl mb-8">I'm Tanzeel Naveed Khan,Frontend & Backend Web Developer | Designer.</p>
          <a href="#projects" className="bg-primary text-white py-3 px-6 rounded-lg">View Projects</a>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p>
            Hey, my name is Tanzeel Naveed Khan. I'm a intermediate student at GIAIC,
            studying Artificial Intelligence, Web 3.0, and Metaverse. I'm starting
            my journey as a frontend and backend web developer, passionate about creating interactive,
            dynamic websites.
          </p>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black text-light p-6 rounded-lg shadow-md">
              {/* Add project image here */}
              <img
                src="/pro2.png" // Make sure this image is in the public folder
                alt=" Website"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3>Restaurant Interface Website</h3>
              <p>This project was aimed at designing an intuitive and visually appealing website for a restaurant. The platform enhances the dining experience by allowing customers to explore the menu, make reservations, and view special offers. Key features include:</p>
              <ul>
                <li>Responsive design for seamless navigation across all devices.</li>
                <li>Beautifully designed menu sections with images and detailed descriptions.</li>
                <li>Online reservation system for hassle-free table booking.</li>
                <li>Special offers and promotions section to attract and engage customers.</li>
                <li>Embedded Google Maps for easy restaurant location access.</li>
              </ul>

            </div>
            {/* Project 2 */}
            <div className="bg-black text-light p-6 rounded-lg shadow-md">
              {/* Add project image here */}
              <img
                src="/pro.png" // Ensure this image is in the public folder
                alt="Countdown Timer"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3>Countdown Timer for Client</h3>
              <p>This project involved creating a customizable countdown timer for a client's event. The timer is designed to generate excitement and anticipation leading up to the event. Key features include:</p>
              <ul>
                <li>Customizable timer settings for different events (e.g., product launches, sales, etc.).</li>
                <li>Responsive design to ensure it looks great on all devices.</li>
                <li>Dynamic display of remaining time in days, hours, minutes, and seconds.</li>
                <li>Option to trigger notifications or visual effects as the event approaches.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>React.js</li>
            <li>Frontend Development
              <li>Javascript</li>
              <li>Typecript</li>
              <li> Web Designer</li>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h3 className="section-title">Contact Me</h3>
          <p className="section-description">
            If you'd like to collaborate or have any questions, feel free to reach out!
          </p>
          <div className="contact-form-container">
            <a href="mailto:tanzeel@example.com" className="contact-button">
              Email Me
            </a>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
              <textarea
                placeholder="Your Message"
                className="form-textarea"
                rows={4}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
            {/* GitHub and LinkedIn Links */}
            <div className="social-links mt-4">
              <a href="https://github.com/tanzeelnaveed8" className="social-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a href="https://linkedin.com/in/tanzeel-naveed-660491312" className="social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
