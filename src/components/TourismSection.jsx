const TourismSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold">Tourism</h2>
      <p className="mt-4 max-w-2xl mx-auto">China offers a plethora of tourist destinations, from historical landmarks to natural wonders.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-2">Great Wall of China</p>
        </div>
        <div>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-2">Forbidden City</p>
        </div>
        <div>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-2">Terracotta Army</p>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;