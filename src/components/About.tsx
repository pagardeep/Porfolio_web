import { useEffect, useState } from "react";
import { FaCode, FaShieldAlt, FaBrain, FaDatabase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const About = () => {
  const texts = ["Software Engineer", "Problem Solver"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentText = texts[textIndex];

    const interval = setInterval(() => {
      setDisplayText(currentText.slice(0, i + 1));
      i++;

      if (i === currentText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setDisplayText("");
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          
          {/* NAME */}
          <h2 className="text-4xl font-bold">
            Deep Pagar
          </h2>

          {/* ✅ FIXED TYPING */}
          <h3 className="text-2xl font-semibold text-yellow-500 min-h-[32px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Passionate about building scalable applications and secure digital systems. 
            B.Tech Computer Engineering student exploring the intersection of code & security.
          </p>

          {/* EDUCATION */}
          <div className="bg-white p-5 rounded-xl shadow-md border flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-gray-800">
                B.Tech Computer Engineering
              </h4>
              <p className="text-gray-500 text-sm">
                Current Student
              </p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-purple-500">
                8.7
              </p>
              <p className="text-xs text-gray-500">
                CGPA
              </p>
            </div>
          </div>

          {/* AREAS OF INTEREST */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-l-4 border-yellow-400 pl-2">
              Areas of Interest
            </h4>

            <div className="flex flex-wrap gap-3">

              <span className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                <FaDatabase /> Data Structures
              </span>

              <span className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                <MdWeb /> Web Development
              </span>

              <span className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                <FaShieldAlt /> Cybersecurity
              </span>

              <span className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                <FaBrain /> Problem Solving
              </span>

              <span className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                <FaCode /> Secure Software
              </span>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            className="w-72 md:w-80 object-contain animate-bounce-slow"
          />
        </div>

      </div>
    </section>
  );
};

export default About;