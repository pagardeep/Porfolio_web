const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE (TEXT) */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-yellow-500">Dip Dev</span>
          </h1>

          <p className="text-gray-600 max-w-lg">
            Full Stack Developer building fast, modern and user-friendly web
            applications ⚡
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border-2 border-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-800 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PIKACHU IMAGE) */}
        <div className="flex justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            className="w-72 md:w-96 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;