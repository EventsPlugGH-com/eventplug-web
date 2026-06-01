 export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}