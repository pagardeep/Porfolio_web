const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Database",
      skills: ["SQL"],
    },
    {
      title: "Tools",
      skills: ["GitHub", "VS Code", "JDK"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 font-bold">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl mb-12 animate-fadeIn">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md 
              transition duration-500 transform hover:-translate-y-2 hover:shadow-xl 
              animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Title */}
              <h3 className="text-lg mb-4 text-yellow-500">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm 
                    transition duration-300 transform hover:scale-110 
                    hover:bg-yellow-400 hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;