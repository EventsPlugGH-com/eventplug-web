 export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-600">
            EventsPlugGH
          </h1>

          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-600">
              Vendors
            </a>
            <a href="#" className="hover:text-yellow-600">
              Venues
            </a>
            <a href="#" className="hover:text-yellow-600">
              Events
            </a>
            <a href="#" className="hover:text-yellow-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Everything You Need For Your Event
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Discover venues, decorators, caterers, photographers,
            DJs, MCs and event professionals across Ghana.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400">
            Explore Vendors
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Photographers",
              "Decorators",
              "Caterers",
              "DJs",
              "MCs",
              "Venues",
              "Equipment Rentals",
              "Event Planners",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}