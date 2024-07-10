const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-gray-200">
      <img src="/placeholder.svg" alt="placeholder" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-4xl font-bold">Discover the Wonders of China</h1>
        <p className="mt-4 text-xl">Explore the rich culture, history, and beauty of China</p>
        <button className="mt-6 px-4 py-2 bg-red-600 rounded">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;