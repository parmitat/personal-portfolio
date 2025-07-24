
export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-transparent">
      <div className="max-w-3xl w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 p-8 rounded-xl border border-white/10 bg-white/5 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_16px_rgba(59,130,246,0.15)] transition-all">
            <h3 className="text-xl font-bold mb-2 text-center">Portfolio</h3>
            <p className="text-gray-400 mb-6 text-center">
              A sleek and responsive personal portfolio built with React and Tailwind CSS, showcasing my skills and projects.
              Designed for performance, clarity, and a smooth user experience across devices.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["React", "TailwindCSS", "MYSQL","MongoDB"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 