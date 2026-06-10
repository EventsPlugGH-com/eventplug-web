export default function Categories() {
  const categories = [
    "Photographers",
    "Decorators",
    "Caterers",
    "DJs",
    "MCs",
    "Venues",
    "Equipment Rentals",
    "Event Planners",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}