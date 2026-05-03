const Navbar = () => {
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">
        <h1 className="font-bold text-lg text-yellow-500">⚡ PikaDev</h1>

        <ul className="flex gap-6 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <a href="#skills" className="hover:text-yellow-400 transition">
  Skills
</a>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;