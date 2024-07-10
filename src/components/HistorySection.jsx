const HistorySection = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">History</h2>
      <p className="mt-4 max-w-2xl mx-auto">China has a long and storied history, with ancient civilizations, dynasties, and significant historical events that have shaped the nation.</p>
      <div className="mt-8 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">221 BC</h3>
          <p>Qin Dynasty unifies China</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">618 AD</h3>
          <p>Tang Dynasty begins</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">1949 AD</h3>
          <p>People's Republic of China established</p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;