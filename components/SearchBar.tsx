export default function SearchBar() {
  return (
    <section className="bg-yellow-500 py-12">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Find Event Services Across Ghana
        </h2>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search vendors, venues, DJs, caterers..."
            className="flex-1 p-4 rounded-lg text-black bg-white"
          />

          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800">
            Search
          </button>

        </div>

      </div>
    </section>
  );
}