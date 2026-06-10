 "use client";

import { useState } from "react";
import VendorCard from "./VendorCard";

const vendors = [
  {
    name: "Royal Event Decor",
    location: "Accra, Ghana",
    category: "Decorator",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  },
  {
    name: "Elite Catering",
    location: "Kumasi, Ghana",
    category: "Caterer",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033",
  },
  {
    name: "DJ Xclusive",
    location: "Tema, Ghana",
    category: "DJ",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
];

    export default function Vendors() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Featured Vendors
        </h2>
        <div className="mb-10">
        <input
            type="text"
            placeholder="Search vendors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border rounded-lg shadow-sm"
            />
            </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <VendorCard
             key={index}
             vendor={vendor}
             id={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}