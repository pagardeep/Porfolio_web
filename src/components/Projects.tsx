const Projects = () => {
  const projects = [
    {
      name: "Akatsuki Draft main ",
      desc: "In these project we add shayari and thoghts and more.",
      tech: ["React", "talwind", "typescript"],
      github: "https://github.com/pagardeep/Akatsuki-Drafts-Project",
      live: "https://thundertask.vercel.app",
    },
    {
      name: "Calculator",
      desc: "enhance my html, css and js concept.",
      tech: ["html", "css", "js"],
      github: "https://github.com/pagardeep/SCT_WD_02",
      live: "https://emberchat.vercel.app",
    },
    
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400 text-black px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-center">

                {/* Live */}
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-yellow-400 rounded font-semibold hover:bg-yellow-500 transition"
                >
                  Live
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border rounded font-semibold hover:bg-gray-800 hover:text-white transition"
                >
                  GitHub
                </a>

              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;