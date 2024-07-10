const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Message" className="w-full px-4 py-2 border rounded" rows="4"></textarea>
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Submit</button>
      </form>
    </section>
  );
};

export default ContactSection;