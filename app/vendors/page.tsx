 import VendorCard from "../../components/VendorCard";

export default function VendorsPage() {
  const vendors = [
    {
      name: "Royal Event Decor",
      location: "Accra, Ghana",
      category: "Decorator",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600",
    },
    {
      name: "Elite Catering",
      location: "Kumasi, Ghana",
      category: "Caterer",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=600",
    },
    {
      name: "DJ Thunder",
      location: "Tema, Ghana",
      category: "DJ",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    },
    {
      name: "Accra Photography",
      location: "Accra, Ghana",
      category: "Photographer",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    },
    {
      name: "MC Kofi",
      location: "Takoradi, Ghana",
      category: "MC",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    },
    {
      name: "Golden Venues",
      location: "East Legon, Accra",
      category: "Venue",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          Vendors Directory
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Browse decorators, caterers, DJs, photographers, MCs and more.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} id={index + 1} />
          ))}
        </div>
      </div>
    </main>
  );
}