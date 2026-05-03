const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>

          <p className="text-gray-600 leading-relaxed">
            I am a passionate full-stack developer who loves building scalable,
            high-performance, and visually appealing web applications.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I work with modern technologies like React, TypeScript, and Tailwind
            to create clean and user-friendly interfaces.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Tailwind", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="bg-yellow-400 px-4 py-1 rounded font-semibold text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            className="w-72 md:w-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;