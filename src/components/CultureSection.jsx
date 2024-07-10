const CultureSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold">Culture</h2>
      <p className="mt-4 max-w-2xl mx-auto">Chinese culture is one of the world's oldest cultures, tracing back thousands of years. It includes a rich heritage of art, literature, music, and traditions.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
      </div>
    </section>
  );
};

export default CultureSection;