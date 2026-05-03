const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded" />

          <button className="w-full bg-yellow-400 py-3 rounded font-bold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;